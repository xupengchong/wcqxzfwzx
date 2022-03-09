import httpApi from '@/common/http.api.js'
import httpInterceptor from '@/common/http.interceptor.js'
import store from '@/store'
import Vue from 'vue'
import App from './App'
import uView from './uni_modules/uview-ui-v2'
let vuexStore = require('@/store/$u.mixin.js')
import directive from './directive/index.js'
Vue.use(directive)
Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView);
Vue.mixin(vuexStore)


const app = new Vue({
  store,
  ...App
})
// // http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
Vue.use(httpInterceptor, app)
// // // http接口API抽离，免于写url或者一些固定的参数
Vue.use(httpApi, app)
app.$mount()
