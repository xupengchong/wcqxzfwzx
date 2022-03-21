<template>
	<view class="lists">
		<!-- 搜索 -->
		<view class="top-search u-flex u-col-center u-border-top u-border-bottom">
			<view class="top-search-left u-flex u-flex-1">
				<u-input v-model="searchValue" type="text" class="u-flex-1 u-m-l-20"></u-input>
			</view>
			<view class="top-search-right">
				<view v-waterWave class=" top-search-right-btn u-flex u-row-center u-col-center" @click="handleSearch">
					
				<u-button type="primary" icon="search" class="customStyle" shape="circle">筛选</u-button>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="lists-D">
			<view class="lists-item" v-for="(v,i) in list" :key="v.id" @click="moveList(v)">
				<view class="lists-item-li lists-item-title">
						<view class="lists-item-li-label">案件名称：</view>
						<view class="">{{v.caseName}}</view>
				</view>
				<view class="lists-item-li">
					<view class="lists-item-li-label">当事人名称：</view>
					<view class="">{{v.partyName}}</view>
				</view>
				<view class="lists-item-li">
					<view class="lists-item-li-label">证件号：</view>
					<view class="">{{v.IDCard}}</view>
				</view>
				<view class="lists-item-li">
					<view class="lists-item-li-label">律师名称：</view>
					<view class="">{{v.lawyerName}}</view>
				</view>
				<view class="lists-item-li">
					<view class="lists-item-li-label">创建时间：</view>
					<view class="">{{v.createTime}}</view>
				</view>
					<slot name="btn" :id="v.id"></slot>
			</view>
		<u-empty v-if="noPermission" mode="permission" class="u-m-t-80"></u-empty>
		<u-loadmore v-else :status="status" class="u-m-t-30" />
		</view>
	</view>
</template>

<script>
	export default {
		name:"list",
		props:['list'],
		data() {
			return {
				noPermission: false,
				status: 'nomore',
				
			}
		},
		methods:{
			moveList(v){
				this.$emit('moveList',v)
			},
			handleSearch(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.lists{
	background-color: #fff;
	.top-search {
	  display: flex;
	  // justify-content: center;
		width: 94%;
		height: 103rpx;
		background-color: #fff;
		padding: 0 30rpx;
		// box-shadow: 0px 2px 10px 0px rgba(46, 92, 167, 0.1);
		position: fixed;
		top: 0;
		left: 0;
		// z-index: 10;
		/* #ifdef H5 */
	// top: 22px;
	padding-top: 22px;
		/* #endif */
		&-left {
	    display: flex;
	    align-items: center;
	    width: 80%;
			height: 68rpx;
			background-color: #F5F5F5;
			border-radius: 68rpx;
			padding: 0 20rpx;
			margin-right: 20rpx;
		}
		&-right {
			&-btn {
	      display: flex;
	      justify-content: center;
	      align-items: center;
				border-radius: 68rpx;
				background-color: #327BF0;
				color: #fff;
				font-size: 28rpx;
				.img {
					margin-right: 10rpx;
				}
			}
		}
	}
	// 列表
	&-D{
		padding-top: 90px;
		padding-bottom: 10px;
	}
	&-item{
		font-size: 28rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding: 32rpx;
		box-shadow: 4rpx 4rpx 14rpx 4rpx rgba(0,0,0,.1);
		&-li{
			display: flex;
			padding: 4rpx 0;
			&-label{
				width: 200rpx;
				text-align: right;
			}
		}
		&-but{
			padding-top: 30rpx;
			display: flex;
			justify-content: space-between;
			.btn{
				width: 30%;
			}
		}
		&-title{
			font-size:30rpx ;
			font-weight: bold;
		}
	}
	
}
.customStyle{
	height: 64rpx;
	width: 170rpx;
}
</style>
