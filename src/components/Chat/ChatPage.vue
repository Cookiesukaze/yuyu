<template>
  <div>
<!--    顶部，头像框和按钮两个-->
    <div class="horizontal">
      <div class="left-section">
        <van-image
            round
            width="10vw"
            height="10vw"
            src="https://z1.ax1x.com/2023/11/15/piYlmjO.png"
            class="marginl2 margint2"
        />
        <div class="nickname marginl2 margint2">
          {{ nickname }}
        </div>
      </div>
      <div class="right-section">
        <div>
          <van-icon name="friends-o marginr2 margint2" size="2rem"/>
        </div>
        <div>
          <van-icon name="plus marginr2 margint2-5" size="1.6rem"/>
        </div>
      </div>
    </div>
    <!--搜索框-->
    <van-search
        v-model="search_value"
        placeholder="请输入搜索关键词"
        input-align="center"
    />
<!--    小愈卡片-->
    <div class="center" @click="gotoChatInnerBot">
      <van-card
          style="border-radius: 10px;width: 90%;"
          class="center"
          thumb="https://z1.ax1x.com/2023/11/23/piwAwon.png"
      >
        <template #title>
          <div class="margint2 marginl2 van-card__title">小愈</div>
        </template>
        <template #desc>
          <div class="margint2 marginl2 grey" >
            <van-icon name="clock-o"/>
            2分钟前
          </div>
          <div class="margint2 marginl2">你的专属心理干预聊天机器人</div>
        </template>
        <template #footer>
<!--          <van-button size="mini" class="grey" >前往聊天</van-button>-->
          <van-icon name="arrow" class="grey marginl2" size="1.2rem"/>
        </template>
      </van-card>
    </div>
<!--    聊天列表-->
    <div class="chat-list margint2" >
      <div class="chat-item" v-for="(chat, index) in chatList" :key="index" @click="gotoChatInner(chatList[index])">
        <div class="avatar">
          <img :src="chat.avatar" alt="Avatar" />
        </div>
        <div class="content">
          <div class="horizontal">
            <div class="name">{{ chat.name }}</div>
            <div class="time right-section">{{ chat.time }}</div> <!-- 添加时间显示 -->
          </div>
          <div class="message">{{ chat.message }}</div>
        </div>
      </div>
    </div>
<!--底部-->
    <BottomNavi></BottomNavi>
  </div>
</template>

<script>
import "../../assets/css/global.css"
import BottomNavi from "@/components/Navi/BottomNavi.vue";
export default {
  props: {
    updatedName: {
      type: String,
      required: false
    },
    updatedContent: {
      type: String,
      required: false
    },
    newChat:{
      type: Object,
      required:false,
    }
  },
  components: {BottomNavi},
  data() {
    return {
      chatList: [
        {
          name: "王华",
          avatar: "https://z1.ax1x.com/2023/11/19/piUQ4QP.png",
          message: "您好，方便和我说一下您的烦恼吗？",
          time: "下午 12:30"
        },
        {
          name: "张磊",
          avatar: "https://z1.ax1x.com/2023/11/19/piUQfzt.png",
          message: "我非常理解您的感受...",
          time: "下午 1:45"
        },
      ],
      nickname:"小明",
      search_value:"",
      curContent:'',
      curName:'',
    }
  },
  watch: {
    curContent() {
      this.updateChatList();
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.curName = this.updatedName;
    this.curContent = this.updatedContent;
    if(this.newChat){
      console.log(this.newChat)
      this.chatList.push(this.newChat);
    }
  },
  beforeUpdate() {},
  updated() {},
  destroyed() {},
  methods: {
    gotoChatInnerBot(){
      this.$router.push('/chatinnerbot');
    },
    gotoChatInner(info) {
      this.$router.push({
        name: 'ChatInner',
        params: { info }
      });
    },
    updateChatList() {
      console.log("更新：")
      this.chatList.forEach(item => {
        if (item.name === this.updatedName) {
          item.message = this.updatedContent;
        }
      });
    }
  },
  fillter: {},
}
</script>

<style scoped lang="less">
/deep/ .van-card__title {
  margin-top:2vw;
  font-size: 1.1rem;
}
.van-card{
  background: #f7f8fa;
}

.chat-list {
  background-color: #ffffff;
  padding: 2vw;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 2vw;
  background-color: #fff;
  margin-bottom: 2vw;
}

.avatar {
  width:40px;
  height: 40px;
  margin-right: 4vw;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.message {
  margin-top:-0.2rem;
  font-size: 0.9rem;
  color: #888;
}

.time {
  position: absolute;
  right: 10vw;
  font-size: 0.7rem;
  color: #888;
}
</style>
