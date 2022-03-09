<template>
	<view class="main">
		<u--form
						labelAlign="right"
						labelPosition="left"
						:model="form"
						ref="uForm"
						:labelWidth= "90">
						<!-- :rules="rules" -->
			<u-form-item	label="案件名称 : "	prop="caseName"	borderBottom	>
				<u--input	v-model="form.caseName"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="当事人名称 : "	prop="partyName"	borderBottom	>
				<u--input	v-model="form.partyName "	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="证件号 : "	prop="IDCard"	borderBottom	>
				<u--input	v-model="form.IDCard"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="立案号 : "		borderBottom	>
				<u--input	v-model="form.caseID"	border="none"	:readonly="isreadonly"></u--input>
			</u-form-item>
			<u-form-item	label="律师名称 : "	prop="lawyerName"	borderBottom	>
				<u--input	v-model="form.lawyerName" readonly	border="none"	></u--input>
			</u-form-item>
		</u--form>
		<u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">保存</u-button>
		<u-button v-if ="!isreadonly" style="margin-top: 40rpx;" shape="circle" :hairline="true" type="primary" @click="submits">下一步</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					lawyerName:'贾律师'
				},
				rules:{
				caseName: {type: 'string',required: true,message: '请填写案件名称',trigger: ['blur', 'change']},
				partyName: {type: 'string',required: true,message: '请填写当事人名称',trigger: ['blur', 'change']},
				IDCard: {type: 'string',required: true,message: '请填写证件号',trigger: ['blur', 'change']},
				lawyerName: {type: 'string',required: true,message: '请填写律师名称',trigger: ['blur', 'change']},
			},
			isreadonly: false
			}
		},
		methods: {
			submits(){
				this.$refs.uForm.validate().then(res => {
								uni.$u.toast('校验通过')
							}).catch(errors => {
								uni.$u.toast('校验失败')
							})
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad(obj) {
			if(obj.id){
				this.form = obj
				this.isreadonly = true
			}else{
				this.form = {lawyerName:'贾律师'}
				this.isreadonly = false
			}
		}
	}
</script>

<style scoped lang="scss">
.main{
	padding: 0 32rpx;
}
</style>
