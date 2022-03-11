<template>
	<view>
		<view class="chunk_main">
		  <view class="chunk">
		    <view v-if="$store.state.vuex_isLow" class="chunk-title" :style="{backgroundColor: isLow }">{{ title }}</view>
        <u-loadmore v-else nomoreText="事项选择" :line="true" status="nomore" />
		    <view class="list">
          <view style="position: relative;" v-for="(v , i) in listData" :key="i" @click="gotoView(v)">
            <checkbox :checked="v.checked" class="pos" />
            <view class="list-li">
              <view class="img"><u--image :src="v.icon" :width="imgSize" :height="imgSize" shape="circle" /></view>
              <view class="list-left">
                <view class="list-title">{{ v.title }}</view>
                <view class="hint">{{ v.hint }}</view>
              </view>
            </view>
          </view>
		    </view>
		  </view>

      <view class="btn">
        <u-button style="width: 90%; margin: 0 auto;" shape="circle" :hairline="true" type="primary" @click="submits">下一步</u-button>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [
          {id: 1, icon: '../../../static/icon/hjxx.png', checked: false, title: '户籍信息' },
          {id: 2, icon: '../../../static/icon/ldrk.png', checked: false, title: '流动人口' },
          {id: 3, icon: '../../../static/icon/qsgx.png', checked: false, title: '亲属关系' },
          {id: 4, icon: '../../../static/icon/swzx.png', checked: false, title: '死亡注销' },
          {id: 5, icon: '../../../static/icon/zf.png', checked: false, title: '工商信息' },
          {id: 6, icon: '../../../static/icon/fcxx.png', checked: false, title: '房产信息' },
          {id: 7, icon: '../../../static/icon/cldj.png', checked: false, title: '车辆信息' },
          {id: 8, icon: '../../../static/icon/hyxx.png', checked: false, title: '婚姻信息' },
          {id: 9, icon: '../../../static/icon/csxx.png', checked: false, title: '出生信息' },
          {id: 10, icon: '../../../static/icon/sbxx.png', checked: false, title: '社保信息' }
        ],
				title: '',
				lowColor: '#eb6c3a'
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
		methods: {
			gotoView(item) {
        item.checked = !item.checked
      },
      submits() {
        const resAry = this.listData.filter(item => item.checked)
        let ids = [], names = []
        resAry.forEach(item => {
          ids.push(item.id)
          names.push(item.title)
        })
        this.$u.route({ url: 'pages/ywtb/applyDetail/applyDetail', params: {ids: ids.join(','), names: names.join(',') } })
      }
		}
	}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
   position: fixed;
   bottom: 40rpx;

}
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
    position: relative;
    .pos {
      position: absolute;
      left: 0;
      top: 0;
    }
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
