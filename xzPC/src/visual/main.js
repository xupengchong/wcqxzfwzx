import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import '../assets/styles/element-variables.scss'
import scroll from 'vue-seamless-scroll' // 自动滚动
Vue.use(scroll)
import * as echarts from 'echarts'
import 'echarts-gl' // 3d图表库
Vue.prototype.$echarts = echarts
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from '../App'
import store from '../store'
import router from '../router'
import directive from '../directive' // directive
import plugins from '../plugins' // plugins
import '../utils/font.js'
import '../assets/icons' // icon
import '../permission' // permission control

import { parseTime} from "@/utils/ruoyi";
Vue.prototype.parseTime = parseTime


// 头部标签插件
import VueMeta from 'vue-meta'

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
// Vue.use(hljs.vuePlugin);




// Form Generator 组件需要使用到 tinymce
import Tinymce from '@/components/tinymce/index.vue'
Vue.component('tinymce', Tinymce)
import '@/icons'
import axios from 'axios'
Vue.prototype.$axios = axios
import '@/styles/index.scss'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
