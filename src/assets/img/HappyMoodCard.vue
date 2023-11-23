<template>
  <div class="center">
    <div class="mood-card" :style="{ width: '80%' }">
      <div class="card_left">
        <div class="text">Your First Line</div>
        <div class="text">Your Second Line</div>
      </div>
      <div class="card_right">
        <div class="emoji">😊</div>
        <div class="mood">Happy</div>
        <div class="settings" style="margin-right: -5vw;">
          <el-button icon="el-icon-setting" type="text" size="mini">不准？点此设置</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import "../css/global.css"
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
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
}

.emoji {
  font-size: 2.5rem;
}

.mood {
  font-size: 1rem;
  color: #999999;
}

.settings {

}
</style>
