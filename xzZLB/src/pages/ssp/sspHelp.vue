<template>
	<view>
		<view v-html="ssp">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ssp:''
			}
		},
		onShow() {
			this.getHelp()
		},
		methods: {
			getHelp(){
				this.$u.api.getHelp().then(res=>{
					console.log(res);
					this.ssp = res.data
				}).catch(err=>{
					
				})
			}
		}
	}
</script>

<style>

</style>
