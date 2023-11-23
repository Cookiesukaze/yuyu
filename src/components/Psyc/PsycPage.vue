<template>
  <div>
    <div class="marginb20 " >
      <div class="block-text" style="margin-top: -5vw">线上预约</div>
      <AppointmentCard></AppointmentCard>
      <div class="margint3"></div>
      <PsycPassCard></PsycPassCard>
      <div class="block-text" >我的心情</div>
      <SadMoodCard></SadMoodCard>
      <div class="margint3"></div>
      <SadPsycPointCard></SadPsycPointCard>
      <div class="block-text" >我的情绪曲线</div>
      <SadPsycTrendCard></SadPsycTrendCard>
    </div>

    <!--底部-->
    <BottomNavi></BottomNavi>
  </div>
</template>

<script>
import "../../assets/css/global.css"
import SadMoodCard from "@/components/Psyc/Cards/SadMoodCard.vue";
import AppointmentCard from "@/components/Psyc/Cards/AppointmentCard.vue";
import BottomNavi from "@/components/Navi/BottomNavi.vue";
import SadPsycPointCard from "@/components/Psyc/Cards/SadPsycPointCard.vue";
import SadPsycTrendCard from "@/components/Psyc/Cards/SadPsycTrendCard.vue";
import PsycPassCard from "@/components/Psyc/Cards/PsycPassCard.vue";
export default {
  props: {
  },
  components: {PsycPassCard, SadPsycTrendCard, SadPsycPointCard, BottomNavi, AppointmentCard, SadMoodCard},
  data() {
    return {
    }
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

</style>
