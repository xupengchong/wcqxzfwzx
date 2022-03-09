const api = '/zlb'
const apiList = [
  { url: '/wechatReport/insertReport', method: 'post', fnName: 'insertReport' },				// 提交 随手拍
  { url: '/wechatReport/myReport', method: 'get', fnName: 'myReport' },				// 随手拍列表openId
  { url: '/wechatReport/insertSatisfaction', method: 'post', fnName: 'insertSatisfaction' },		// 评价
  { url: '/wechatReport/uploadReport', method: 'post', fnName: 'uploadReport' }	,	// 上传
  { url: '/user/getUser', method: 'get', fnName: 'getUser' }	,	// 获取用户
  { url: '/user/help', method: 'get', fnName: 'getHelp' }		// 获取帮助
	
]

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作
const install = (Vue, vm) => {
  let apiObj = {}
  apiList.forEach(item => {
    // let extraParams = item.extra ? item.extra : {};
    apiObj[item.fnName] = (params = {}, urlData = {}, config = {}) => {
      if (item.method == 'get') {
        return uni.$u.http.get(api + item.url, {params: urlData})
      } else if (item.method == 'post') {
        return uni.$u.http.post(api + item.url, params)
      } else {
        return uni.$u.http.post(api + item.url, params, config)
      }
    }
  })
  // apiObj.login = (params = {}) => uni.$u.http.post(`${api}login?username=${params.username}&password=${params.password}&appLogin=${params.appLogin}`, {})
  apiObj.getCarMap = (params = {}) => uni.$u.http.get(`http://www.wczfj.com/information/queryVehicleParkingInfo`)

  // 整合接口
  vm.$u.api = apiObj
}

export default {
  install
}
