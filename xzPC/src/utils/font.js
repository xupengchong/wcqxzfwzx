;(function (doc, win) {
  document.body.onresize = (function () {
    //得到手机屏幕的宽度
    // var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    // console.log(htmlWidth)
    var recalc = function () {
      //得到html的Dom元素
      var htmlDom = document.getElementsByTagName('html')
      //设置根元素字体大小
      var htmlWidth = window.screen.width
      htmlDom[0].style.fontSize = (htmlWidth / 1920) * 20 + 'px'
    }
    recalc()
    win.addEventListener('resize', recalc, false)
  })()
})(document, window)
