<template>
  <view :class="[$store.state.vuex_isLow ? 'mainLow' : '' ]">
    <view class="detailMain">
      <view class="">
        <view class="cont">
          <view class="">投诉内容:</view>
          <view class="">{{ listData.content || '' }}</view>
          <view class="">投诉地址:</view>
          <view class="">{{ listData.address || '' }}</view>
          <view class="">投诉时间:</view>
          <view class="">{{ listData.createDt || '' }}</view>
          <view class="">回复时间:</view>
          <view class="">{{ listData.updateDt || '' }}</view>
          <view class="">回复内容:</view>
          <view class="">{{ listData.report || '' }}</view>
        </view>
        <view v-if="listData.report" class="satisfaction">
          <view class="title">
            {{ pingjiaTitle }}
          </view>
          <view class="radioi">
            <u-radio-group v-model="satisfaction" @change="radioGroupChange">
              <u-radio
                v-for="(v, index) in list"
                :key="index"
                :size="$store.state.vuex_isLow ? 28 : 18 "
                :label-size="$store.state.vuex_isLow ? 22 : 14 "
                :icon-size="$store.state.vuex_isLow ? 24 : 12 "
                placement="row"
                :name="v.id"
                :disabled="v.disabled"
                :label="v.name"
                :style="{marginRight:($store.state.vuex_isLow ? '24rpx' :'10rpx')}"
              />
            </u-radio-group>
          </view>
        </view>
        <view v-if="satisfaction == 1 && listData.report" class="satisfaction">
          <view class="title">
            不满意原因:
          </view>
          <u--textarea v-model="listData.dissatisfiedReason" :disabled="listData.satisfaction>=0" height="130" class="contents-textarea" placeholder="写一些评价吧，让我们做得更好" />
        </view>
        <view v-if="!(listData.satisfaction>=0) && listData.report" class="but">
          <u-button class="custom-style" shape="circle" text="提交" @click="upData" />
        </view>
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      listData: {},
      list: [
        {
          id: 0,
          name: '满意',
          disabled: false
        },
        {
          id: 2,
          name: '基本满意',
          disabled: false
        },
        {
          id: 1,
          name: '不满意',
          disabled: false
        }
      ],
      satisfaction: null,
      pingjiaTitle: '对本案执行进行评价'
    }
  },
  methods: {
    radioGroupChange(e) {

    },
    upData() {
      let { satisfaction} = this
      let dissatisfiedReason = this.listData
      if (!(satisfaction >= 0)) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请选择评价'
        })
        return
      }
      if (satisfaction == 1 && !dissatisfiedReason) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请输入原因'
        })
        return
      }
      let params = {id: this.listData.id, satisfaction}
      if (dissatisfiedReason) params.dissatisfiedReason = dissatisfiedReason

      this.$u.api.insertSatisfaction(params).then(res => {
        if (res.code == 500) {
          this.$refs.uToast.show({
            type: 'error',
            icon: 'close-circle-fill',
            message: '评论失败'
          })
          return
        }else{
					this.$refs.uToast.show({
						type: 'success',
						icon: 'checkmark-circle-fill',
						message: '评论成功'
					})
					setTimeout(() => {
						this.$u.route({type: 'back', data: -1})
					}, 1500)
				}
        
        
      })
    }
  },
  onLoad(e) {
    console.log(e)
    this.listData = e
    this.satisfaction = (this.list.find(v => v.id == this.listData?.satisfaction))?.id
    console.log(!(this.satisfaction >= 0))
    if (this.satisfaction >= 0) {
      this.list.forEach(v => v.disabled = true)
      this.pingjiaTitle = '本案已评价'
    }

  }
}
</script>

<style lang="scss" scoped>
.detailMain{
  padding: 0rpx 32rpx !important;
  .cont{
    background-color: #fff;
    display: grid;
    grid-template-columns:70px auto ;
    font-size: 16px;
    grid-column-gap: 10rpx;
    grid-row-gap: 10rpx;
    padding: 16rpx;
  }
  .satisfaction{
    background-color: #fff;
    padding: 16rpx;
    margin-top: 16px;
    .title{
      font-size: 16px;
      margin-bottom: 16rpx;
    }
  }
}
.mainLow{
  .detailMain{
    .cont{
      background-color: #fff;
      display: grid;
      grid-template-columns:90px auto ;
      font-size: 20px;
      grid-column-gap: 10rpx;
      grid-row-gap: 10rpx;
      padding: 16rpx;
		}
    .satisfaction{
      background-color: #fff;
      padding: 16rpx;
      margin-top: 20px;
      .title{
        font-size:$low-font22;
        margin-bottom: 30rpx;
      }
    }
	}
}
.but{
padding: 20rpx 0 !important;
.custom-style {
      background-color: $uni-color-primary;
      height: 96rpx;
      color: #fff;
      font-size: 36rpx;
      border: 0;
    }
}

</style>
