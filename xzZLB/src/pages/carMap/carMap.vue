<template>
	<view class="aaa">
		<div class="sousuo">
			<u--input
			    placeholder="请输入搜索内容"
			    border="surround"
			    v-model="searchValue"
			  >
				<template slot="suffix">
					<u-button
						@tap="search"
						text="搜索"
						type="primary"
					></u-button>
				</template>
			</u--input>
			<u-list :scrollable="false" :height=" indexList.length == 0 ? '0rpx' :'50vh'">
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<u-cell :title="item.name" @click="panto(item)"></u-cell>
				</u-list-item>
			</u-list>
		</div>
		<Map ref="map" :H = "H" :markerData ="markerData" :isClear = "false"></Map>
	</view>
</template>

<script>
	import Map from '@/components/map.vue'
	export default {
		 components: {Map},
		data() {
			return {
				H:'100vh',
				markerData:[],
				searchValue:'',
				indexList:[]
			}
		},
		methods: {
			getCarMap(){
				this.$u.api.getCarMap().then(res=>{
					this.markerData = res.data
				}).catch(err=>{
					console.log(err);
				})
			},
			search(){
				let r = new RegExp(this.searchValue,"g");//g代表全部
				let filterData = this.markerData.filter(v => r.test(v.name))
				this.indexList = filterData
			},
			panto(item){
				let {lng,lat} = item
				this.$refs.map.panto([lng,lat])
				this.searchValue = item.name
				this.indexList = []
			}
		},
		onLoad(){
			this.getCarMap()
		}
	}
</script>

<style scoped>
uni-page-body{
	padding: 0;
}
.sousuo{
	position: absolute;
	top: 20rpx;
	right: 5%;
	z-index: 100;
	width: 90%;
	background-color: #fff;
	border-radius: 4rpx;
	padding: 6rpx;
}
</style>
