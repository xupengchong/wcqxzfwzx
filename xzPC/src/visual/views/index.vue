<template>
  <div class="main">
    <headerVue />
    <el-row class="main-content" :gutter="20">
      <el-col :span="6">
        <leftTopVue ref="lt" class="leftTop" />
        <LeftMiddle ref="lm" class="leftMiddle" />
        <leftBottonVue class="leftBotton" />
      </el-col>
      <el-col :span="12">
        <contentTopVue class="contenttop" />
        <contentbottonVue ref="cb" class="contentbotton" />
      </el-col>
      <el-col :span="6">
        <rightTopVue ref="rt" class="rightTop" />
        <RightMiddle class="rightMiddle" />
        <rightBottonVue class="rightBotton" />
      </el-col>
    </el-row>
  </div>

</template>

<script>
import RightMiddle from './chunks/rightMiddle.vue'
import LeftMiddle from './chunks/leftMiddle.vue'
import contentbottonVue from './chunks/contentbotton.vue'
import contentTopVue from './chunks/contentTop.vue'
import leftBottonVue from './chunks/leftBotton.vue'
import leftTopVue from './chunks/leftTop.vue'
import rightBottonVue from './chunks/rightBotton.vue'
import rightTopVue from './chunks/rightTop.vue'
import headerVue from './chunks/header.vue'
export default {
  name: 'Chart',
  components: {
    RightMiddle,
    LeftMiddle,
    contentbottonVue,
    contentTopVue,
    leftBottonVue,
    leftTopVue,
    rightBottonVue,
    rightTopVue,
    headerVue
  },
  data() {
    return {
    }
  },

  mounted() {
    // 根据窗口变化自动调节图表大小
    const that = this
    window.onresize = function() {
      that.$refs.rt.changeSize()
      that.$refs.lt.changeSize()
      that.$refs.lm.changeSize()
      that.$refs.cb.changeSize()
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.main{
  background-color: #020b1e;
  position: relative;
  width: 100%;
  height: 100%;

  &-content{
    // padding: 0 10px;
    margin: 0 !important;
    padding: 0 !important;
    .leftTop, .leftMiddle, .rightMiddle, .leftBotton, .rightTop, .rightBotton,.contentbotton{
      margin-bottom: 10px;
      height:calc( ( ( 100vh - 10vh ) / 3 ) - 15px);
    }
    .contenttop{
      height:calc( ( ( 100vh - 10vh ) / 3 )*2 - 10px);
    }
  }

}
</style>
