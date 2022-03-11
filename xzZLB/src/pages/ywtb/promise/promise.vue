<template>
	<view>
		<view class="text">
      <text>本申请人承诺：所提供的证件证明真实有效，申请内容是真实的。若有填报不实或有将查询结果用于其他用途以及泄露被查询信息的行为，本人愿意承担由此产生的一切法律责任</text>
    </view>
    <view class="btn">
      <u-button style="width: 90%; margin: 0 auto;" shape="circle" :hairline="true" type="primary" @click="submits">签名</u-button>
    </view>
    <u-modal :show="show" title="提示" :content='content' @confirm="subConfirm"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        show: false,
        content: '',
			}
		},
		methods: {
      subConfirm() {
        uni.$u.route({
          type: 'reLaunch',
          url: '/'
        })
      },
			submits() {
        this.show = true
        this.content = '提交成功，查询结果需要2-3天，请耐心等候'
      }
		}
	}
</script>

<style>
  .text {
    padding: 32rpx;
        text-indent: 56rpx;
        background: #fff;
        margin: 0 20rpx;
        border-radius: 10rpx;
        line-height: 54rpx;
  }
.btn {
  width: 100%;
   position: fixed;
   bottom: 40rpx;

}
</style>
