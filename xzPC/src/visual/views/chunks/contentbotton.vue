<template>
  <div class="chunk">
    <div class="title">当月统计图</div>
    <div class="slot-v">
      <div ref="chart" class="chart" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'Chunks',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
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
        color: [

          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(153, 153, 255)'
            },
            {
              offset: 1,
              color: 'rgba(153, 153, 255,.3)'
            }
          ]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(31, 252, 248)'
            },
            {
              offset: 1,
              color: 'rgba(31, 252, 248,0)'
            }
          ])
        ],
        // backgroundColor: '#020b1e',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            axisLabel: {
              show: true,
              textStyle: {
                color: '#46ede8'
              }
            },
            type: 'category',
            boundaryGap: false,
            data: ['1:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00'],
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#46ede8'
              }
            }
          }
        ],
        series: [
          {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 2,
              color: 'rgb(153, 153, 255)'
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 2,
              color: 'rgb(31, 252, 248)'
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
          }
        ]
      }
      this.statusChart.setOption(option)
    },
    // 自适应宽高
    changeSize() {
      this.statusChart.resize()
    }
  }
}
</script>

<style lang='scss' scoped>
.chunk{
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: url('../../../assets/images/visualimg/chunk.png') ;
  background-size: 100% 100%;
  .title{
    color: #fff;
    font-size: 1rem;
    width: 15rem;
    text-align: center;
    margin-left: 14rem;
    line-height: 4vh;
    text-shadow: 0 0 7px #00f7ff;
  }
  .slot-v{
    height: calc( 100% - 4vh ) ;
    .chart{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
