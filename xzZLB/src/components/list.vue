<template>
	<view class="lists">
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
	</view>
</template>

<script>
	export default {
		name:"list",
		props:['list'],
		data() {
			return {
				
			}
		},
		methods:{
			moveList(v){
				this.$emit('moveList',v)
			}
		}
	}
</script>

<style lang="scss" scoped>
.lists{
	&-item{
		font-size: 28rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 32rpx;
		margin-bottom: 20rpx;
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
</style>
