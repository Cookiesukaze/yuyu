<template>
  <div class="center">
    <div class="mood-card card2_withtext"  style="width:80%;height: 30vw ">

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
