// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
  // 此为自定义配置参数，具体参数见上方说明
  let config = {
    showLoading: true, // 是否显示请求中的loading
    loadingText: '努力加载中~',
    loadingTime: 500,
    loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    originalData: true,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
    // ......
  }

  uni.$u.http.setConfig(con => {
    /* config 为默认全局配置*/
    // config.baseURL = `https://www.example.com`; /* 根域名 */
    // #ifndef H5
    // #endif
    con = config
    // con.baseURL = 'https://tsjb.wczfj.com'
		con.baseURL = 'https://zlb.zfj.wuch.gov.cn'
    // con.baseURL = 'http://192.168.1.102:8084'
    return con
  })

  // 请求拦截，配置Token等参数
  uni.$u.http.interceptors.request.use(config => { // 可使用async await 做异步操作
    // console.log(config)
    // return false
    // config.header = {
    //   ...config.header,
    //   a: 1 // 演示拦截器header加参
    // }
    // 演示custom 用处
    // if (config.custom.auth) {
    //   config.header.token = 'token'
    // }
    // if (config.custom.loading) {
    //  uni.showLoading()
    // }
    // 演示
    // if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
    // 	return Promise.reject(config)
    // }
    return config
  }, config => { // 可使用async await 做异步操作
    return Promise.reject(config)
  })

  // 响应拦截，判断状态码是否通过
  uni.$u.http.interceptors.response.use(res => {
    console.log(res);
    if (res.statusCode == 200) {
      // res为服务端返回值，可能有code，result等字段
      // 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
      // 如果配置了originalData为true，请留意这里的返回值
      if (!res.data.message) {
        uni.showModal({
          title: '提示',
          content: res.data.msg || '请求失败',
          showCancel: false
        })
        return false
      }
      return res.data
    } else if (res.statusCode == 401) {
      // vm.$u.toast('登录失效，请重新登录');
      // setTimeout(() => {
      // 	// 此为uView的方法，详见路由相关文档
      // 	vm.$u.route({type:'redirectTo', url: '/pages/login/login' })
      // }, 1500)
      return false
    } else {
      uni.showModal({
        title: '提示',
        content: res.msg || '数据请求失败',
        showCancel: false
      })
      // 如果返回false，则会调用Promise的reject回调，
      // 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
      return false
    }
  })
}

export default {
  install
}
