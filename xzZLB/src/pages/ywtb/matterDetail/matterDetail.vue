<template>
	<view class="content">
		<!-- <pdf :src="fileUrl"></pdf> -->
		<view class="content"><web-view :src="urls"></web-view></view>
	</view>

</template>

<script>

import pdf from 'vue-pdf'

	export default {
		components:{pdf} ,
		data() {
			return {
				// // pdf.js的viewer.htm所在路径
				// 			// 注意：静态的html文件需要放在根路径下的 hybrid/html 文件夹中
				// 			viewerUrl: '/hybrid/html/web/viewer.html',
				// 			// 要访问的pdf的路径
				// 			fileUrl: '/hw.pdf',
				// 			// 最终显示在web-view中的路径
				// 			url: '',
							// pdf.js的viewer.htm所在路径
										// 注意：静态的html文件需要放在根路径下的 hybrid/html 文件夹中
										viewerUrl: '/hybrid/html/web/viewer.html',
										// 要访问的pdf的路径
										fileUrl: '/1.pdf',
										// 最终显示在web-view中的路径
										urls: ''
			}
		},
		methods: {
		
		},
    onLoad(params) {
      const {eventKey} = params
      this.eventKey = eventKey
			
			this.urls = `${this.viewerUrl}?file=${encodeURIComponent(this.fileUrl)}`;

    }
	}
</script>

<style>
.main {
  padding: 0 32rpx;
  background-color: #fff;
  margin: 0 20rpx;
  border-radius: 10rpx;
  position: relative;
}
.img {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(-35deg);
}
</style>
