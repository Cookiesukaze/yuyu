from flask import Flask, request, jsonify
from http import HTTPStatus
from gevent import pywsgi
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)
fake_return_list = [
    {"ques": '1', "content": '你好', "time": 1},
    {"ques": '你好', "content": '请问你有什么困扰吗', "time": 1},
    {"ques": '2', "content": '请问你有什么困扰吗，请告诉我您的困扰，我会为您提供建议', "time": 1},
]


@app.route('/human1', methods=['POST'])
def conversation_with_messages():
    global fake_return_list
    data = request.json
    user_input = data['message']
    res = 'null'

    for item in fake_return_list:
        if item['ques'] == user_input:
            time.sleep(item['time'])
            res = jsonify({'content': item['content'], 'position': "left", })
    if res != 'null':
        return res
    elif res == 'null':
        return None
    else:
        return jsonify({'error': "错误"}), 500


if __name__ == '__main__':
    server = pywsgi.WSGIServer(('127.0.0.1', 5000), app)
    # server = pywsgi.WSGIServer(('0.0.0.0', 5000), app)
    server.serve_forever()
