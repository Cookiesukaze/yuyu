<template>
  <div>
<!--    医生卡片-->
    <div class="center" style="margin-top: 5vw">
      <van-cell class="card" style="width: 90%;">
        <template #title>
          <div class="horizontal">
            <div class="avatar" style="flex-shrink:0">
              <img :src="info.avatar" alt="Avatar" />
            </div>
            <div class="vertical">
              <div class="horizontal">
                <span class="custom-title" style="flex-shrink:0">{{ info.name }}</span>
                <div class="star">
                  <van-rate  allow-half v-model="info.score" size="0.7rem" style="margin-top:1.5vw;"/>
                </div>
              </div>
              <div style="width: 200%;font-size: 0.75rem" class="grey">{{info.overview}}</div>
            </div>
          </div>
        </template>
        <template #label >
          <div class="horizontal">
            <div v-for="(label, index_l) in info.labels" :key="index_l" style="margin-left: 2vw;">
              <van-tag plain type="primary">{{ label }}</van-tag>
            </div>
          </div>
        </template>
      </van-cell>
    </div>
<!--    资格证书-->
<!--    <div class="center" style="margin-top: 5vw">-->
<!--      <div class="card" style="width: 90%;">-->
<!--        <div class="vertical">-->
<!--          <div>副主任医师</div>-->
<!--          <div>精神科医师</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!--时间窗口-->
    <div style="background: #f3f3f3;margin-top: 5vw;" >
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
<!--    具体时间选择-->
    <div class="center" style="margin-top: 8vw">
      <div class="card" style="width: 85vw;">
        <div>
          <van-cell v-for="item in appoTimeList" :key="item" style="width: 85vw;" @click="gotoAccAppo(item,expertInfo)">
            <template #title>
              <div style="width: 200%" >
                    <span class="custom-title horizontal">
                      <div>{{item.time}} ({{item.week}})</div>
                      <div style="margin-left: 3vw">{{item.detail}}</div>
                    </span>
              </div>
            </template>
            {{item.status}}
            <van-icon name="arrow" class="grey marginl2" size="0.8rem"/>
          </van-cell>
        </div>
      </div>
    </div>
<!--    用户评价-->
<!--    TODO:医生用户评价-->
    <!--    推荐框-->
    <div class="block-text">用户评价： {{expertInfo.score}}分</div>
    <div class="marginl2">
      <div class="comment-picker">
        <van-button  size="small" class="comment-item comment-item-back" :class="{ active: selectedButton === 'all' }" @click="selectButton('all')">全部评论</van-button>
        <van-button  size="small" class="comment-item comment-item-back" :class="{ active: selectedButton === piece.obj }" v-for="piece in commentButtonList" :key="piece" @click="selectButton(piece.obj)">
          {{piece.obj}} {{piece.value}}
        </van-button>
      </div>
    </div>

  </div>
</template>

<script>
import "../../assets/css/global.css"
export default {
  props: {
    expertInfo: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {
      selectedDate: 'all', // 默认选择全部日期
      selectedButton:'all',
      info:undefined,
      dates: [
        {date:'11-21',week:'明天'},
        {date:'11-22',week:'周三'},
        {date:'11-23',week:'周四'},
        {date:'11-24',week:'周五'},
        {date:'11-25',week:'周六'},
        {date:'11-26',week:'周日'},
        {date:'11-27',week:'周一'},
      ],
      appoTimeList:[
        {time:'11-21',week:'周二',detail:'08:50-09:40',status:"可预约"},
        {time:'11-21',week:'周二',detail:'09:50-10:40',status:"可预约"},
        {time:'11-21',week:'周二',detail:'10:30-11:20',status:"可预约"},
        {time:'11-21',week:'周二',detail:'13:30-14:20',status:"可预约"},
        {time:'11-21',week:'周二',detail:'14:30-15:20',status:"可预约"},
        {time:'11-21',week:'周二',detail:'15:30-16:20',status:"可预约"},
      ],
      commentButtonList:[
        {obj:'好评',value:'120'},
        {obj:'差评',value:'6'},
        {obj:'中评',value:'10'},
      ]
    };
  },
  methods:{
    selectDate(date) {
      this.selectedDate = date;
      // 处理日期选择逻辑
    },
    selectButton(value) {
      this.selectedButton = value;
    },
    gotoAccAppo(timeInfo,expertInfo){
      this.$router.push({
        name: 'AccAppointment',
        params: { timeInfo,expertInfo }
      });
    }
  },
  mounted() {
    this.info = this.expertInfo;
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
.card {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative; /* Added position relative */
}
</style>
