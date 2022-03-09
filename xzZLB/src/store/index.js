import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const ip = 'http://192.168.1.103:8081';
// const ip = 'http://36.134.59.148:9080';
let wufuchaDatas = {}

try {
  // 尝试获取本地是否存在lifeDatas变量，第一次启动APP时是不存在的
  wufuchaDatas = uni.getStorageSync('wufuchaDatas')
} catch (e) {
  console.log(e)
}
console.log(11)

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_isLow', 'vuex_userType', 'vuex_ticket','vuex_token','vuex_userid','vuex_username']

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
  // 判断变量名是否在需要存储的数组中
  if (saveStateKeys.indexOf(key) != -1) {
    // 获取本地存储的lifeDatas对象，将变量添加到对象中
    // let tmp = uni.getStorageSync('wufuchaDatas')
    let tmp = ZWJSBridge.getLocalStorage({
      key: 'wufuchaDatas'
    })
    // 第一次打开APP，不存在lifeDatas变量，故放一个{}空对象
    tmp = tmp || {}
    tmp[key] = value
    // 执行这一步后，所有需要存储的变量，都挂载在本地的lifeDatas对象中
    // uni.setStorageSync('wufuchaDatas', tmp)
    ZWJSBridge.setLocalStorage({
      key: 'wufuchaDatas',
      value: tmp
    }).then(e => {
      // console.log(e)
    })
  }
}

const store = new Vuex.Store({
  state: {
    // 如果上面从本地获取的lifeDatas对象下有对应的属性，就赋值给state中对应的变量
    // 加上vuex_前缀，是防止变量名冲突，也让人一目了然
    vuex_userType: wufuchaDatas.vuex_userType ? wufuchaDatas.vuex_userType : '',
    vuex_isLow: wufuchaDatas.vuex_isLow ? wufuchaDatas.vuex_isLow : false,
    vuex_ticket: wufuchaDatas.vuex_ticket ? wufuchaDatas.vuex_ticket : '',
    vuex_token: wufuchaDatas.vuex_token ? wufuchaDatas.vuex_token : '',
    vuex_userid: wufuchaDatas.vuex_userid ? wufuchaDatas.vuex_userid : '',
    vuex_username: wufuchaDatas.vuex_username ? wufuchaDatas.vuex_username : ''

  },
  mutations: {
    $uStore(state, payload) {
      // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
      let nameArr = payload.name.split('.')
      let saveKey = ''
      let len = nameArr.length
      if (len >= 2) {
        let obj = state[nameArr[0]]
        for (let i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]]
        }
        obj[nameArr[len - 1]] = payload.value
        saveKey = nameArr[0]
      } else {
        // 单层级变量，在state就是一个普通变量的情况
        state[payload.name] = payload.value
        saveKey = payload.name
      }
      console.log(saveKey)
      // 保存变量到本地，见顶部函数定义
      saveLifeData(saveKey, state[saveKey])
    }
  }
})

export default store
