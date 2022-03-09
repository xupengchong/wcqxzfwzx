<template>
  <view :class="[$store.state.vuex_isLow ? 'mainLow' : '' ]">
    <view class="chunk">
      <view v-if="title" class="chunk-title">{{ title }}</view>
      <view class="list">
        <view v-for="(v , i) in listData" :key="i" @click="$u.route(v.url||'pages/404')">
          <u-transition :show="true" class="dd list-li" :duration="i+'00'-0+300" mode="fade-right">
            <view class="img"><u--image :src="v.icon" width="96rpx" height="96rpx" shape="circle" /></view>
            <view class="list-left">
              <view class="list-title">{{ v.title }}</view>
              <view class="hint">{{ v.hint }}</view>
            </view>
            <div class="icons">
              <u-icon name="arrow-right" size="20" />
            </div>
          </u-transition>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'SspList',
  props: {
    title: String,
    listData: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.mainLow{
  .chunk {
  // padding:0 20rpx;
  margin-top: 20rpx;
  .list {
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 20rpx;
    padding: 20rpx 0;
    .list-title{
        margin-bottom: 6rpx;
        font-size: $low-font22;
        line-height: 48*2rpx;
    }
    .list-left .hint {
      font-size: 28rpx;
      color: #aaa;
      letter-spacing: 1px;
      display: none;
    }
  }

}
}
.bigImg {
  width: 100%;
  margin-bottom: 20rpx;
  overflow: hidden;
}

.bigImg img,
.chunk {
  border-radius: 10rpx;
}

.chunk {
  // padding:0 20rpx;
  margin-top: 20rpx;

  .chunk-title {
    font-size: 40rpx;
    font-weight: bold;
    line-height: 80rpx;
    border-bottom: 1px #e8e9ec solid;
  }

  .list {
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 20rpx;
    padding: 20rpx 0;
    .list-title{
        margin-bottom: 6rpx;
        font-size: 36rpx;
    }
    .list-left .hint {
      font-size: 28rpx;
      color: #aaa;
      letter-spacing: 1px;
    }
    .list-li {
    padding: 20rpx;
    border-radius: 10rpx;
    box-sizing: border-box;
    grid-row-gap: 30rpx;
    background-color: #fff;
    display: grid;
    grid-template-columns: 96rpx auto 10%;
    grid-column-gap: 16rpx;
    }

    .img {
      // width: 96rpx;
      // height: 96rpx;
      // border-radius: 50%;
      overflow: hidden;
      // margin-right: 10rpx;
    }

  }

}
::v-deep .icons span{
  line-height: 90rpx !important;
}

  .list-left .list-title {
  font-size: 36rpx;
  font-weight: bolder;
}
.list-title{
    margin-bottom: 6rpx;

}
.list-left .hint {
  font-size: 28rpx;
  color: #aaa;
  letter-spacing: 1px;
}

.chunk-span {
  margin: 0px 20rpx;
  color: #ddd;
}
</style>
