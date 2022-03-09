<template>
	<view class="main">
		<view class="title">
			线下办事地点/时间
		</view>
		<view class="list">
			<view class="list-item">
				<u--text prefixIcon="map-fill" :iconStyle="iconStyle" class="list-item-text" :text="text1"></u--text>
				<u--text prefixIcon="clock-fill" :iconStyle="iconStyle" class="list-item-text" :text="text2"></u--text>
				<u--text prefixIcon="phone-fill" :iconStyle="iconStyle" class="list-item-text" :text="text3"></u--text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				iconStyle:{'font-size': '48rpx',color:'#428ffc','margin-right':'14rpx'},
				text1:'金华市行政服务中心(金华市婺城区西关街道双龙南街858号)三楼F17窗口',
				text2:'工作日(夏季:上午8:30-12:00，下午13:30-17:30;冬季:上午9:00-12:00，下午13:00-17:00)',
				text3:'0579-82320116'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		padding: 32rpx;
		background-color: #ffffff;
		.title{
			margin-bottom: 32rpx;
		}
		.list{
			&-item{
				border-radius: 5px;
				border: 1px $uni-border-color solid;
				padding: 0 32rpx ;
				&-text{
					padding: 16rpx 0;
				}
			}
		}
	}
</style>
