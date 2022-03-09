<template>
  <view class="main">
    <view class="bigImg">
      <u--image
        radius="5"
        :show-loading="true"
        src="../../static/big.png"
        width="100%"
        mode="widthFix"
      />
      <template v-for="(v, i) in listDatas">
        <sspList :key="i" :list-data="v.list" :title="v.title" />
      </template>
    </view>
  </view>
</template>

<script>
import sspList from '@/components/sspList.vue'
export default {
  components: { sspList },
  data() {
    return {
      listDatas: [
        {
          title: '',
          list: [
            {
              icon: '../../static/icon/xj.png',
              title: '随手拍',
              hint: '问题发现',
              url: 'pages/ssp/ssp'
            },
            {
              icon: '../../static/icon/zj.png',
              title: '我的足迹',
              hint: '问题发现历史',
              url: 'pages/ssp/sspList'
            },
            {
              icon: '../../static/icon/zx.png',
              title: '使用帮助',
              hint: '使用帮助',
              url: 'pages/ssp/sspHelp'
            }
          ]
        }
      ]
    }
  },
  onLoad() {
			// ZWJSBridge.setTitle({
		 //    title: '婺城区街面秩序投诉举报'})
		 //    .then(result => {
		 //      // console.log(result)
		 //    }).catch(error => {
		 //      // console.log(error)
		 //    })
  },
  methods: {
		setTitle() {
		  
		}
	}
}
</script>

<style lang="scss" scoped>
.main {
  /*width: 400px;*/
  /*box-sizing: border-box;*/
  padding:0 36rpx;
}

</style>
