<template>
	<view>
		<view class="content-2">
			<text class="content-2-title">定了！医保个人账户可以给家人用了！</text>
			<image class="content-2-img" src="../../static/home/bg.png" mode=""></image>
			<text class="content-2-author">南昌路社区党支部</text>
			<text class="content-2-time">今天</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "inf-two",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.content-2 {
		position: relative;
		left: 38rpx;
		margin-top: 31rpx;
		// top: 336rpx;
		width: 686rpx;
		height: 382rpx;
		border-radius: 10rpx;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #D8D8D8;

		.content-2-title {
			position: absolute;
			height: 40rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.content-2-img {
			position: absolute;
			top: 66rpx;
			width: 686rpx;
			height: 266rpx;
			border-radius: 10rpx;
		}

		.content-2-author {
			position: absolute;
			top: 348rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}

		.content-2-time {
			position: absolute;
			left: 222rpx;
			top: 348rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}
	}
</style>
