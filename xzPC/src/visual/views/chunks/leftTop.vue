<template>
  <div class="LT">
    <Chunks title="跨部门协同">
      <div class="middle">
        <div class="left">
          <BarCharts ref="cd1" :charts-data="rightData1" />
        </div>
        <div class="LTcontent" />
        <div class="right">
          <BarCharts ref="cd2" :charts-data="rightData2" />
        </div>
      </div>
    </Chunks>
  </div>
</template>

<script>

import BarCharts from '../charts/barCharts'
import Chunks from '../components/chunks'
export default {
  name: 'LeftTop',
  components: { BarCharts, Chunks },
  data() {
    return {
      rightData1: {
        title: '申请数',
        titleColor: '#f55002',
        dataAxis: ['自然规则', '市场监管', '民政局', '卫健委', '公安分局', '区人社局'],
        data: [220, 182, 191, 234, 290, 330],
        startColor: '#f55002',
        endColor: 'rgba(5,17,45,0)',
        inverse: true,
        position: 'right',
        textPadding: [0, -30, 0, 0],
        textAlign: 'right',
        titleRight: 'null'
      },
      rightData2: {
        title: '完成数',
        titleColor: '#00f4fd',
        dataAxis: ['自然规则', '市场监管', '民政局', '卫健委', '公安分局', '区人社局'],
        data: [220, 182, 191, 234, 290, 330],
        startColor: 'rgba(5,17,45,0)',
        endColor: '#00f4fd',
        inverse: false,
        position: 'left',
        textPadding: [0, 0, 0, -30],
        textAlign: 'left',
        titleRight: '0'
      }
    }
  },
  methods: {
    changeSize() {
      this.$refs.cd1.changeSize()
      this.$refs.cd2.changeSize()
    }
  }
}
</script>

<style lang='scss' scoped>
.LT{
  width: 100%;
  height: 100%;
  .middle{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .LTcontent{
    background-image: url('../../../assets/images/visualimg/leftTop.png');
    background-size: 100% 100%;
    width: 1rem;
    height: 16vh ;
    margin: 5vh 0;
  }
  .left,.right{
    width: calc((100% - 1rem) / 2);
  }
  }

}
</style>
