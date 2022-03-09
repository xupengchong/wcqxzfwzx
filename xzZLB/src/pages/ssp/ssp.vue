<template>
  <view :class="[$store.state.vuex_isLow ? 'sspmain mainLow' : 'sspmain' ]">
    <!-- <u-button type="primary" throttleTime="3000" size="large" :plain="!$store.state.vuex_isLow" text="获取用户信息" style="border: 0;" /> -->
    <view class="iphone">
      <!-- <u-row
        justify="space-between"
        gutter="10"
      >
        <u-col :span="$store.state.vuex_isLow ?3: 3">
          <label class="label"><span class="xing">*</span>联系电话</label>
        </u-col>
        <u-col :span="$store.state.vuex_isLow ?9: 9">
          <u--input
            v-model="form.tel"
          />
        </u-col>
      </u-row> -->
      <u--form
        ref="form"
        label-position="left"
        :model="form"
        :rules="rules"
        label-width="130rpx"
        :label-style="labelStyle"
      >
        <u-form-item
          ref="tel"
          label="联系电话:"
          prop="tel"
          class="teli"
        >
          <u--input
            v-model="form.tel"
            border="none"
          />
        </u-form-item>
        <u-form-item
          ref="content"
          label="内容详情:"
          prop="content"
        >
          <view class="tishi">详细描述问题包括时间、地点、事件等要素</view>
          <u--textarea v-model="form.content" height="130" class="contents-textarea" placeholder="请输入内容详情" />
        </u-form-item>
        <u-form-item
          ref="fileList"
          label="上传图片:"
          prop="fileList"
        >
          <view class="tishi">请上传至少两张清晰图片;一张近景特写.尽量拍摄清除问题细节,一张远景照片,拍摄周围参照物</view>
          <view class="updata">
            <view v-for="(v,i) in fileList" :key="i" class="upimgs">
              <u--image :src="v" width="100px" height="100px" />
              <span class="close" @click="removeImg(v)">
                <u-icon name="close-circle-fill" size="14" />
              </span>
            </view>
            <view v-if="fileList.length<3" class="up" @click="upImg">
              <u-icon name="plus-circle-fill" size="28" color="#428ffc" />
              <span v-if="fileList.length<2">{{ `至少上传${2-fileList.length}张` }}</span>
            </view>
          </view>
        </u-form-item>
      </u--form>
    </view>
    <view class="bcon">
      <!-- <view class="contents">
        <view class="conlabel">
          <label class="label contents-title"><span class="xing">*</span>内容详情<view>详细描述问题包括时间、地点、事件等要素</view></label>
        </view>
        <u--textarea v-model="form.content" height="130" class="contents-textarea" placeholder="请输入内容详情" />
      </view>
      <view class="up-images">
        <label class="label"><span class="xing">*</span>上传图片<view>请上传至少两张清晰图片;一张近景特写.尽量拍摄清除问题细节,一张远景照片,拍摄周围参照物</view></label>
        <view class="updata">
          <view v-for="(v,i) in fileList" :key="i" class="upimgs">
            <u--image :src="v" width="100px" height="100px" />
            <span class="close" @click="removeImg(v)">
              <u-icon name="close-circle-fill" size="14" />
            </span>
          </view>
          <view v-if="fileList.length<3" class="up" @click="upImg">
            <u-icon name="plus-circle-fill" size="28" color="#428ffc" />
            <span v-if="fileList.length<2">{{ `至少上传${2-fileList.length}张` }}</span>
          </view>
        </view>
      </view> -->
      <view class="maps">
        <label class="label"><span class="xing">*</span>位置信息<view>如有误差,请点击地图手动定位</view></label>
        <view class="label"><view>{{ form.address }}</view></view>
        <view class="map">
          <Map :is-click-marker="true" @cb="cb" />
        </view>
      </view>
    </view>
    <view class="but">
      <u-button class="custom-style" shape="circle" text="提交" @click="upData" />
    </view>
    <u-toast ref="uToast" />
    <u-modal width="300rpx" :show="show" :title="title" :show-confirm-button="false">
      <view class="slot-content">
        <u-icon :name="icons" size="28" color="colors" />
      </view>
    </u-modal>
  </view>
</template>

