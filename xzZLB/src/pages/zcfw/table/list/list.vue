<template>
	<view class="page">
		<!-- 搜索 -->
		<view class="top-search u-flex u-col-center u-border-top u-border-bottom">
			<view class="top-search-left u-flex u-flex-1">
				<u-image src="@/static/icon/top-search.png" width="35rpx" height="35rpx"></u-image>
				<u-input v-model="searchValue" type="text" class="u-flex-1 u-m-l-20"></u-input>
			</view>
			<view class="top-search-right">
				<view class="top-search-right-btn u-flex u-row-center u-col-center" @click="handleSearch">
					<u-image src="@/static/icon/filter.png" width="28rpx" height="28rpx" class="img"></u-image>
					<text>筛选</text>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="container-list">
			<view class="list-item u-border-bottom" v-for="item in dataList" :key="item.id">
				<view class="list_info">
          <view class="title">
            <text class="u-line-2">{{ item.title }}</text>
          </view>
          <view class="msg u-flex u-row-between">
            <text>{{ item.issueDept }}</text>
            <!-- <text class="time">{{ item.issueTime }}</text> -->
          </view>
        </view>
        <u-button class="download" plain type="primary" size="small" text="下载"></u-button>
			</view>
			<u-empty v-if="noPermission" mode="permission" class="u-m-t-80"></u-empty>
			<u-loadmore v-else :status="status" class="u-m-t-30" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 1,
				pageSize: 10,
				searchValue: '',
				noPermission: false,
				dataList: [
          {
            id:0,
            title:'出具人口信息查询证明申请表',
            issueDept:'浙江省金华市公安局',
            // issueTime:'2022-3-10'
          },
          {
            id:1,
            title:'流动人口居住登记情况表',
            issueDept:'浙江省金华市公安局',
            // issueTime:'2022-3-10'
          }
        ],
				status: 'nomore'
			}
		},
		methods: {
			// fetchData() {
			// 	const { pageNum, pageSize, searchValue } = this
			// 	let params = { pageNum, pageSize, type: 0 }
			// 	if (searchValue) params.searchValue = searchValue
			// 	this.status = 'loading'
			// 	this.$u.api.getLawList(params).then(res => {
			// 		if (pageNum == 1) {
			// 			this.dataList = res.rows
			// 			uni.stopPullDownRefresh()
			// 		} else {
			// 			this.dataList = this.dataList.concat(res.rows)
			// 		}
			// 		this.status = res.rows.length < 10 ? 'nomore' : 'loadmore'
			// 		this.noPermission = false
			// 	}).catch(err => {
			// 		this.status = 'loadmore'
			// 		uni.stopPullDownRefresh()
			// 		if (err.data.code === 403) this.noPermission = true
			// 	})
			// },
			handleSearch() {
				this.pageNum = 1
				// this.fetchData()
        // console.log(this.searchValue)
        if(this.searchValue.trim() != ''){
          this.dataList = this.dataList.filter(item=>{
            return item.title.includes(this.searchValue.trim())
          })
        }else{
          this.dataList = [
            {
              id:0,
              title:'出具人口信息查询证明申请表',
              issueDept:'浙江省金华市公安局',
              // issueTime:'2022-3-10'
            },
            {
              id:1,
              title:'流动人口居住登记情况表',
              issueDept:'浙江省金华市公安局',
              // issueTime:'2022-3-10'
            }
          ]
        }

        // this.searchValue = ''
			},
			// handleOpen(id) {
			// 	this.$u.route({ url: 'pages/zcfw/laws/detail/detail', params: { id } })
			// }
		},
		onLoad() {
			this.fetchData()
		},
		onPullDownRefresh() {
			this.pageNum = 1
			this.fetchData()
		},
		onReachBottom() {
			// if (this.status == 'loadmore') {
			// 	this.pageNum++
			// 	this.fetchData()
			// }
		}
	}
</script>

<style scoped lang="scss">
.page {
	height: 100%;
}
.top-search {
  display: flex;
  // justify-content: center;
	width: 94%;
	height: 103rpx;
	background-color: #fff;
	padding: 0 30rpx;
	// box-shadow: 0px 2px 10px 0px rgba(46, 92, 167, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	// z-index: 10;
	/* #ifdef H5 */
	top: 22px;
	/* #endif */
	&-left {
    display: flex;
    align-items: center;
    width: 80%;
		height: 68rpx;
		background-color: #F5F5F5;
		border-radius: 68rpx;
		padding: 0 20rpx;
		margin-right: 20rpx;
	}
	&-right {
		&-btn {
      display: flex;
      justify-content: center;
      align-items: center;
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

.container-list {
	min-height: 100%;
	background-color: #fff;
	padding: 123rpx 30rpx 30rpx;
	.list-item {
    display: flex;
    align-items: center;
		padding-bottom: 30rpx;
    .list_info{
      flex: 8;
      .title {
        font-size: 32rpx;
        font-weight: 700;
        margin-top: 30rpx;
      }
      .msg {
        // display: flex;
        // justify-content: space-between;
        margin-top: 18rpx;
        font-size: 24rpx;
        color: #AAAAAA;
        .time{
          margin-left: 10rpx;
        }
      }
		}
    .download{
      flex: 1;
      border-radius: 10rpx;
    }
	}
}
</style>
