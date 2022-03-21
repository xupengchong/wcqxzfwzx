<template>
	<view class="main">
		<h3>律师证</h3>
    <view class="card">
      <view class="card_info">
        <view class="name">持证人：张三</view>
        <view class="card_info_line">执业证类别：专职律师</view>
        <view class="card_info_line">执业证号：*****</view>
        <view class="card_info_line">发证机关：*****</view>
      </view>
      <view class="card_bottom">
        <view class="">发证日期：*****</view>
        <view class="">状态：正常</view>
      </view>
    </view>
		<h3>身份证</h3>
		<view class="card">
		  <view class="card_info">
		    <view class="name">姓名：张三</view>
		    <view class="card_info_line">性别：男</view>
		    <view class="card_info_line">民族：汉</view>
		    <view class="card_info_line">出生：2022年03月14日</view>
		    <view class="card_info_line">住址：浙江省金华市婺城区临江东路1100号</view>
		    <view class="card_info_line">公民身份证号码：433627199904044412</view>
		  </view>
		  <view class="card_bottom">
		    <view class="">有效期限：长期</view>
		    <view class="">签发机关：金华市公安局</view>
		  </view>
		</view>
<!-- 		<u--form
      labelAlign="left"
      labelPosition="left"
      :model="form"
      ref="uForm"
      :labelWidth= "90"
    >
      <u-form-item	label="律师名称 : "	prop="lawyerName"	borderBottom>
      	<u--input	v-model="form.lawyerName" readonly	border="none"	></u--input>
      </u-form-item>
			<u-form-item	label="联系方式 : "	prop="phone"	borderBottom>
				<u--input	v-model="form.phone"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="工作单位 : "	prop="company"	borderBottom>
				<u--input	v-model="form.company "	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="住 址 : "	prop="address"	borderBottom>
				<u--input	v-model="form.address"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
		</u--form> -->
		<!-- <u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">保存</u-button> -->
		<!-- <u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">下一步</u-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					lawyerName:'张三',
          phone:15865486852,
          company:'*****律师事务所',
          address:'金华市婺城区******'
				},
        isreadonly: true
        }
		},
		methods: {

		},
		onReady() {
			// this.$refs.uForm.setRules(this.rules)
		},
		onLoad(obj) {
			// if(obj.id){
			// 	this.form = obj
			// 	this.isreadonly = true
			// }else{
			// 	this.form = {lawyerName:'贾律师'}
			// 	this.isreadonly = false
			// }
		}
	}
</script>

<style scoped lang="scss">
.main{
	padding:  32rpx;
	h3{
		margin-bottom: 16rpx;
	}
  .card{
    background-color: #428ffc;
    border-radius: 15rpx;
    color: #fff;
    padding: 34rpx 26rpx;
    font-size: 28rpx;
    margin-bottom: 20rpx;
    .name{
      font-size: 32rpx;
      font-weight: 700;
      margin-bottom: 36rpx;
    }
    .card_info{
      .card_info_line{
        margin-bottom: 18rpx;
      }
    }
    .card_bottom{
      display: flex;
      justify-content: space-between;
      margin-top: 40rpx;
    }
  }
}
</style>
