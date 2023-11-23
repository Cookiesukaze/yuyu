<template>
  <div class="wrap">
    <van-nav-bar
        class="top-bar"
        :title="leftName"
        left-text="返回"
        right-text="设置"
        left-arrow
        @click-left="onClickLeft(leftName,chatList[chatList.length - 1].content)"
        @click-right="onClickRight"
    />

    <div class="content_box" id="box" ref="scrollBox">
      <div class="timer">2022-08-02 11:08:07</div>
      <div
          :class="item.position === 'left' ? 'userbox2' : 'userbox'"
          v-for="(item, index) in chatList"
          :key="index"
      >
        <div :class="item.position === 'left' ? 'nameInfo2' : 'nameInfo'">
          <div style="font-size: 14px">{{ item.position==='left' ? leftName : userName }}</div>
          <div
              :class="item.position === 'left' ? 'contentText2' : 'contentText'"
          >
            {{ item.content }}
          </div>
        </div>
        <div>
          <van-image round width="12vw" height="12vw" :src="item.position === 'left'? leftAvatar: userAvatar" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-field
          v-model="inputValue"
          center
          type="textarea"
          :autosize="{ maxHeight: 100, minHeight: 25 }"
          placeholder="请输入内容"
          rows="1"
      >
        <template #left-icon>
          <van-button size="small" type="primary" color="#ffffff" >
            <van-icon name="phone-o" size="6vw" color="#4592fa"/>
          </van-button>
        </template>
        <template #button>
          <van-button size="small" type="primary" color="#ffffff" >
            <van-icon name="add-o" size="6vw" color="#4592fa"/>
          </van-button>
          <van-button size="small" type="primary" @click="sendOut" color="#ffffff" >
            <van-icon name="guide-o" size="6vw" color="#4592fa"/>
          </van-button>
        </template>

      </van-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      //聊天数据
      chatList: [
        {
          content: "您好，方便和我说一下您的烦恼吗？",
          position: "left",
        },

      ],
      leftName:'',
      leftAvatar:'',
      userName: "小明",
      userAvatar:'https://z1.ax1x.com/2023/11/15/piYlmjO.png',
      //输入内容
      inputValue: "",
      //滚动条距离顶部距离
      scrollTop:0,
    };
  },
  mounted(){
    this.leftName = this.info.name;
    this.leftAvatar = this.info.avatar;

    this.setPageScrollTo()
    //创建监听内容部分滚动条滚动
    this.$refs.scrollBox.addEventListener('scroll',this.srTop)
  },
  methods: {
    //返回
    onClickLeft(updatedName,updatedContent) {
      // this.$router.push('/chat');
      if (updatedContent.length > 15) updatedContent =  updatedContent.substring(0, 15) + '...';
      this.$router.push({
        name: 'Chat',
        params: { updatedName,updatedContent }
      });
    },
    //更多
    onClickRight() {
      console.log("按钮");
    },
    // eslint-disable-next-line no-unused-vars
    setPageScrollTo(s, c) {
      this.scrollTop = document.querySelector("#box").offsetHeight;
      // eslint-disable-next-line no-unused-vars
      setTimeout((res) => {

        if (this.scrollTop !== this.$refs.scrollBox.offsetHeight) {
          this.scrollTop = document.querySelector("#box").offsetHeight;
        }
      }, 100);
      this.$refs.scrollBox.scrollTop = this.scrollTop;
    },
    //滚动条到达顶部
    srTop(){
      if(this.$refs.scrollBox.scrollTop===0){
        console.log('到顶了，滚动条位置 :',this.$refs.scrollBox.scrollTop);
      }
    },
    sendOut(){
      console.log('发送成功:');
      console.log(this.inputValue);
      const newMessage = {
        content: this.inputValue,
        position: "right"
      };
      this.chatList.push(newMessage);
      // 发送 POST 请求
      axios.post('/human1', { message: newMessage.content })
          .then(response => {
            // 根据接收到的响应处理逻辑
            const receivedMessage = response.data;
            // console.log(receivedMessage);
            if (receivedMessage) {
              this.chatList.push(receivedMessage);
            }
          })
          .catch(error => {
            console.log('发送消息失败:', error);
          });

      // 清空输入框的内容
      this.inputValue = "";
    }
  },
};
</script>

<style scoped>
.wrap {
  height: 100%;
  width: 100%;
  position: relative;
}
.title {
  height: 40px;
  width: 100%;
  background-color: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  min-height: 50px;
  width: 100%;
  border-top: 1px solid #eaeaea;
  position: fixed;
  bottom: 0;
}
.content_box {
  /*
  中间栏计算高度，110是包含了上下固定的两个元素高度90
  这里padding：10px造成的上下够加了10，把盒子撑大了，所以一共是20要减掉
  然后不知道是边框还是组件的原因，导致多出了一些，这里再减去5px刚好。不然会出现滚动条到顶或者底部的时候再滚动的话就会报一个错，或者出现滚动条变长一下的bug
  */
  height: calc(100% - 115px);
  overflow: auto;
  padding: 10px;
  margin-bottom: 15vw;
}
.timer {
  font-size: 0.8rem;
  text-align: center;
  color: #c2c2c2;
  margin-bottom: 5vw;
}

/* 发送的信息样式 */
/*
右边消息思路解释：首先大盒子userbox内放两个盒子，一个放头像，一个放用户名和发送的内容，我们先用flex让他横向排列。
然后把写文字的大盒子设置flex：1。这个属性的意思就是让这个元素撑满父盒子剩余位置。然后我们再把文字盒子设置flex，并把他对齐方式设置为尾部对齐就完成了基本的结构，然后微调一下就可以了
*/

.nameInfo {
  /* 用flex：1把盒子撑开 */
  flex: 1;
  margin-right: 10px;
  /* 用align-items把元素靠右对齐 */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.contentText {
//background-color: #9eea6a;
  background-color: #4592fa;
  /* 把内容部分改为行内块元素，因为盒子flex：1把盒子撑大了，所以用行内块元素让内容宽度不根据父盒子来 */
  display: inline-block;
  /* 这四句是圆角 */
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  /* 最大宽度限定内容输入到百分61换行 */
  max-width: 61%;
  padding: 5px 10px;
  /* 忽略多余的空白，只保留一个空白 */
  white-space: normal;
  /* 换行显示全部字符 */
  word-break: break-all;
  margin-top: 3px;
  font-size: 14px;
  color: white;
}
.userbox {
  width: 100%;
  display: flex;
  margin-bottom: 8vw;
}
/* 接收的信息样式 */
/*
左边消息思路解释：跟上面一样，就是换一下位置，首先通过把最外层大盒子的排列方式通过flex-direction: row-reverse;属性翻转，也就是头像和文字盒子换位置
然后删除掉尾部对齐方式，因为不写这个默认是左对齐的。我们写的左边就没必要再写了。
*/
.userbox2 {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 8vw;
}
.nameInfo2 {
  /* 用flex：1把盒子撑开 */
  flex: 1;
  margin-left: 10px;
}
.contentText2 {
//background-color: #9eea6a;
  background-color: #ededed;
  /* 把内容部分改为行内块元素，因为盒子flex：1把盒子撑大了，所以用行内块元素让内容宽度不根据父盒子来 */
  display: inline-block;
  /* 这四句是圆角 */
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  /* 最大宽度限定内容输入到百分61换行 */
  max-width: 61%;
  padding: 5px 10px;
  /* 忽略多余的空白，只保留一个空白 */
  white-space: normal;
  /* 换行显示全部字符 */
  word-break: break-all;
  margin-top: 3px;
  font-size: 14px;
}
</style>
