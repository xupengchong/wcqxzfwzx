<template>
  <div class="header">
    <span class="title">婺城区涉诉(案)调取一件事</span>
    <div class="right">
      <span>{{ date }}</span>
      <span>{{ dataTime }}</span>
      <span>{{ week }}</span>

    </div>
    <div class="left">
      <!-- <span>{{ weather }}</span>
        <span>{{ temperature }}</span>
        <span style="cursor: pointer;" @click="logout">[退出登录]</span> -->
      <div id="he-plugin-simple" />
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
  created() {
    window.WIDGET = {
      'CONFIG': {
        'modules': '20',
        'background': '5',
        'tmpColor': 'FFFFFF',
        'tmpSize': '16',
        'cityColor': 'FFFFFF',
        'citySize': '16',
        'aqiColor': 'FFFFFF',
        'aqiSize': '16',
        'weatherIconSize': '24',
        'alertIconSize': '18',
        'padding': '10px 10px 10px 10px',
        'shadow': '0',
        'language': 'auto',
        'fixed': 'false',
        'vertical': 'top',
        'horizontal': 'left',
        'key': 'c66ecd79851b486fb8bda0b58d0d67f0'
      }
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
    document.getElementsByTagName('head')[0].appendChild(script)
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
            } else if (/-/.test(nightWeather) || /-/.test(dayWeather)) {
              this.weather = /-/.test(nightWeather) ? nightWeather : dayWeather
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
      this.$modal
        .confirm('确定注销并退出系统吗？', '提示')
        .then(() => {
          this.$store.dispatch('LogOut').then(() => {
            location.href = '/login'
          })
        })
        .catch(() => {})
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
  background-image: url('../../../assets/images/visualimg/titleTop2.png') ;
  background-size: 100% 100%;
  .title{
    color: #fff;
    font-size: 2rem;
    line-height: 8vh;
  }
   .left,
  .right {
    position: absolute;
    top: 1.6rem;
    color: #fff;
    text-shadow: 0 0 6px #00f7ff;
    span{
      font-size: 0.9rem;
    }
  }
  .right {
    right:1.5rem;

    span {
      margin-right: 2rem;
    }
  }
  .left {
    left:4rem;

    span {
      margin-left: 2rem;
    }
  }
}
::v-deep .s-sticker~div>div{
  z-index: 10;
}
::v-deep .s-sticker{
  padding: 0 !important;
}
</style>
