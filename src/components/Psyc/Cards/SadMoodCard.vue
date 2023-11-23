<template>
  <div class="center">
    <div class="mood-card card1_background" :style="{ width: '80%' }">
      <div class="card_left">
        <div class="text">您已经连续难过六天</div>
        <div class="text-1">糟糕的事会过去的，相信自己。</div>
      </div>
      <div class="card_right">
        <div class="emoji">😭</div>
        <div class="mood">难过</div>
        <div class="settings" style="margin-right: -5vw;">
          <el-button icon="el-icon-setting" type="text" size="mini">不准？点此设置</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import "../../../assets/css/global.css"
export default {
  props: {
  },
  components: {},
  data() {
    return {}
  },
  watch: {

  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
  },
  beforeUpdate() {},
  updated() {},
  destroyed() {},
  methods: {
  },
  fillter: {},
}
</script>

<style scoped>

.card_left {
  flex: 1;
  margin-left: 1rem;
}

.card_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top:2rem;
  margin-right: 2rem;
}

.text {
  font-size: 1rem;
  line-height: 2.1;
  color: #333333;
}
.text-1 {
  font-size: 0.692rem;
  line-height: 1.5;
  color: #AAAAAA;
}
.emoji {
  font-size: 2.5rem;
}

.mood {
  font-size: 0.9rem;
  margin-right: 2.5vw;
  color: #999999;
}

.settings {

}
</style>
