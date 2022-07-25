<template>
	<view>
		<view class="content-1">
			<text class="content-1-title">南昌路社区召开庆祝中国共产党成立101周年暨“七一表彰大会”</text>
			<image class="content-1-img" src="../../static/home/bg.png" mode=""></image>
			<text class="content-1-author">南昌路社区党支部</text>
			<text class="content-1-time">昨天</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "inf-one",
		props: ['articleList1'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.content-1 {
		position: relative;
		margin-top: 41rpx;
		// left: 38rpx;
		margin-left: 38rpx;
		// top: 64rpx;
		width: 686rpx;
		height: 170rpx;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #D8D8D8;

		.content-1-title {
			position: absolute;
			width: 442rpx;
			height: 80rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			font-weight: normal;
			line-height: 40rpx;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.content-1-img {
			position: absolute;
			left: 458rpx;
			top: 2rpx;
			width: 228rpx;
			height: 168rpx;
			border-radius: 10rpx;
		}

		.content-1-author {
			position: absolute;
			top: 136rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}

		.content-1-time {
			position: absolute;
			left: 222rpx;
			top: 136rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}
	}
</style>
