<template>
	<view class="main">
    <!-- 事件处理进度模块 -->
    <view class="item_card">
      <view class="lists-item-li weight">
        <view class="lists-item-li-label">事项名称：</view>
        <view class="">{{eventData.eventName}}</view>
      </view>
      <view class="lists-item-li">
        <view class="lists-item-li-label">所属部门：</view>
        <view class="">{{eventData.deptName}}</view>
      </view>
      <view class="lists-item-li">
        <view class="lists-item-li-label">反馈时间：</view>
        <view class="">{{eventData.date}}</view>
      </view>
      <view class="lists-item-li">
        <view class="lists-item-li-label">处理状态：</view>
        <view class="">{{eventData.status}}</view>
      </view>
    </view>
    <view class="event_evaluate">
      <view class="choose">对事项处理满意度选择</view>
      <!-- 选项 -->
      <view class="choose_option">
        <view class="choose_item" :class="type=='1'?'active_item':''" @click="choosetype('1')">
          <!-- <van-icon class="choose_icon" class-prefix="icon" name="very_satisfied" /> -->
          <view>非常满意</view>
        </view>
        <view class="choose_item" :class="type=='2'?'active_item':''" @click="choosetype('2')">
          <!-- <van-icon class="choose_icon" class-prefix="icon" name="satisfied" /> -->
          <view>满意</view>
        </view>
        <view class="choose_item" :class="type=='3'?'active_item':''" @click="choosetype('3')">
          <!-- <van-icon class="choose_icon" class-prefix="icon" name="basic_satisfied" /> -->
          <view>基本满意</view>
        </view>
        <view class="choose_item" :class="type=='4'?'active_item':''" @click="choosetype('4')">
          <!-- <van-icon class="choose_icon" class-prefix="icon" name="dissatisfied" /> -->
          <view>不满意</view>
        </view>
        <view class="choose_item" :class="type=='5'?'active_item':''" @click="choosetype('5')">
          <!-- <van-icon class="choose_icon" class-prefix="icon" name="very_dissatisfied" /> -->
          <view>非常不满意</view>
        </view>
      </view>
    </view>
        <!-- <view class="item_btn">
          <u-button class="check btn" plain type="primary" size="small" text="查看" @click="handleOpen(item.eventKey)"></u-button>
          <u-button class="evaluate btn" plain type="primary" size="small" text="评价"></u-button>
        </view> -->
    <u-button class="btn" type="primary" text="提交" @click="handleBack()"></u-button>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        eventData:{
          eventName:'户籍信息',
          eventKey:'hjxx',
          deptName:'***派出所',
          date:'2022-02-15',
          status:'已反馈'
        },
        // 评价类型：1-非常满意 2-满意 3-基本满意 4-不满意 5-非常不满意
        type: '1',
      }
		},
		methods: {
      choosetype(type) {
        this.type = type
      },
      handleBack(){
        uni.navigateBack()
      }
		},
		onReady() {
		},
		onLoad(obj) {

		}
	}
</script>

<style scoped lang="scss">
.main{
	padding: 0 32rpx;
  .item_card{
    background-color: #fff;
    padding: 30rpx 20rpx;
    border-radius: 16rpx;
    // margin-top: 20rpx;
    font-size: 28rpx;
    color: #333;
    .lists-item-li{
      display: flex;
      margin-bottom: 18rpx;
      .lists-item-li-label{}
    }
    .weight{
      font-weight: 700;
      font-size: 30rpx;
    }
    .item_btn{
      display: flex;
      margin-top: 50rpx;
      // justify-content: space-between;
      .btn{
        // display: flex;
        // text-align: left;
        width: 30%;
      }
    }
  }
  .event_evaluate{
     .choose {
          font-size: 14px;
          color: #808080;
          padding: 12px 15px;
        }
        .choose_option {
          // padding: 0 15px 4px;
          .choose_item {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #333;
            width: 100%;
            height: 39rpx;
            background: #fafafa;
            border-radius: 5px;
            padding: 11px 13px;
            margin-bottom: 10px;
            .choose_icon {
              width: 17px;
              height: 17px;
              margin-right: 11px;
              color: #bbc3cd;
            }
            // &:active {
            //   background: #e5f0ff;
            //   color: #4689f5;
            //   font-weight: 500;
            //   .choose_icon {
            //     color: #4689f5;
            //   }
            // }
          }
          .active_item {
            background: #e5f0ff;
            color: #4689f5;
            font-weight: 500;
            .choose_icon {
              color: #4689f5;
            }
          }
        }
  }
  .btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
