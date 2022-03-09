<template>
	<view class="">
		<view class="main">
	        <view class="mains">
	            <view>404</view>
	            <view class="hit" >找不到网页！！！</view>
	        </view>
	    </view>
	    <view class="ric"></view>
	    <!-- <view class="ric2"></view> -->
	    <view class="ric3"></view>
	</view>
	
</template>

<script>
</script>

<style scoped>
	.main{
	        width: 100%;
	        height: 80vh;
	        margin: 0 auto;
	        font-size: 90*2rpx;
	        display: flex;
	        flex-direction: column;
	        justify-content: center;
	        align-items: center;
	        position: relative;
	        overflow: hidden;
	       
	    }
	    .mains{
	        -webkit-animation: bounce-up .5s linear infinite;
	        animation: bounce-up .5s linear  1;
	    }
	    .hit{
	        font-size: 50*2rpx;text-align: center;
	
	    }
	
	    @-webkit-keyframes bounce-up {
	        25% {transform: rotateZ(-15deg);}
	        50%, 100% {transform:rotateZ(0deg);}
	        75% {transform: rotateZ(15deg);}
	    }
	    @keyframes bounce-up {
	        25% {transform: rotateZ(-15deg);}
	        50%, 100% {transform:rotateZ(0deg);}
	        75% {transform: rotateZ(15deg);}
	    }
	    .ric{
	        width: 70%;
	        height: 900*2rpx;
	        border-radius: 50%;
	        background-color: #fff;
	        margin-top: -350*2rpx;
	    }
	    .ric2{
	        width: 70%;
	        height: 900*2rpx;
	        border-radius: 50%;
	        background-color: #fff;
	        margin-top: -600*2rpx;
	        margin-left: -350*2rpx;
	    }
	    .ric3{
	        width: 40%;
	    height: 400*2rpx;
	    border-radius: 50%;
	    background-color: #fff;
	    margin-top: -900*2rpx;
	    margin-left: -13%;
	    }
</style>
