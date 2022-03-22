<template>
	<view class="main">
		<view class="title">
			{{title1}}
		</view>
		<view class="search">
			<slot name="searchContent"></slot>
			<view class="search-btn" v-if="isButton">
				<u-button style="margin-right: 32rpx;" shape="circle" :hairline="true" type="primary" @click="check">立即查询</u-button>
				<u-button shape="circle" :hairline="true" type="primary" @click="reset">重置信息</u-button>
			</view>
		</view>
		<view class="title">
			{{title2}}
		</view>
		<view class="result">
			<u-empty v-if="resIsNull" text="暂无数据" mode="data" />
			<slot v-else name="keepButton"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title1:{
				type:String,
				default: ''
			},
			title2:{
				type:String,
				default: '查询结果'
			},
			isButton:{
				type:Boolean,
				default: true
			},
			resIsNull:{
				type:Boolean,
				default: true
			},
		},
		data() {
			return {
					value:'',
			}
		},
		methods:{
			reset(){
				this.$emit('reset',{})
			},
			check(){
				this.$emit('check')
			}
		}
}
</script>

<style lang="scss" scoped>
.main{
	background-color: #fff;
	padding: 32rpx;
	height: 100%;
	.title{
		font-size: 40rpx;
		font-weight: bold;
		margin-left: 20rpx;
		border-bottom: 3px solid #f56c6c;
		display: inline-block;
	}
	.result, .search{
		box-shadow: 4rpx 4rpx 14rpx 4rpx rgba(0,0,0,.1);
		padding: 32rpx;
		border-radius: 20rpx;
		// min-height: 300rpx;
	}
	.search{
		margin-bottom: 80rpx;
		
		&-btn{
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
