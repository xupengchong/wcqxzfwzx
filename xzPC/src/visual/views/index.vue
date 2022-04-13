<template>
  <div class="main">
    <headerVue />
    <el-row class="main-content" :gutter="20">
      <el-col :span="6">
        <leftTopVue class="leftTop" />
        <LeftMiddle class="leftMiddle" />
        <leftBottonVue class="leftBotton" />
      </el-col>
      <el-col :span="12">
        <contentTopVue />
        <contentbottonVue />
      </el-col>
      <el-col :span="6">
        <rightTopVue class="rightTop" />
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
    .leftTop, .leftMiddle, .rightMiddle, .leftBotton, .rightTop, .rightBotton{
      margin-bottom: 10px;
      height:calc( ( ( 100vh - 100px ) / 3 ) - 15px);
    }
  }

}
</style>
