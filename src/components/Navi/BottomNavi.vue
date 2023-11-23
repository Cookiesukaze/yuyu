<template>
  <div>
    <!--底部-->
    <van-tabbar route v-model="active_tabbar" @change="onChange">
      <van-tabbar-item icon="comment-o" replace to="/chat">闲聊</van-tabbar-item>
      <van-tabbar-item replace to="/psyc">
        <template #icon="props">
          <img :src="props.active ? heart_icon.active : heart_icon.inactive" style="height: 9vw;width: 9vw"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="smile-o" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "../../assets/css/global.css"
export default {
  components: {},
  data() {
    return {
      active_tabbar:"0",
      heart_icon: {
        active: 'https://z1.ax1x.com/2023/11/19/piUmq0J.png',
        inactive: 'https://z1.ax1x.com/2023/11/19/piUmL79.png',
      },
    }
  },
  methods:{
    onChange(index) {
      this.active_tabbar = index;
    },
}
}
</script>
