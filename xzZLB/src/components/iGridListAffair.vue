<template>
  <view :class="[$store.state.vuex_isLow ? 'mainLow' : '' ]">
    <view v-if="true" class="chunk_main">
      <view class="chunk">
        <view v-if="$store.state.vuex_isLow" class="chunk-title" :style="{backgroundColor: isLow }">{{ title }}</view>
				<u-loadmore v-else :nomoreText="title" line="true" status="nomore" />
        <view class="list">
			<view v-for="(v , i) in listData" :key="i" class="list-li" @click="gotoView(v.url)">
				<view class="img"><u--image :src="v.icon" :width="imgSize" :height="imgSize" shape="circle" /></view>
				<view class="list-left">
				  <view class="list-title">{{ v.title }}</view>
				  <view class="hint">{{ v.hint }}</view>
				</view>
			</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'IGridList',
  props: {
    listData: Array,
    title: String,
    lowColor: String
  },
  data() {
    return {
    }
  },
  computed: {
    imgSize() {
      return this.$store.state.vuex_isLow ? '84rpx' : '68rpx'
    },
    isLow() {
      return this.$store.state.vuex_isLow ? this.lowColor : '#fff'
    }
  },
	methods:{
		gotoView(url){
			if (url.split('/')[0] == 'pages') {
				this.$u.route(url)
			}else{
				// this.$u.route({url:'pages/webView/webView',params:{url}})
				window.open(url)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.bigImg {
  width: 100%;
  margin-bottom: 20rpx;
  overflow: hidden;
}
	.bigImg img,
.chunk {
  border-radius: 10rpx;
  padding-top:1rpx ;
}
.chunk {
  background-color: #fff;
  margin-top: 20rpx;
  .chunk-title {
    padding: 0 16rpx;
    font-size: 40rpx;
    font-weight: bold;
    line-height: 80rpx;
    border-bottom: 1px #eee solid;
  }
  .list {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    // grid-row-gap: 24rpx;
    padding: 20rpx 16rpx;
    .list-li {
      padding: 16px 0;
      box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
		 text-align: center;
    }
    .img {
      // width: 60rpx;
      // height: 60rpx;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      // height: 40px;
      justify-content: center;
			margin-bottom: 40rpx;
    }

  }
  .list-left .list-title {
    font-size: 32rpx;
    font-weight: bolder;
		color: #4f5563;
  }
  .list-title{
    margin-bottom: 18rpx;

  }

  .list-left .hint {
    font-size: 24rpx;
    color: #4f5563;
    letter-spacing: 1px;
  }
  .chunk-span {
  margin: 0px 20rpx;
  color: #ddd;
  }
}

// 适老版
.mainLow{

.chunk {
  background-color: #fff;
  // padding:0 16rpx;
  margin-top: 20rpx;
  .chunk-title {
    font-size: $low-font26;
    font-weight: bold;
    padding: 40rpx;
    color: #fff;
    border-radius: 5px;
	text-align: center;
  }
  .list {
    display: grid;
    grid-template-columns: 50% 50%;
    // grid-row-gap: 24rpx;
    padding: 20rpx 0;
    .list-li {
      padding: 16px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .img {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

  }
  .list-left .list-title {
    font-size: $low-font22;
    font-weight: bolder;
  }
  .list-title{
    margin-bottom: 6rpx;

  }

  .list-left .hint {
    display: none;
    font-size: 24rpx;
    color: #aaa;
    letter-spacing: 1px;
  }
  .chunk-span {
  margin: 0px 20rpx;
  color: #ddd;
  }
}

}

</style>
