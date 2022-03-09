<template>
	<view class="tabMain">
		<view class="utabs">
			<u-tabs :activeStyle="activeStyle" :list="list" @click="click"></u-tabs>
		</view>
		<template v-for="(item,i) in list">
			<view v-if="checkedName == item.slot" class="utabItem" :key="item.slot">
				<slot :name="item.slot"></slot>
			</view>
		</template>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{name:"基本信息",slot:'jcxx'},
					{name:"材料清单",slot:'clqd'},
					{name:"办事流程",slot:'bslc'},
					{name:"更多信息",slot:'gdxx'},
				],
				checkedName:'',
				activeStyle:{
					color:'	#3c9cff'
				}
			}
		},
		methods:{
			click(e){
				console.log(e);
				this.checkedName = e.slot
			}
		},
		mounted() {
			this.checkedName = this.list[0].slot
		}
	}
</script>

<style lang="scss" scoped>
	.tabMain{
		.utabs{
			background-color: #ffffff;
			margin: 10rpx 0;
		}
		.utabItem{
			background-color: #ffffff;
			padding: 32rpx;
		}
	}
</style>
