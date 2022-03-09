
<script>
let  sUserAgent = null
let  bIsDtDreamApp = null
let  bIsAlipayMini = null
let that = null
export default {
	onPageNotFound: [
	    	function (res) {
	    		// 跳转到 404 页面：
	      		uni.redirectTo({
	        		url: "pages/404", // 404 页面的路径
	      		});
	    	},
	  ],

  onLaunch: function() {
    console.log('App Launch')
    that = this
    ZWJSBridge.onReady(() => {
      console.log('初始化完成后，执⾏bridge⽅法')
    })
    // 获取 用户信息
    this.getInfo()
    this.setTitle()
    // 单点登录
    // this.OPLogin()
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },

  onInit: () => {

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
      uni.reLaunch({
        url: `./index?ticket=${that.ticket}`
      })
    }
  },
  methods: {
    // OPLogin() {
    //   let that = this
    //   const sUserAgent = window.navigator.userAgent.toLowerCase()
    //   // 浙里办APP
    //   const bIsDtDreamApp = sUserAgent.indexOf('dtdreamweb') > -1
    //   // 浙里办支付宝小程序
    //   const bIsAlipayMini = sUserAgent.indexOf('miniprogram') > -1 && sUserAgent.indexOf('alipay') > -1
    //   if (that.getQuery('ticket') == null && that.ticket == '') {
    //     uni.showLoading({
    //       title: '登录中',
    //       mask: true
    //     })
    //     if (bIsDtDreamApp) {
    //       that.watchApp()
    //     } else if (bIsAlipayMini) {
    //       that.watchApply()
    //     }
    //   } else {
    //     that.ticket = that.getQuery('ticket')
    //     uni.reLaunch({
    //       url: `./index?ticket=${that.ticket}`
    //     })
    //   }

    // },
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
        window.location.href = 'https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=jhwczfjzhcsyzfxt&goto=【附带跳转地址，以sp参数返回】'
      } else {
        window.location.href = 'https://puser.zjzwfw.gov.cn/sso/mobile.do?action=oauth&scope=1&servicecode=jhwczfjzhcsyzfxt&goto=【附带跳转地址，以sp参数返回】'
      }
      // 或者使用replace()
      // window.location.replace('https://puser.zjzwfw.gov.cn/sso/alipay.do?action=ssoLogin&servicecode=【接入代码】&goto=【附带跳转地址，以sp参数返回】');
    },
    getInfo() {
      /**
       * @userType 登录人类别
       * 0：公务员
       * 1：除公务员以外的个人
       * 2：法人
       */
      ZWJSBridge.getUserType().then(result => {
        // console.log(result.userType)
        this.$u.vuex('vuex_userType', result.userType)
      }).catch(error => {
        // console.log(error)
      })
      /**
       * 适老化
       * @vuex_isLow 是否是 长辈版
       * */
      ZWJSBridge.getUiStyle({}).then(result => {
        this.$u.vuex('vuex_isLow', result.uiStyle != 'normal')
      }).catch(() => { this.$u.vuex('vuex_isLow', false) })
    },
    setTitle() {
      ZWJSBridge.setTitle({
        title: '婺服查'})
        .then(result => {
          // console.log(result)
        }).catch(error => {
          // console.log(error)
        })
    }
  }
}
</script>

<style>
	@import '@/static/css/animate.min.css';
	/*每个页面公共css */
	page{
		background-color: #f6f7f8;
    padding: 16px 0;
	}
	.amap-logo,.amap-copyright{
		display: none !important;
	}
	.v--waves{
	    position:relative;
	    cursor:pointer;
	    /* display:inline-block;
	    text-align: center; */
	    overflow:hidden;
	    -webkit-tap-highlight-color:transparent;
	    z-index:1;
	}
	.v--waves .v--waves-animation{
	    position:absolute;
	    border-radius:50%;
	    width:25px;
	    height:25px;
	    opacity:0;
	    background:rgba(255,255,255,0.3);
	    transition:all 0.7s ease-out;
	    transition-property:transform, opacity, -webkit-transform;
	    -webkit-transform:scale(0);
	    transform:scale(0);
	    pointer-events:none
	}
	.v--ts-btn{
	    width: 200px;
	    height: 56px;
	    line-height: 56px;
	    background: #f57035;
	    color: #fff;
	    border-radius: 5px;
	}
</style>
