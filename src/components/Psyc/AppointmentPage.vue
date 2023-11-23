<template>
  <div>
    <!--搜索框-->
    <van-search
        v-model="search_value"
        placeholder="请输入搜索关键词"
        input-align="center"
    />
<!--    查看所有-->
    <div class = "center" @click="gotoAllAppo">
      <div style="border: 1px solid #ebedf0; width: 90%;" >
        <div style="padding:3vw;" class="horizontal">
          <div class ="left-section marginl2" >
            查看所有
          </div>
          <div class ="right-section">
            <van-icon name="arrow" size="1rem" class="margint1"/>
          </div>
        </div>
      </div>
    </div>
<!--    过去预约框-->
    <div class="block-text">过去预约</div>
    <div v-for="(piece, index) in pastAppoList" :key="index">
      <van-cell :value="piece.cost+' 元起'" is-link @click="gotoTimeChoose(piece)">
        <template #title>
          <div class="horizontal">
            <div class="avatar" style="flex-shrink:0">
              <img :src="piece.avatar" alt="Avatar" />
            </div>
            <div class="vertical">
              <div class="horizontal">
                <span class="custom-title" style="flex-shrink:0">{{ piece.name }}</span>
                <div class="star">
                  <van-rate  allow-half v-model="piece.score" size="0.7rem" style="margin-top:1.5vw;"/>
                </div>
              </div>
              <div style="width: 200%;font-size: 0.75rem" class="grey">{{piece.overview}}</div>
            </div>
          </div>
        </template>
        <template #label >
          <div class="horizontal">
            <div v-for="(label, index_l) in piece.labels" :key="index_l" style="margin-left: 2vw;">
              <van-tag plain type="primary">{{ label }}</van-tag>
            </div>
          </div>
        </template>
      </van-cell>
    </div>
<!--    推荐框-->
    <div class="block-text">推荐心理咨询师</div>
    <div v-for="(piece, index) in recoAppoList" :key="index">
      <van-cell :value="piece.cost+' 元起'" is-link @click="gotoTimeChoose(piece)">
        <template #title>
          <div class="horizontal">
            <div class="avatar" style="flex-shrink:0;">
              <img :src="piece.avatar" alt="Avatar" />
            </div>
            <div class="vertical">
              <div class="horizontal">
                <span class="custom-title" style="flex-shrink:0">{{ piece.name }}</span>
                <div class="star">
                  <van-rate  allow-half v-model="piece.score" size="0.7rem" style="margin-top:1.5vw;"/>
                </div>
              </div>
              <div style="width: 200%;font-size: 0.75rem" class="grey">{{piece.overview}}</div>
            </div>
          </div>
        </template>
        <template #label >
          <div class="horizontal">
            <div v-for="(label, index_l) in piece.labels" :key="index_l" style="margin-left: 2vw;">
              <van-tag plain type="primary">{{ label }}</van-tag>
            </div>
          </div>
        </template>
      </van-cell>
    </div>

  </div>
</template>

<script>
import "../../assets/css/global.css"
export default {
  props: {
  },
  components: {},
  data() {
    return {
      search_value:"",
      pastAppoList: [
        {
          id:"0001",
          name: "王华",
          avatar: "https://z1.ax1x.com/2023/11/19/piUQ4QP.png",
          overview: "二级心理咨询师",
          cost:320,
          labels:["持证","仅视频","抑郁症"],
          score:'4.5',
        },
        {
          id:"0002",
          name: "张磊",
          avatar: "https://z1.ax1x.com/2023/11/19/piUQfzt.png",
          overview: "副主任医师，精神科医师...",
          cost:600,
          labels:["持证","仅视频","亲子冲突"],
          score:'5',
        },
      ],
      recoAppoList: [
        {
          id:"0003",
          name: "李敏",
          avatar: "https://z1.ax1x.com/2023/11/21/piaDSqe.png",
          overview: "青少年潜能开发师",
          cost:300,
          labels:["持证","仅文本"],
          score:'4.9',
        },
        {
          id:"0004",
          name: "赵丽娟",
          avatar: "https://z1.ax1x.com/2023/11/21/piaD9VH.png",
          overview: "可能帮助你走出自责情绪",
          cost:200,
          labels:["持证","仅视频","内疚自责"],
          score:'4.5',
        },
      ],
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
    gotoAllAppo(){
        this.$router.push('/allappointment');
    },
    gotoTimeChoose(expertInfo){
      this.$router.push({
        name: 'TimeChoose',
        params: { expertInfo }
      });
    }
  },
  fillter: {},
}
</script>

<style scoped>
.custom-title {
  margin-right: 14px;
  vertical-align: middle;
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
.star{
  flex-shrink:0;
  position: absolute;
  margin-left: 15vw
}
</style>
