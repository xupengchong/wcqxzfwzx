<template>
	<view>
		<view class="main">
		  <u--form v-if="eventKey == 'hjxx'" labelAlign="left" labelPosition="left" :model="form" ref="uForm" :labelStyle="labelStyle" :labelWidth="130">
		    <u-form-item label="姓名：" borderBottom>
		      <u--input v-model="form.mName" readonly border="none"></u--input>
		    </u-form-item>
		    <u-form-item label="性别：" borderBottom>
		      <u--input v-model="form.mSex" readonly border="none"></u--input>
		    </u-form-item>
		    <u-form-item label="身份证号码：" borderBottom>
		      <u--input v-model="form.mIdCard" readonly border="none"></u--input>
		    </u-form-item>
		    <u-form-item label="户口所在地址：" borderBottom>
		      <u--input v-model="form.mAddress" readonly border="none"></u--input>
		    </u-form-item>
        <u-form-item label="证明用途：" borderBottom>
          <u--input v-model="form.mPurpose" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="经办人：" borderBottom>
          <u--input v-model="form.mUser" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="联系电话：">
          <u--input v-model="form.mPhone" readonly border="none"></u--input>
        </u-form-item>
      </u--form>
      <u--form v-if="eventKey == 'ldrk'" labelAlign="left" labelPosition="left" :model="form" ref="uForm" :labelStyle="labelStyle" :labelWidth="130">
        <u-form-item label="姓名：" borderBottom>
          <u--input v-model="form.mName" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="性别：" borderBottom>
          <u--input v-model="form.mSex" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="身份证号码：" borderBottom>
          <u--input v-model="form.mIdCard" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="居住时间：" borderBottom>
          <u--input v-model="form.mTime" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="户籍地址：" borderBottom>
          <u--input v-model="form.mAddress" readonly border="none"></u--input>
        </u-form-item>
        <u-form-item label="居住地址：" borderBottom>
          <u--input v-model="form.mAddress" readonly border="none"></u--input>
        </u-form-item>
      </u--form>
      <u--image class="img" :src="imgsrc" width="220rpx" height="220rpx"></u--image>
    </view>
	</view>
</template>

<script>
  import imgSrc from '@/static/gz.png'

	export default {
		data() {
			return {
        imgsrc: imgSrc,
        labelStyle: {
          color: '#b7b7b7',
          fontWeight: 700
        },
        eventKey: '',
        form: {
          mName: '张三',
          mSex: '男',
          mIdCard: '330721196201011111',
          mAddress: '浙江省金华市婺城区',
          mPurpose: '法院起诉',
          mUser: '李四',
          mPhone: '18035312425',
          mTime: '1990-12-11 - 至今'
        }
			}
		},
		methods: {

		},
    onLoad(params) {
      const {eventKey} = params
      this.eventKey = eventKey
    }
	}
</script>

<style>
.main {
  padding: 0 32rpx;
  background-color: #fff;
  margin: 0 20rpx;
  border-radius: 10rpx;
  position: relative;
}
.img {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(-35deg);
}
</style>
