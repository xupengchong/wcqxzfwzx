<template>
	<view class="u-skeleton">
 		<!-- <learn-time ref="learnTime" learnContent="法律法规"></learn-time> -->
		<!-- 搜索 -->
	<!--	<view class="top-search u-flex u-col-center u-border-bottom">
			<view class="top-search-left u-flex u-flex-1">
				<u-image src="@/static/img/top-search.png" width="35rpx" height="35rpx"></u-image>
				<u-input v-model="searchValue" type="text" class="u-flex-1 u-m-l-20"></u-input>
			</view>
			<view class="top-search-right">
				<view class="top-search-right-btn u-flex u-row-center u-col-center" @click="handleSearch">
					<u-image src="@/static/img/filter.png" width="28rpx" height="28rpx" class="img"></u-image>
					<text>筛选</text>
				</view>
			</view>
		</view> -->
		<view class="container-top">
			<view class="title">
				<text class="u-line-2 u-skeleton-rect">{{ detailData.title }}</text>
			</view>
			<view class="b-title jg-icon">
				<text class="u-skeleton-rect">发布机关：</text>
				<text class="u-skeleton-rect">{{ detailData.issueDept }}</text>
			</view>
			<view class="b-title sz-icon">
				<text class="u-skeleton-rect">发布时间：</text>
				<text class="u-skeleton-rect">{{ detailData.issueTime }}</text>
			</view>
			<!-- <view class="b-title sz-icon">
				<text class="u-skeleton-rect">实施时间：</text>
				<text class="u-skeleton-rect">{{ detailData.implementationTime }}</text>
			</view> -->
		</view>
		<u-gap bg-color="#F5F5F5" style="height: 10px;"></u-gap>
		<!-- 主体 -->
		<view class="container">
			<scroll-view class="u-skeleton-rect" :scroll-y="true" :show-scrollbar="true" style="height: calc(100vh - 251px);">
				<!-- <u-parse  :show-with-animation="true">{{detailData.content}}</u-parse> -->
        <rich-text :nodes="detailData.content"></rich-text>
			</scroll-view>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>

	export default {
		components: {},
		data() {
			return {
				detailId: null,
				detailData: {
					title: '通知公告1',
					issueDept: '金华市婺城区行政服务中心',
					issueTime: '2022-03-10',
					// implementationTime: '2022-03-10',
					content: '通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情通知公告详情。'
				},
				content: '',
				loading: true,
			}
		},
		watch: {
		},
		methods: {
			// fetchData() {
			// 	this.$loading()
			// 	this.$u.api.getLawDetail({}, this.detailId).then(res => {
			// 		uni.hideLoading()
			// 		this.loading = false
			// 		this.detailData = res.data
			// 		this.content = res.data.content
			// 	}).catch(() => {
			// 		uni.hideLoading()
			// 		this.loading = false
			// 	})
			// },
   //    handleSearch() {
			// 	const search = this.searchValue
			// 	if (search.trim() === '') {
			// 		uni.showModal({
			// 			title: '提示',
			// 			content: '请输入有效内容',
			// 			showCancel: false
			// 		})
			// 		return
			// 	} else {
			// 		let content = this.content
			// 		const result = content.match(eval(`/${search}/g`))
			// 		if (Array.isArray(result) && result.length > 0) {
			// 			this.detailData.content = content.replace(eval(`/${search}/g`), `<span style="color: red; background: yellow;">${search}</span>`)
			// 		} else {
			// 			this.detailData.content = content
			// 		}
			// 		uni.showModal({
			// 			title: '提示',
			// 			content: (Array.isArray(result) && result.length > 0) ? `全文一共检索到${result.length}处` : '未匹配到结果',
			// 			showCancel: false
			// 		})
			// 	}
			// }
		},
		onLoad(params) {
			this.detailId = params.id
			// this.fetchData()
		},
		// onBackPress(e) {
		// 	if (e.from == 'backbutton' && !this.$refs.learnTime.isEndStudy) {
		// 		uni.showModal({
		// 			title: '提示',
		// 			content: '还未结束学习，是否保存学习记录？',
		// 			confirmText: '直接退出',
		// 			cancelText: '保存记录',
		// 			success: ({ confirm }) => {
		// 				if (confirm) {
		// 					uni.navigateBack()
		// 				} else {
		// 					this.$refs.learnTime.addLearnRecord()
		// 				}
		// 			}
		// 		})
		// 		return true
		// 	}
		// }
	}
</script>

<style lang="scss">
.container-top {
	background-color: #fff;
	padding-top: 15px;
	padding-bottom: 15px;
	.title {
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 10px;
		padding: 0 15px;
	}
	.b-title {
		font-size: 12px;
		color: #808080;
		margin-bottom: 6px;
		padding: 0 15px 0 35px;
		&.jg-icon {
			background: url(../../../../static/icon/jg.png) no-repeat 15px center / contain;
		}
		&.sz-icon {
			background: url(../../../../static/icon/sz.png) no-repeat 15px center / contain;
		}
	}
}
.container {
	background-color: #FFFFFF;
	padding: 20rpx 30rpx 15px;
	overflow-y: auto;
  font-size: 12px;
}
.top-search {
	width: 100%;
	height: 51px;
	background-color: #fff;
	padding: 0 30rpx;
	// box-shadow: 0px 2px 10px 0px rgba(46, 92, 167, 0.1);
	position: fixed;
	top: 40px;
	left: 0;
	z-index: 10;
	/* #ifdef H5 */
	top: 84px;
	/* #endif */
	&-left {
		height: 68rpx;
		background-color: #F5F5F5;
		border-radius: 68rpx;
		padding: 0 20rpx;
		margin-right: 20rpx;
	}
	&-right {
		&-btn {
			width: 136rpx;
			height: 68rpx;
			border-radius: 68rpx;
			background-color: #327BF0;
			color: #fff;
			font-size: 28rpx;
			transition: all 0.5s;
			.img {
				margin-right: 10rpx;
			}
			&:active {
				opacity: 0.3;
			}
		}
	}
}
</style>
