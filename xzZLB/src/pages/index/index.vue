<template>
  <view class="main">
    <view class="bigImg">
		<view class="titleImg">
			<u--image  :show-loading="true" src="../../static/big.png" width="100%" mode="widthFix" />
			<view class="bigImgTxt">
				<p>提高行动效力</p>
				<p class="text">进步公务员素质</p>
			</view>
		</view>
		<template v-for="(v, i) in listDatas">
			<iGridList v-if="i==0" :key="i" :list-data="v.list" :low-color="v.lowColor" :title="v.title" />
			<iGridListB v-else :key="i" :list-data="v.list" :low-color="v.lowColor" :title="v.title" />
		</template>
    </view>
    <div class="footer">本服务由政府服务网、金华市婺城区行政服务中心提供</div>
    <!-- <div class="lowV" @click="isLow">{{ lowTitle }}</div> -->
  </view>
</template>

<script>
// import bigimg from '../../static/big.png'
import iGridList from '@/components/iGridList.vue'
import iGridListB from '@/components/iGridListB.vue'
export default {
  components: {iGridList,iGridListB},
  data() {
    return {
      listDatas: [
        {
          title: '快速办事',
          lowColor: '#e63633',
          list: [
            {icon: '../../static/icon/lasq.png', title: '一网通办', hint: '我的足迹|评价',url:'pages/ywtb/add/add'},
            {icon: '../../static/icon/dcsq.png', title: '我要申请', hint: '我的足迹|评价',url:'pages/ywtb/list/list'},
            {icon: '../../static/icon/wdaj2.png', title: '我的案件', hint: '办理|评价',url:'pages/ywtb/list/list'},
            {icon: '../../static/icon/wdzj.png', title: '我的证件', hint: '我的足迹|评价',url:'pages/ywtb/credentials/credentials'},
          ] 
        },
        {
          title: '快速申请',
          lowColor: '#eb6c3a',
          list: [
            {icon: '../../static/icon/hjxx.png', title: '户籍信息', hint: '户籍信息查询',url:'pages/ywtb/applyDetail/applyDetail'},
            {icon: '../../static/icon/ldrk.png', title: '流动人口', hint: '流动人口信息查询',url:'pages/ywtb/applyDetail/applyDetail'},
						{icon: '../../static/icon/qsgx.png', title: '亲属关系', hint: '亲属关系',url:'pages/ywtb/applyDetail/applyDetail'},
            {icon: '../../static/icon/swzx.png', title: '死亡注销', hint: '死亡注销信息查询',url:'pages/ywtb/applyDetail/applyDetail'},
            {icon: '../../static/icon/zf.png', title: '工商信息', hint: '工商登记信息查询'},
            {icon: '../../static/icon/fcxx.png', title: '房产信息', hint: '房产信息查询'},
						{icon: '../../static/icon/cldj.png', title: '车辆信息', hint: '车辆登记'},
						{icon: '../../static/icon/hyxx.png', title: '婚姻信息', hint: '婚姻登记'},
						{icon: '../../static/icon/csxx.png', title: '出生信息', hint: '出生证明'},
						{icon: '../../static/icon/sbxx.png', title: '社保信息', hint: '社保信息'},
			// {icon: '../../static/icon/zc.png', title: '知识产权信息', hint: '产权信息'},
          ]
        },
        {
          title: '政策服务',
          lowColor: '#2fa78e',
          list: [
			  {icon: '../../static/icon/tzgg.png', title: '通知公告', hint: '通知公告',url:'pages/zcfw/notice/list/list'},
			  {icon: '../../static/icon/zc.png', title: '法律法规', hint: '法律法规',url:'pages/zcfw/laws/list/list'},
			  {icon: '../../static/icon/bgxz.png', title: '表格下载', hint: '表格下载',url:'pages/zcfw/table/list/list'},
			  {icon: '../../static/icon/lsxh.png', title: '律师协会', hint: '律师协会',url:'pages/zcfw/barAssociation/barAssociation'},
		  ]
        },
        // {
        //   title: '调查令',
        //   lowColor: '#0a508c',
        //   list: [ ]
        // }

      ]
    }
  },
  onShow() {
		ZWJSBridge.setTitle({
		  title: '婺服查'})
		  .then(result => {
		    // console.log(result)
		  }).catch(error => {
		    // console.log(error)
		  })
  },
  computed: {
    lowTitle() {
      return this.$store.state.vuex_isLow ? '常规版' : '适老版'
    }
  },
  methods: {
    isLow() {
      let vuex_isLow = !this.$store.state.vuex_isLow
      this.$u.vuex('vuex_isLow', vuex_isLow)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  // padding: 0 32rpx;
}
.lowV{
  position: fixed;
  top: 40%;
  right: 0;
  // width: 100rpx;
	writing-mode:tb-rl;
  // height: 300rpx;
  padding: 20rpx 10rpx;
	letter-spacing: 20rpx;
  // border-radius: 10rpx;
  font-size: $low-font26;
  font-weight: bolder;
  text-align: center;
  background-color: $uni-color-primary;
  color: #fff;
  z-index: 1000;
}
.footer{
  padding: 15px 0;
  text-align: center;
  color: $uni-text-color-grey;
  font-size: 14px;
}
.titleImg{
	position: relative;
	.bigImgTxt{
		position: absolute;
		top: 35%;
		left: 5%;
		color: #ffffff;
		p{
			margin-bottom: 10px;
			font-size: 46rpx;
		}
		.text{
			text-indent: 46rpx;
		}
	}
}

</style>
