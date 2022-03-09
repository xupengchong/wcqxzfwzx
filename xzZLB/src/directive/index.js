import waterWave from './waterWave/waterWave.js'


const install = function(Vue) {
  Vue.directive('waterWave', waterWave)
}

if (window.Vue) {
  window['waterWave'] = waterWave
  Vue.use(install); // eslint-disable-line
}

export default install
