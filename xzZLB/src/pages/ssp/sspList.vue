<template>
  <view :class="[$store.state.vuex_isLow ? 'mainLow' : '' ]">
    <view class="hisListMain">
			<template v-if="listData.length">
				<view v-for="(v,i ) in listData" :key="i" class="contList" @click="$u.route({url:'pages/ssp/sspDetil',params:v})">
					<div class="lv" />
					<view class="imgge">
						<u--image :show-loading="true" :error-icon="errimg" :src="v.picOne ? v.picOne.split(',')[0] : ''" width="100px" height="100px" />
					</view>
					<view class="cont">
						<view class="">投诉内容:</view>
						<view class="">{{ v.content || '' }}</view>
						<view class="">投诉时间:</view>
						<view class="">{{ v.createDt || '' }}</view>
						<view class="">回复时间:</view>
						<view class="">{{ v.updateDt || '' }}</view>
						<view class="">回复内容:</view>
						<view class="">{{ v.report || '' }}</view>
					</view>
				</view>
			</template>
			<view v-else >
				暂无案件提交记录!!!
			</view>
    </view>
  </view>
</template>

<script>
import errimg from '@/static/error.png'
export default {
  data() {
    return {
      listData: [],
      errimg,
			ceshi:'',
    }
  },
  onShow() {
		let openId = this.vuex_userid 
    this.$u.api.myReport({}, {openId}).then(res => {
      this.listData = res.data
    }).catch(() => {
    })

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.hisListMain{
	padding: 0 32rpx !important;
	.contList{
    background-color: #fff;
    border-radius:5px;
    padding: 30px  16rpx 10px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
		margin-bottom: 10px;
		// display: grid;
		// grid-template-columns:100px auto ;
		// grid-column-gap: 10rpx;
    overflow: hidden;
    position: relative;
    .lv{
      height: 10px;
    width: 120px;
    background: $uni-color-primary;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);

    border-radius: 3px;
    position: absolute;
    top: 10px;
    right: -1px;
    }
    .imgge{
      width: 100px;
      margin-right: 10rpx;
      float: left;
    }
		.cont{
      float: left;
      width: calc( 100% - 110px);
			display: grid;
			grid-template-columns:70px auto ;
			font-size: 16px;
			grid-column-gap: 10rpx;
			grid-row-gap: 10rpx;
		}
	}
}
.mainLow{
  .hisListMain{
	.contList{
		.cont{
			display: grid;
			grid-template-columns:70px auto ;
			font-size: 16px;
			grid-column-gap: 10rpx;
			grid-row-gap: 10rpx;
		}
	}
}
}
/deep/ .u-image{
  height: 100px;
}
</style>
