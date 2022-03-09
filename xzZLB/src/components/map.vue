<template>
  <view id="container" :style="{height:H}" />
</template>

<script>
function initMap() {
  return new Promise(resolve => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var url = 'https://webapi.amap.com/maps?v=1.4.15&key=ef5bc09d32b85ba885c1a5335fe7955b&callback=onLoad'
      var jsapi = document.createElement('script')
      jsapi.src = url
      document.head.appendChild(jsapi)
    }
    window.onLoad = () => {
      resolve(window.AMap)
    }
  })
}
import unfree from '../static/icon/unfree.png'
import free from '../static/icon/free.png'
export default {
  name: 'Map',
  // 地图初始化
  props: {
    isClickMarker: {
      type: Boolean,
      default: false
    },
		// 地图高度
		H:{
			type: String,
			default: "400rpx"
		},
		// marker数组
		markerData:{
			type: Array,
			default: []
		},
		// clear 是否删除上一个marker
		isClear:{
      type: Boolean,
      default: true
    },
  },
	watch:{
		'markerData':{
			immediate:true,
			async handler(n){
				if (!this.Amaps) await this.inint()
				n.forEach(v=>{
					this.setMarker(v.lng,v.lat,v.name,v.freeCount)
				})
			},
			deep:true
		}
	},
  data() {
    return {
      Amaps: null,
      map: null,
      latitude: '29.08',
      longitude: '119.65'
    }
  },
   async mounted() {
		if (!this.Amaps) await this.inint()
  },
  methods: {
		// 初始化地图
		async inint(){
			let that = this
			// 页面调用
			let AMap = await initMap()
			return new Promise((r,j)=>{
					  that.Amaps = AMap
					  that.map = new AMap.Map('container', {
					    // viewMode: '3D',
					    zoom: 15,
					    // resizeEnable: true,
					    center: [that.longitude, that.latitude]
					  })
						// 获取当前定位
					  this.getLatLog()
						// 是否 开启点击选择地点
					  if (this.isClickMarker) that.map.on('click', that.clack)
						r(1)
			})
		},
		// 点击选位置
    clack(e) {
      let longitude = e.lnglat.getLng()
      let latitude = e.lnglat.getLat()
      this.setMarker(longitude, latitude)
    },
		// 设置marker 点位
    setMarker(longitude, latitude , name="",freeC = null) {
      if (this.isClear) this.map.clearMap()
      let marker = new this.Amaps.Marker({
        position: [longitude, latitude],
				icon: new AMap.Icon({            
						image: freeC == null ? null :  freeC == 0 ? unfree : free,
						// size: new AMap.Size(52, 52),  //图标大小
						imageSize: new AMap.Size(30,30)
				})     
      })
			marker.setLabel({
				// anchor: 'bottom-center',
				offset: new AMap.Pixel(-8, -6), //设置文本标注偏移量
			  content: `<div>${name}</div>
									<p>剩余车位 <strong> ${freeC} </strong></p>`, //设置文本标注内容
			  direction: 'right', //设置文本标注方位
			})
      this.getAddress(longitude, latitude)
      this.map.add(marker)
			// this.carOpenInfo([longitude, latitude],name)
    },
		//提示窗口
		carOpenInfo(NS, data) {
			let infoWindow = new AMap.InfoWindow({
				anchor: 'bottom-center',
				offset: new AMap.Pixel(0, 0),
				content: `<p> ${data}</p>`
			})
			console.log(NS);
			infoWindow.open(this.map, NS)

		},
		// 通过坐标 获取中文地址
		getAddress(longitude, latitude){
			let lnglatXY = [longitude, latitude]
			this.Amaps.service('AMap.Geocoder', () => { // 回调函数
			  let geocoder = new this.Amaps.Geocoder({})
			  geocoder.getAddress(lnglatXY, (status, result) => {
			    if (status === 'complete' && result.info === 'OK') {
			      // console.log(result.regeocode.formattedAddress);
			      var address = result.regeocode.formattedAddress
			      let cd = {address, longitude, latitude}
			      this.$emit('cb', cd)
			    }
			  })
			})
		},
		// 平移到某个点
		panto(NS){
			this.map.panTo(NS);
			this.map.setZoom(18)
		},
		// 浙里办定位
    getLatLog() {
      ZWJSBridge.getLocation()
        .then(result => {
          let {detailAddress: address, longitude, latitude} = result
          let cd = {address, longitude, latitude}
          if (this.isClickMarker) this.setMarker(longitude, latitude)
          this.$emit('cb', cd)
        }).catch(error => {
          console.log(error)
        })
    },
		
  }
}
</script>

<style scoped>
#container{
	width: 100%;
	/* height: 400rpx; */
}
::v-deep .amap-marker-label{
	border: 0 !important;
	box-shadow: 4rpx 4rpx 10rpx 4rpx rgba(0,0,0,.2) !important;
}
</style>
