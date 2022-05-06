<template>
  <div class="LB">
    <Chunks title="评价满意度">
      <div class="middle">
        <div class="left">
          <div ref="chart" class="chart" />
          <div class="content">
            <div class="num">99%</div>
            <div>平均满意度</div>
          </div>
        </div>
        <div class="right">
          <div v-for="(v,i) in tips" :key="i" class="item">
            <div class="top">
              <div :style="{backgroundColor:v.color}" class="pic" />
              <div>{{ v.name }}</div>
            </div>
            <div class="bottom">50%</div>
          </div>
        </div>
      </div>
    </Chunks>
  </div>
</template>

<script>

import Chunks from '../components/chunks'
export default {
  name: 'LeftMiddle',
  components: { Chunks },
  data() {
    return {
      statusChart: null,
      tips: [
        { color: '#ffce57', name: '一月份' },
        { color: '#3db7ce', name: '二月份' },
        { color: '#ff8f8f', name: '三月份' },
        { color: '#00a8ff', name: '四月份' },
        { color: '#35b9fd', name: '五月份' },
        { color: '#38e1a6', name: '六月份' }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    // 图表初始化
    initChart() {
      const echarts = this.$echarts
      this.statusChart = this.$echarts.init(this.$refs.chart)
      // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: `{c} {b}`
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '70%'],
            color: [
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#030c21 ' },
                { offset: 1, color: '#ffce57 ' }
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#030c21 ' },
                { offset: 1, color: '#3db7ce ' }
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#030c21 ' },
                { offset: 0, color: '#ff8f8f ' }
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#030c21 ' },
                { offset: 0, color: '#00a8ff ' }
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#030c21 ' },
                { offset: 0, color: '#35b9fd ' }
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#030c21 ' },
                { offset: 0, color: '#38e1a6 ' }
              ])
            ],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '10',
                fontWeight: 'bold',
                formatter: `{c}
                {b}`
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '一月份' },
              { value: 735, name: '二月份' },
              { value: 580, name: '三月份' },
              { value: 484, name: '四月份' },
              { value: 300, name: '五月份' },
              { value: 300, name: '六月份' }
            ]
          }
        ]
      }
      this.statusChart.setOption(option)
    },
    // 自适应宽高
    changeSize() {
      console.log('this.statusChart')
      this.statusChart.resize()
    }
  }
}
</script>

<style lang='scss' scoped>
.LB{
  width: 100%;
  height: 100%;
  .middle{
    height: 100%;
    display: flex;
    .left{
      width: 15rem;
      height: 100%;
      background: url('../../../assets/images/visualimg/lcric.png') no-repeat;
      background-size: 13vh 13vh;
      background-position: center;
      position:relative;
      .content{
        position: absolute;
        left: 5.5rem;
        top: 10vh;
        font-size: 0.7rem;
        color: #fff;
        text-align: center;
        .num{
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
    .right{
      width: 8rem;
      margin-left: 1rem;
      display: flex;
      height: 100%;
      align-items: center;
      flex-wrap: wrap;
      padding: 2.5rem 0;
      .item{
        color: #fff;
        font-size: .6rem;
        width: 50%;
        .top{
          display: flex;
        }
        .bottom{
          padding-right: 1rem;
          text-align: center;
        }
        .pic{
          width: .6rem;
          height: .6rem;
          margin-right: .4rem;
        }
      }
    }
  }
  .chart{
    width: 100%;
    height: 100%;
  }
}
</style>
