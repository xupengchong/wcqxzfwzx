<template>
  <div ref="chart" class="chart" />
</template>

<script>
export default {
  name: '',
  props: {
    chartsData: {
      type: Object,
      default: () => { }
    }

  },
  data() {
    return {
      statusChart: null
    }
  },
  mounted() {
    this.initChart()

    // // 根据窗口变化自动调节图表大小
    // const that = this
    // window.onresize = function() {
    //   that.changeSize()
    // }
  },
  methods: {
    // 图表初始化
    initChart() {
      this.statusChart = this.$echarts.init(this.$refs.chart)
      // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
      const option = {
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: this.chartsData.title,
          textStyle: {
            color: this.chartsData.titleColor,
            fontSize: 12
          },
          right: this.chartsData.titleRight
        },
        grid: {
          top: '15vh',
          left: this.chartsData?.titleRight !== 'null' ? '14%' : '7%',
          bottom: '2%',
          right: this.chartsData?.titleRight === 'null' ? '14%' : '7%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: this.chartsData.titleColor
          },
          splitLine: {
            show: false
          },
          inverse: this.chartsData.inverse // 翻转
        },
        yAxis: {
          data: this.chartsData.dataAxis.map((v) => {
            return {
              value: v,
              textStyle: {
                color: '#fff',
                fontSize: '12',
                align: this.chartsData.textAlign,
                padding: this.chartsData.textPadding
              }
            }
          }),

          position: this.chartsData.position,
          axisLabel: {
            inside: true,
            color: this.chartsData.titleColor
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            backgroundStyle: {
              color: 'rgba(110, 193, 244, 0)'
            },
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.chartsData.startColor // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: this.chartsData.endColor // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            barWidth: 10,
            data: this.chartsData.data
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
.chart{
  width: 100%;
  height: 100%;
}
</style>
