<template>
	<view class="collect">
		<navigator class="box" url="/subpkg/collectForm/collectForm" open-type="navigate" v-for="item in collectList"
			:key="item.id">
			<image src="../../static/home/wendang.png" class="box-icon-wendang"></image>
			<text class="box-title">{{item.title}}</text>
			<image src="../../static/home/view.png" class="box-view"></image>
			<text class="box-time">{{item.createTime}}-{{item.outOfTime}}</text>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collectList: []
			}
		},
		onLoad() {
			this.getCollect()
		},
		methods: {
			async getCollect() {
				const {
					data: res
				} = await uni.$http.get('http://110.40.210.35:8080/question')
				this.collectList = res.data
				console.log(this.collectList);
			},
		}
	}
</script>

<style lang="scss">
	.collect {}

	.box {
		position: relative;
		left: 26rpx;
		top: 28rpx;
		width: 698rpx;
		height: 154rpx;
		border-radius: 20rpx;
		background: #FFFFFF;
		box-shadow: 0px 8rpx 5px 0px rgba(0, 0, 0, 0.08);
		margin-bottom: 27rpx;

		.box-icon-wendang {
			position: absolute;
			left: 38rpx;
			top: 30rpx;
			width: 32rpx;
			height: 32rpx;
		}

		.box-title {
			position: absolute;
			left: 96rpx;
			top: 30rpx;
			width: 600rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			font-weight: normal;
			line-height: 34rpx;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.box-view {
			position: absolute;
			left: 602rpx;
			top: 30rpx;
			width: 72rpx;
			height: 34rpx;
		}

		.box-time {
			position: absolute;
			left: 38rpx;
			top: 94rpx;
			width: 270rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			line-height: 34rpx;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.5)
		}
	}
</style>
