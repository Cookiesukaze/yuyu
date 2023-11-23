<template>
  <div>

<!--时间窗口-->
    <div style="background: #f3f3f3">
      <div class="date-picker">
        <van-button class="date-item date-item-back" :class="{ active: selectedDate === 'all' }" @click="selectDate('all')">全部日期</van-button>
        <van-button class="date-item date-item-back" :class="{ active: selectedDate === piece.date }" v-for="piece in dates" :key="piece" @click="selectDate(piece.date)">
          <div>
            {{ piece.week }}
          </div>
          <div>
            {{ piece.date }}
          </div>
        </van-button>
      </div>
    </div>
    <!--不限-->
    <div class="block-text" >{{this.typeLabel}}——心理咨询师选择</div>
    <div v-for="(piece, index) in appoList" :key="index">
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
  </div>
</template>

<script>
import "../../assets/css/global.css"
export default {
  props: {
    chooser: {
      type: Object,
      required: false
    }
  },
  components: {},
  data() {
    return {
      typeLabel:'',
      selectedDate: 'all', // 默认选择全部日期
      dates: [
        {date:'11-21',week:'明天'},
        {date:'11-22',week:'周三'},
        {date:'11-23',week:'周四'},
        {date:'11-24',week:'周五'},
        {date:'11-25',week:'周六'},
        {date:'11-26',week:'周日'},
        {date:'11-27',week:'周一'},
      ],
      appoList: [
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
        {
          id:"0003",
          name: "李敏",
          avatar: "https://z1.ax1x.com/2023/11/21/piaDSqe.png",
          overview: "二级心理咨询师",
          cost:300,
          labels:["持证","仅文本"],
          score:'4.9',
        },
        {
          id:"0004",
          name: "赵丽娟",
          avatar: "https://z1.ax1x.com/2023/11/21/piaD9VH.png",
          overview: "二级心理咨询师",
          cost:200,
          labels:["持证","仅视频","内疚自责"],
          score:'4.5',
        },
      ],
    };
    },
  methods:{
    selectDate(date) {
      this.selectedDate = date;
      // 处理日期选择逻辑
    },
    gotoTimeChoose(expertInfo){
      this.$router.push({
        name: 'TimeChoose',
        params: { expertInfo }
      });
    }
  },
  mounted() {
    console.log(this.chooser)
    if(!this.chooser)this.typeLabel ='不限分类';
    else this.typeLabel = this.chooser;
  }
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
