<template>
  <div />
</template>

<script>
let  sUserAgent = null
let  bIsDtDreamApp = null
let  bIsAlipayMini = null
let that = null
export default {
  name: 'Login',
  data() {
    return {
      ticket: ''
    }
  },
  onShow() {
    that = this
    that.ticket = this.$store.state.vuex_ticket
    sUserAgent = window.navigator.userAgent.toLowerCase()
    bIsDtDreamApp = sUserAgent.indexOf('dtdreamweb') > -1 // 浙里办APP
    bIsAlipayMini = sUserAgent.indexOf('miniprogram') > -1 && sUserAgent.indexOf('alipay') > -1
    console.log('--------------------------------------------------------------------------')
    console.log(that.getQuery('ticket'))
    if (that.getQuery('ticket') == null && that.ticket == '') {
      uni.showLoading({
        title: '登录中',
        mask: true
      })
      if (bIsDtDreamApp) {
        that.watchApp()
      } else if (bIsAlipayMini) {
        that.watchApply()
      }
    } else {
      that.ticket = that.getQuery('ticket')
      this.$u.vuex('vuex_ticket', that.ticket)
      uni.reLaunch({
        url: `./index?ticket=${that.ticket}`
      })
    }
  },
  methods: {

    // 浙里办APP判断页面进入状态
    watchApp() {
      window.onpageshow = event => {
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
          ZWJSBridge.close()
        }
        that.isLoad()
      }
    },
    // 支付宝浙里办小程序判断页面进入状态
    watchApply() {
      window.onpageshow = event => {
        if (event.persisted || (window.performance && (window.performance.navigation.type == 1 || window.performance.navigation.type == 0))) {
          that.isLoad()
        } else {
          uni.navigateBack()
        }
      }
    },
    // 用法 ==> that.getQuery('ticket')
    getQuery(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    isLoad: () => {
      if (bIsAlipayMini) {
        window.location.href = 'https://puser.zjzwfw.gov.cn/sso/alipay.do?action=oauth&servicecode=jhwczfjzhcsyzfxt'
      } else {
        window.location.href = 'https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=jhwczfjzhcsyzfxt'
      }
      // 或者使用replace()
      // window.location.replace('https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=jhwczfjzhcsyzfxt&goto=http://1.15.63.150:91')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
