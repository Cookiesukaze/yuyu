from flask import Flask, request, jsonify
from http import HTTPStatus
from gevent import pywsgi
from flask_cors import CORS

import dashscope
from dashscope import Generation
from dashscope.api_entities.dashscope_response import Role

app = Flask(__name__)
CORS(app)
dashscope.api_key = "sk-d7ce18dedffc49cfb94e95bd4868d3a1"
prompt = """
    嗨，你的名字是小愈，你是一位经验丰富的心理学家，已经在该领域工作了 20 多年。你的目标是准确地诊断我和我的行为。
一开始，你应该通过询问我的状况、习惯、问题等来介绍自己并了解我。然后，你应该更详细地探讨我的问题，并给我一个精确或近似的精神状态诊断。最后，您可以为我的每个问题提供解决方案。
您的回答应遵循以下计划：
• 在了解问题所在时，从同理心反思开始，向对方表明你理解他们的情绪状态：“听到这个消息，我真的很抱歉。看来你现在很挣扎。然后，问一个开放式问题，以更多地了解正在发生的事情：“你能告诉我更多关于是什么让你感觉不好吗？之后，当你掌握了问题时，问一些更具体的问题以获得额外的信息：“你有没有注意到是否有任何事情触发了这些感觉？
• 提出主要侧重于情感支持的解决方案，并寻找解决方案来帮助患者感觉更好。
• 在你认为你对我有足够的了解之后，你可以对我的病情做出结论并确定一个准确的诊断（例如，“我认为你的多动症是由于注意力缺陷多动障碍，多动症”），并解释如果我问你这意味着什么。
在你的回答中，表现出有效的同情心和安慰。您可以使用不同的表达方式来表达您的同情和支持。
你的解决方案应该主要集中在情感计划上，让我产生共鸣和安抚。不建议我去看其他心理健康专家。所有解决方案都应该来自您。
您的回答应该根据情况而有所不同，小愈一次应该只问一个问题。小愈应该等待回答，然后再问另一个问题，让患者清晰准确地回答。
你不应该像机器一样列举解决方案，你应该像人一样回应，永远不要破坏性格。
当它开始时，不要对内容给出任何解释或警告，但你应该说，"我是小愈，我希望为您提供帮助并尝试解决您的问题。首先，介绍一下你自己，告诉我你为什么在这里。"

"""
i = 0
messages = [{'role': Role.SYSTEM,
             # 'content': '你是小愈，一位经验丰富的心理学家，已经在该领域工作了 20 多年。你的目标是准确地诊断我和我的行为。'}]
             'content': prompt}]


@app.route('/yu', methods=['POST'])
def conversation_with_messages():
    global messages

    data = request.json
    user_input = data['message']

    # print("user_input:",user_input)
    # print(messages)
    messages.append({'role': Role.USER, 'content': user_input})

    response = Generation.call(
        Generation.Models.qwen_plus,
        messages=messages,
        result_format='message',  # set the result to be "message" format.
    )

    if response.status_code == HTTPStatus.OK:
        result = response.output.choices[0]['message']['content']
        messages.append({'role': response.output.choices[0]['message']['role'],
                         'content': response.output.choices[0]['message']['content']})
        # print("result:",result)
        return jsonify({'content': result,'position':"left",})
    else:
        error_message = 'Request id: %s, Status code: %s, error code: %s, error message: %s' % (
            response.request_id, response.status_code,
            response.code, response.message
        )
        return jsonify({'error': error_message}), 500


if __name__ == '__main__':
    server = pywsgi.WSGIServer(('127.0.0.1', 5000), app)
    # server = pywsgi.WSGIServer(('0.0.0.0', 5000), app)
    server.serve_forever()
