<template>
  <div>
<!--不限-->
    <div class="block-text" >全部心理咨询预约</div>
    <div class = "center" @click="gotoExpertChoose()" >
      <div style="border: 1px solid #ebedf0; width: 90%;" >
        <div style="padding:3vw;" class="horizontal">
          <div class ="left-section marginl2" >
            不限分类
          </div>
          <div class ="right-section">
            <van-icon name="arrow" size="1rem" class="margint1"/>
          </div>
        </div>
      </div>
    </div>
<!--    按心理咨询分类预约-->
    <div class="block-text">按心理咨询分类预约</div>
    <van-tree-select :items="items" :main-active-index.sync="active" height="61vh">
      <template #content>
        <div>
          <van-list
              v-if="active === 0"
              :finished="finished"
              finished-text="没有更多了"
          >
            <van-cell v-for="item in list1" :key="item" :title="item" @click="gotoExpertChoose(item)">
              <van-icon name="arrow" class="grey marginl2" size="0.8rem"/>
            </van-cell>
          </van-list>
          <van-list
              v-if="active === 1"
              :finished="finished"
              finished-text="没有更多了"
          >
            <van-cell v-for="item in list2" :key="item" :title="item" @click="gotoExpertChoose(item)">
              <van-icon name="arrow" class="grey marginl2" size="0.8rem"/>
            </van-cell>
          </van-list>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import "../../assets/css/global.css"
export default {
  components: {},
  data() {
    return {
      active: 0,
      items: [
          { text: '擅长领域' },
          { text: '流派' },
      ],
      list1: ['不限','恐惧心理', '外表焦虑', '健康焦虑', '述情障碍', '同性恋恐惧症', '情绪性进食', '成功恐惧', '失败恐惧', '犯罪恐惧', '年龄焦虑', '信息焦虑', '错失恐惧', '压抑心理', '恐艾症', '怨恨心理', '焦虑情绪', '抑郁情绪', '情感淡漠', '内疚自责', '情绪调节困难', '面众恐惧', '死亡焦虑', '哀伤反应', '分离焦虑', '经前紧张症', '共情疲劳', '心因性闭经', '厌女症', '厌男症', '权威恐惧'],
      list2: ['不限','心理动力学','认知行为','人本主义'],
      finished: true,

    }
  },
  methods:{
    gotoExpertChoose(chooser){
      this.$router.push({
        name: 'ExpertChoose',
        params: { chooser }
      });
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

</style>
