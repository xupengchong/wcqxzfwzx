<template>
  <div class="header">
    <span class="title">婺城区一网通办·涉诉信息一件事</span>
    <div class="left">
      <span>{{ date }}</span>
      <span>{{ dataTime }}</span>
      <span>{{ week }}</span>
      <span style="cursor: pointer;" @click="logout">[退出登录]</span>

    </div>
    <div class="right">
      <span>{{ weather }}</span>
      <span>{{ temperature }}</span>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: '',
  data() {
    return {
      map: null,
      weather: '',
      temperature: '',
      timer: '',
      date: '',
      week: '',
      dataTime: ''
    }
  },
  mounted() {
    this.getDateTime()
    this.timer = setInterval(() => this.getDateTime(), 1000)
    this.initMap()
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: '01652e5d3a817cb2278245a1f2430631', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Weather'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        const amapWeather = new AMap.Weather()
        amapWeather.getForecast('金华市', (err, data) => {
          if (err) {
            console.log('err', err)
            this.weather = '天气查询失败'
          } else {
            console.log(data.forecasts[0])
            const { nightWeather, dayWeather, dayTemp, nightTemp } = data.forecasts[0]
            if (nightWeather === dayWeather) {
              this.weather = nightWeather
            } else {
              this.weather = nightWeather + '~' + dayWeather
            }
            if (nightTemp === dayTemp) {
              this.temperature = nightTemp
            } else {
              this.temperature = nightTemp + '~' + dayTemp + '℃'
            }
            // this.temperature = `${data.temperature}℃`
          }
        })
      }).catch(e => {
        console.log(e)
      })
    },
    getDateTime() {
      const nDate = new Date()
      this.date = this.parseTime(nDate, '{y}年{m}月{d}日')
      this.dataTime = this.parseTime(nDate, '{h}:{i}:{s}')
      this.week = this.parseTime(nDate, '星期{a}')
      if (this.dataTime === '00:00:00') {
        this.initMap()
      }
    },
    logout() {

    }
  }
}
</script>

<style lang='scss' scoped>
.header{
  position: relative;
  width: 100%;
  height: 10vh;
  text-align: center;
  background-image: url('../../../assets/images/visualimg/titleTop.png') ;
  background-size: 100% 100%;
  .title{
    color: #fff;
    font-size: 1.5rem;
    line-height: 110px;
  }
   .left,
  .right {
    position: absolute;
    top: 1.3rem;
    color: #fff;
    text-shadow: 0 0 6px #00f7ff;
    span{
      font-size: 0.8rem;
    }
  }
  .right {
    left:1.5rem;
    span {
      margin-right: 2rem;
    }
  }
  .left {
    right:1.5rem;
    span {
      margin-left: 2rem;
    }
  }
}
</style>
