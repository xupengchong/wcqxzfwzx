<template>
	<view :class="[$store.state.vuex_isLow ? 'sspmain mainLow' : 'sspmain' ]">
		<view class="title">
			<view class="title-h1">
				公租房租赁补贴资格确定
			</view>
			<view class="title-h2">
				公租房租赁补贴资格确定
			</view>
			<view class="title-rate">
				<text class="title-rate-num">{{titleRate}}</text> 
				<u-rate  class="title-rate-u-rate" :value="titleRate" size="14"  @change="titleRates" disabled active-color="#FD8E00"  inactive-color="#b2b2b2" gutter="0"></u-rate>
				<view style="display:flex">
					<span class="title-rate-eva">查看服务评价</span>
					<span><u-icon  size="16" name="arrow-right"></u-icon></span>
				</view>
			</view>
			<view class="title-show">
				<view class="title-show-item">
					<view class="title-show-item-top">
						<span class="title-show-item-top-num">1</span>
						<span class="title-show-item-top-text">次</span>
					</view>
					<view class="title-show-item-hit">
						到现场次数
					</view>
				</view>
				<view class="title-show-item">
					<view class="title-show-item-top">
						<span class="title-show-item-top-num">45</span>
						<span class="title-show-item-top-text">工作日</span>
					</view>
					<view class="title-show-item-hit">
						法定办结时限
					</view>
				</view>
				<view class="title-show-item">
					<view class="title-show-item-top">
						<span class="title-show-item-top-num">33</span>
						<span class="title-show-item-top-text">工作日</span>
					</view>
					<view class="title-show-item-hit">
						承诺办结时限
					</view>
				</view>
				<view class="title-show-item">
					<view class="title-show-item-top">
						<span class="title-show-item-top-num">全市</span>
						<span class="title-show-item-top-text"></span>
					</view>
					<view class="title-show-item-hit">
						通办范围
					</view>
				</view>
			</view>
		</view>
		<tabList>
			<template v-slot:jcxx>
				<jcxx></jcxx>
			</template>
			<template v-slot:clqd>
				<view>2222</view>
			</template>
			<template v-slot:bslc>
				<view>3333</view>
			</template>
			<template v-slot:gdxx>
				<view>4444</view>
			</template>
		</tabList>
		<view class="site">
			<siteList></siteList>
		</view>
	</view>
</template>

<script>
	import tabList from './tabList.vue'
	import jcxx from './components/jcxx.vue'
	import siteList from './siteList.vue'
	export default {
		components:{tabList,jcxx,siteList},
		data() {
			return {
				titleRate:4
			}
		},
		methods: {
			titleRates(e){
				this.titleRate = 4
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		padding: 0;
	}
.sspmain{
	.title{
		padding: 32rpx;
		background-color: #fff;
		&-h1{
			font-size: $uni-font-size-lg;
		}
		&-h2{
			font-size: $uni-font-size-base;
		}
		&-h1,&-h2{
			margin-bottom: 20rpx;
			letter-spacing: 2rpx;
		}
		&-rate{
			display: flex;
			align-items: center;
			
			&-num,&-u-rate ,&-eva{
			margin-right: 16rpx;
			}
			&-num{
				color: #FD8E00;
			}
			&-eva{
				color: $uni-text-color-grey;
				font-size:$uni-font-size-sm ;
			}
		}
		&-show{
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			&-item{
				display: flex;
				flex-direction: column;
				align-items: center;
				&-top{
					margin-bottom: 16rpx;
					&-num{
						font-size: 44rpx;
					}
					&-text{
						font-size: 24rpx;
					}
				}
				&-hit{
					font-size: 30rpx;
					color: $uni-text-color-placeholder;
				}
			}
		}
	}
	.site{
		margin-top: 16rpx;
	}
}

</style>
