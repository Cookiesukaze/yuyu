<template>
  <div class="container">
    <div class="content-1">
      <div class="notice">
        <h2>心理咨询预约须知</h2>
        <p>1. 请提前预约咨询时间，以便我们为您安排合适的咨询师。</p>
        <p>2. 在咨询前，请确保您已仔细阅读并同意本协议。</p>
        <p>3. 咨询过程中，请保持诚实、开放和尊重的态度。</p>
        <p>4. 咨询内容将严格保密，除非涉及到法律或安全问题。</p>
        <p>5. 如有需要取消或改约咨询，请提前通知我们。</p>
      </div>
      <div class="agreement">
        <input type="checkbox" v-model="checked" id="agreement-check" />
        <label for="agreement-check">我已阅读并同意以上须知和协议书</label>
      </div>
    </div>
    <div class="button-wrapper">
      <el-button type="primary" :disabled="!checked" @click="gotoAppo">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods:{
    gotoAppo(){
      if(this.checked)this.$router.push('/Appointment');
    },
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-1 {
  flex: 1;
  padding: 10px;
}

.notice {
  margin-bottom: 20px;
}

.notice h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.notice p {
  margin-bottom: 5px;
}

.agreement {
  display: flex;
  align-items: center;
}

.button-wrapper {
  padding: 20px;
  text-align: center;
}
</style>
