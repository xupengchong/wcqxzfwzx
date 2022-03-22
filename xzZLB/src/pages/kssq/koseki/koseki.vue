<template>
	<view class="main">
		<check @reset="formData = {}"  title1="户籍信息查询" >
			<template v-slot:searchContent>
				<view class="search-inp">
					<u--form labelPosition="left" labelWidth="70" :model="formData">
						<u-form-item label="姓名" borderBottom>
							<u--input placeholder="请输入姓名" border="bottom" v-model="formData.name"></u--input>
						</u-form-item>
						<u-form-item label="证件号码" borderBottom>
							<u--input placeholder="请输入证件号码" border="bottom" v-model="formData.IDcard"></u--input>
						</u-form-item>
					</u--form>
				</view>
			</template>
		</check>
	</view>
</template>

<script>
import check from '../components/check.vue'
export default {
	name:'Koseki',
	components: { check },
	data() {
		return {
			formData: {}
		}
	},
	methods: {}
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
}
</style>
