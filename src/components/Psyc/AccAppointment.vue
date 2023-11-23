<template>
  <div>
    <div>
      <van-cell class="margint5">
        <template #title>
          <div class="horizontal">
            <div class="avatar" style="flex-shrink:0">
              <img :src="eInfo.avatar" alt="Avatar" />
            </div>
            <div class="vertical">
              <div class="horizontal">
                <span class="custom-title" style="flex-shrink:0">{{ eInfo.name }}</span>
              </div>
              <div style="width: 200%;font-size: 0.75rem" class="grey">{{eInfo.overview}}</div>
            </div>
          </div>
        </template>
      </van-cell>
    </div>

    <div class="margint5">
      <van-cell v-for="item in accList" :key="item" >
        <template #title>
          <div style="width: 200%" >
                    <span class="custom-title horizontal">
                      {{item.obj}}
                    </span>
          </div>
        </template>
        {{item.value}}
        <van-icon name="arrow" class="grey marginl2" size="0.8rem" v-show="item.isSelected"/>
      </van-cell>
    </div>
    <van-tabbar>
      <van-button type="info" block @click="openDialog(newChat)">确定</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import "../../assets/css/global.css"
import {Dialog} from "vant";
export default {
  props: {
    timeInfo:{
      type: Object,
      required: true
    },
    expertInfo: {
      type: Object,
      required: true
    },

  },
  components: {},
  data() {
    return {
      tInfo:undefined,
      eInfo:undefined,
      accList:[
        {obj:"咨询方式",value:"仅文本",isSelected:1},
        {obj:"咨询日期",value:"2023-11-21 星期二",isSelected:1},
        {obj:"预约时间段",value:"上午 08:50-09:40",isSelected:1},
        {obj:"咨询费用",value:"320 元/时",isSelected:0},
        {obj:"优惠券",value:"",isSelected:1},
        {obj:"咨询人",value:"小明",isSelected:0},
        {obj:"是否发送基础信息",value:"是",isSelected:1},
      ],
      newChat:{
        name: "李敏",
        avatar: "https://z1.ax1x.com/2023/11/21/piaDSqe.png",
        message:"青少年潜能开发师",
        time: "未到预约时间"
      },
    };
  },
  methods:{
    openDialog(newChat){
      Dialog.confirm({
        title: '订单提交成功',
        message: '点击确认回到主页',
        confirmButtonText:'确认',
        cancelButtonText:'前往支付',
        cancelButtonColor:'#3eb472'
      })
          .then(() => {
            // on confirm
            this.$router.push({
              name: 'Chat',
              params: { newChat }
            });
          })
          .catch(() => {
            // on cancel
          });
    }

  },
  mounted() {
    this.tInfo = this.timeInfo;
    this.eInfo = this.expertInfo;
  }
}
</script>

<style scoped>

</style>
