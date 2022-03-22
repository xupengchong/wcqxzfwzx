<template>
	<view class="main">
		<check @reset="value = ''" :value="value" title1="生育信息" :isButton="false">
			<template v-slot:searchContent>
				<view class="search-inp">
					<u--form labelPosition="left" labelWidth="60" :model="birthData" :rules="rules" ref="form1">
						<u-form-item label="姓名" borderBottom >
							<u--input border="bottom" v-model="birthData.name"></u--input>
						</u-form-item>
						<u-form-item label="身份证" borderBottom >
							<u--input border="bottom" v-model="birthData.IDcard"></u--input>
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
	components: { check },
	data() {
		return {
			value: '',
			birthData:{
				name:'張三',
				IDcard:'422738199603044123'
			}
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
