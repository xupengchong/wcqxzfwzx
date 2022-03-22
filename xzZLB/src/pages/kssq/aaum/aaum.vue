<template>
	<view class="main">
		<check @reset="reset" @check="inOncheck" :resIsNull="resIsNull" title1="工商信息查询" title2="查询结果">
			<template v-slot:searchContent>
				<view class="search-inp">
					<u--form labelPosition="left" labelWidth="75" :model="formData">
						<u-form-item label="" borderBottom><u--input placeholder="请输入要查询的工商信息" border="bottom" v-model="formData.name"></u--input></u-form-item>
					</u--form>
				</view>
			</template>
			<template v-slot:keepButton>
				<view class="search-btn"><u-button style="margin-right: 32rpx;" shape="circle" :hairline="true" type="primary" @click="handleKeep">保存为材料</u-button></view>
			</template>
		</check>
	</view>
</template>

<script>
import check from '../components/check.vue'
export default {
	name:'Aaum',
	components: { check },
	data() {
		return {
			formData: {},
			resData: {},
			resIsNull: true
		}
	},
	watch: {
		resData: {
			handler(n) {
				console.log(n)
				this.resIsNull = this.resData.id ? false : true
			},
			deep: true
		}
	},
	methods: {
		handleKeep() {},
		inOncheck() {
			console.log(111);
			this.resData =  {id:1}
		},
		reset() {
			this.formData = {}
			this.resData = {}
		}
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
}
</style>