<script>
import Map from '@/components/map.vue'
export default {
  components: {Map},
  data() {
    return {
      show: false,
      title: '正在上传',
      icons: 'arrow-upward',
      colors: '#428ffc',
      form: {
        tel: '',
        content: '',
        address: ''
      },
      fileList: [],
      rules: {
        tel: [// 必填规则
          {
            required: true,
            message: '请输入手机号',
            trigger: ['change', 'blur']
          },
          {
            // 自定义验证函数，见上说明
            validator: (rule, value) => {
              // 上面有说，返回true表示校验通过，返回false表示不通过
              // uni.$u.test.mobile()就是返回true或者false的
              return uni.$u.test.mobile(value)
            },
            message: '手机号码不正确',
            // 触发器可以同时用blur和change
            trigger: ['change', 'blur']
          }],
        content: {
          required: true,
          message: '请输入内容详情',
          trigger: ['change', 'blur']
        }
      },
      labelStyle: {
        'font-size': '28rpx',
        'font-weight': 'bold'
      }
    }
  },
  methods: {
    cb(e) {  // 地图地址回调
      this.form.address = e.address
      this.form.longitude = e.longitude
      this.form.latitude = e.latitude
    },
    /**
     * 选择图片
     * @upload
     * true 上传到浙里办服务器返回网络地址 picPath
     * false 返回 base64 图片 picSrc
     *    */
    upImg() {
      ZWJSBridge.chooseImage({
        upload: true
      }).then(result => {
        console.log(result)
        this.fileList.push(...result.picPath)
        this.show = true
        this.title =  '图片上传成功'
        this.icons =  'checkmark-circle-fill'
        this.colors = '#428ffc'
        setTimeout(() => {
          this.show = false
        }, 1000)
      }).catch(error => {
        console.log(error)
        this.show = true,
        this.title =  '图片上传失败'
        this.icons =  'close-circle-fill'
        this.colors = '#e63633'

        setTimeout(() => {
          this.show = false
        }, 1000)
      })
    },
    removeImg(ri) { // 删除图片
      let rin = this.fileList.findIndex(v => v == ri)
      this.fileList.splice(rin, 1)
    },
    upData() {

      let {tel, content, address, longitude, latitude} = this.form
      let picOne = this.fileList
      if (picOne.length < 2) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: `请上传至少${2 - picOne.length}张图片`
        })
				return
      }

      let data = {
        openId: this.vuex_userid,
        name: this.vuex_username, // 用户名称
        nickName:this.vuex_username,
        title: '' + '投诉举报-小程序',
        phone: tel,
        portrait: '',
        content: content,
        type: 1,
        longitude: longitude,
        latitude: latitude,
        address: address,
        picOne
      }
      this.$refs.form.validate().then(() => {
			this.$u.api.insertReport(data).then(res=>{
				this.$refs.uToast.show({
				        type: 'success',
				        icon: false,
				        message: '提交成功'
				      })
				      setTimeout(() => {
				        this.$u.route({type: 'back', data: -1})
				      }, 1500)
			}).catch(err=>{})
      //   uni.request({
      //     url: 'https://tsjb.wczfj.com/wechatReport/insertReport', // 仅为示例，并非真实接口地址。
      //     data,
      //     header: {
      //       'content-type': 'application/x-www-form-urlencoded'
      //     },
      //     success: res => {
      //       console.log(res.data)
      //       this.$refs.uToast.show({
      //         type: 'success',
      //         icon: false,
      //         message: '提交成功'
      //       })
      //       setTimeout(() => {
      //         this.$u.route({type: 'back', data: -1})
      //       }, 1500)
      //     }
      //   })
      }).catch(() => {
        // toastError(errors)
      })
    }

  },
  onReady() {
    console.log(this.$refs.form)
    this.$refs.form.resetFields(this.rules)
  }
}
</script>

<style lang="scss" scoped>
	.sspmain{

    .bcon{
			background-color: #fff;
      padding: 0 32rpx !important;
    }
		.iphone,.conlabel,.up-images,.maps,.but,.updata{
      padding: 20rpx 0;
		}

		.iphone,.updata{
			background-color: $uni-bg-color !important;
      padding-left: 20px;
      border-radius: 5px;
		}
		.updata{
			padding: 10px;
		}
    .tishi{
				// margin-left: 5px;
				font-size: 24rpx;
				color: $uni-text-color-grey;
				position: relative;
			}
		.label{
			font-size: 28rpx;
			color: $uni-text-color;
      font-weight: bold;
			view{
				margin-left: 5px;
				font-size: 24rpx;
				color: $uni-text-color-grey;
				position: relative;
			}
			.xing{
				margin: 0;
				font-size: 16px;
				position: relative;
				left: 0;
				top: 1px;
				color: red;
			}
		}
      .updata{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .upimgs{
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 2px;
          position: relative;
          .close{
            position: absolute;
            top: -7px;
            right: -7px;
          }
        }
        .up{
          position: relative;
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 100px;
          border-radius: 2px;
          background-color: rgba(66,143,252,.1);

          span{
            position: absolute;
            top: 65px;
            font-size: 12px;
            color:$uni-color-primary;
          }
        }

      }
		.map{
			margin-top: 10px;
		}
    .custom-style {
      background-color: $uni-color-primary;
      height: 96rpx;
      color: #fff;
      font-size: 36rpx;
      border: 0;
    }
	}
.mainLow{

		.iphone,.contents-textarea{
			background-color: $uni-bg-color !important;
		}
		::v-deep .u-form-item__body__left{
			width: 240rpx !important;
		}
		::v-deep .u-form-item__body__left__content__label{
			font-size:$low-font20 !important;
			color: $uni-color-primary !important;
			span{
				font-size:$low-font20 !important;
				color: $uni-color-primary !important;
				margin-left: 5px;
				font-size: $low-font18;
				color: $uni-text-color-grey;
				position: relative;
			}
		}
		.label{
			font-size:$low-font20;
			color: $uni-color-primary;
			span{
				margin-left: 5px;
				font-size: $low-font18;
				color: $uni-text-color-grey;
				position: relative;
			}
			 
			.xing{
				margin: 0;
				font-size: 14px;
				position: relative;
				left: 0;
				top: 6rpx;
				color: red;
			}
		}
		.map{
			margin-top: 10px;
		}
    .custom-style {
			font-size: 44rpx;
			border: 0;
		}
}
.u-textarea{
  margin-top: 10px;
  max-height: 320rpx;
}
/deep/ .u-upload__button__text{ // 上传字体
  span{
    font-size: 12px;
    color:$uni-color-primary
  }
}
/deep/.u-upload__button{   // 上传按钮
  background-color: rgba(66,143,252,.1);
  width: 100px;
  height: 100px;
}
.u-upload{
  margin-top: 10px;
}
.custom-low-style{
  font-size: 32rpx;
  color: red;
}
/deep/ .u-line{
  display: none;
}
 /deep/.u-form-item__body , /deep/.u-form-item__body__right__content__slot{
display: block;
}
.teli /deep/ .u-form-item__body , .teli /deep/  .u-form-item__body__right__content__slot{
display: flex;
}
</style>
