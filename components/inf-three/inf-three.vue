<template>
	<view>
		<view class="content-3">
			<text class="content-3-title">如何缴纳湖北省城市居民基本养老保险</text>
			<image class="content-3-img" src="../../static/home/bg.png"></image>
			<image class="content-3-img" src="../../static/home/bg.png" style="left: 228rpx;"></image>
			<image class="content-3-img" src="../../static/home/bg.png" style="left: 456rpx;"></image>
			<text class="content-3-author">南昌路社区党支部</text>
			<text class="content-3-time">今天</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "inf-three",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.content-3 {
		position: relative;
		left: 34rpx;
		// top: 764.62rpx;
		margin-top: 31rpx;
		width: 684rpx;
		height: 290rpx;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #D8D8D8;

		.content-3-title {
			position: absolute;
			left: 2rpx;
			height: 40rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.content-3-img {
			position: absolute;
			left: 0rpx;
			top: 56rpx;
			width: 220rpx;
			height: 184rpx;
			border-radius: 10rpx;
		}

		.content-3-author {
			position: absolute;
			left: 4rpx;
			top: 256rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}

		.content-3-time {
			position: absolute;
			left: 226rpx;
			top: 256rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}
	}
</style>
