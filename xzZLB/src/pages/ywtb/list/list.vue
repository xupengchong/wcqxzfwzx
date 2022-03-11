<template>
	<view class="main">
		<Zlist :list="list" @moveList="moveList">
			<template v-slot:btn="btn">
				<view class="lists-item-but" >
					<u-button class="btn" type="primary" shape="circle" :plain="true" @click.native.stop="movePetition(btn.id)">申请通知书</u-button>
					<u-button class="btn" type="primary" shape="circle" :plain="true" @click.native.stop="movePetition(btn.id)">申请调查令</u-button>
					<u-button class="btn" type="primary" shape="circle" :plain="true"  @click.native.stop="moveAffair(btn.id)">事项选择</u-button>
				</view>
			</template>
		</Zlist>
		<div class="jumpAdd" ><u-icon v-waterWave @click="jumpAdd" name="plus-circle-fill" color="#2979ff" size="50"></u-icon></div>
	</view>
</template>

<script>
	import Zlist from '@/components/list.vue'
	export default {
		data() {
			return {
				list: [
					{id:1, caseName: '案件名称', partyName : '当事人名称' , IDCard: '证件号' , lawyerName: '律师名称' , createTime:'2022-03-08 12:00:00'},
					{id:2, caseName: '案件名称', partyName : '当事人名称' , IDCard: '证件号' , lawyerName: '律师名称' , createTime:'2022-03-08 12:00:00'},
					{id:3, caseName: '案件名称', partyName : '当事人名称' , IDCard: '证件号' , lawyerName: '律师名称' , createTime:'2022-03-08 12:00:00'},
					{id:4, caseName: '案件名称', partyName : '当事人名称' , IDCard: '证件号' , lawyerName: '律师名称' , createTime:'2022-03-08 12:00:00'},
				]
			}
		},
		components:{Zlist},
		methods: {
			jumpAdd(){
				this.$router.push('/pages/ywtb/add/add')
			},
			moveList(v){
				this.$u.route({url:'/pages/ywtb/add/add',params:v})
			},
			movePetition(v){
				console.log(v);
			},
			moveAffair(v){
				this.$u.route({url:'/pages/ywtb/affair/affair',params:v})
			},
		},
		onLoad() {
			if ( this.list.length === 0) {
				this.jumpAdd()
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
	padding: 0 32rpx;
	.jumpAdd{
		position: fixed;
		right: 32rpx;
		bottom: 50rpx
	}
	.lists-item-but{
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
		.btn{
			width: 32%;
			white-space: nowrap;
		}
	}
}
</style>
