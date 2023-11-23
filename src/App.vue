<!--
1.添加vue组件
2.在其他组件中使用
3.在index.js中声明
-->
<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {},
  computed: {
    computed: mapGetters(['allPosts']),
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }


}
</script>

<style>
@import "~@/assets/font/font.css";
body{
  font-family: opposans,微软雅黑,monospace;
}
#app{
  height: 100%;
  margin:0;
  padding:0;
}
html,body{
  height: 100%;

}
</style>
