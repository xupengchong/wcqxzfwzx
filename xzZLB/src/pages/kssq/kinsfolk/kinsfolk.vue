<template>
	<view class="main">
		<check @reset="formData = {}" title1="亲属关系查询">
			<template v-slot:searchContent>
				<view class="search-inp">
					<u--form labelPosition="left" labelWidth="70" :model="formData">
						<h4>查询人信息</h4>
						
						<u-form-item label="姓名" borderBottom><u--input placeholder="请输入姓名" border="bottom" v-model="formData.name"></u--input></u-form-item>

						<u-form-item label="手机号" borderBottom><u--input placeholder="请输入手机号" border="bottom" v-model="formData.phone"></u--input></u-form-item>

						<u-form-item label="证件号码" borderBottom><u--input placeholder="请输入证件号码" border="bottom" v-model="formData.IDcard"></u--input></u-form-item>

						<u-form-item label="地址" borderBottom><u--input placeholder="请输入地址" border="bottom" v-model="formData.address"></u--input></u-form-item>

						<u-form-item label="受理地" borderBottom>
							<u--input placeholder="请选择受理地" border="bottom" @click.native="acceptanceShow = true" readonly v-model="formData.acceptanceAddress"></u--input>
						</u-form-item>
						
						<h4>被查询人信息</h4>

						<u-form-item label="姓名" borderBottom><u--input placeholder="请输入被查询人姓名" border="bottom" v-model="formData.passiveName"></u--input></u-form-item>

						<u-form-item label="身份证号" borderBottom><u--input placeholder="请输入被查询人身份证号" border="bottom" v-model="formData.passiveCardId"></u--input></u-form-item>
					</u--form>
				</view>

				<!-- 受理地选择 -->
				<u-picker :show="acceptanceShow" @close="close" :closeOnClickOverlay="true" :keyName="'label'" @cancel="close" @confirm="confirmAcceptanceAddress" :columns="acceptanceAddress"></u-picker>
			</template>
		</check>
	</view>
</template>

<script>
import check from '../components/check.vue'
import acceptance from './pcs.js'
export default {
	name: 'Kinsfolk',
	components: { check },
	data() {
		return {
			formData: {},
			acceptanceShow: false,
			acceptanceAddress: []
		}
	},
	methods: {
		confirmAcceptanceAddress(e) {
			let { id, label } = e.value[0]
			this.formData.acceptanceAddress = label
			this.formData.acceptanceAddressId = id
			this.close()
		},
		close(){
			this.acceptanceShow = false
		}
	},
	onLoad() {
		this.acceptanceAddress = acceptance
	}
}
</script>

<style lang="scss" scoped>
.main {
	background-color: #fff;
	height: 100%;
	overflow: auto;
	.search-inp {
		margin: 62rpx auto;
	}
	h4 {
		margin: 10rpx 0;
	}
}
</style>
