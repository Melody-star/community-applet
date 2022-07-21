<template>
	<view>
		<image src="../../static/my/mybg.png" class="bgImg"></image>
		<text class="top-title">我的</text>
		<image :src="userinfo.avatarUrl" class="avatar"></image>
		<view class="nickname">{{userinfo.nickName}}</view>
		<view class="box">
			<view class="box-1">
				<image class="box-1-icon" src="../../static/my/1.png" mode=""></image>
				<text class="box-1-text ">当前社区</text>
				<image class="box-1-image" src="../../static/home/more.png"></image>
			</view>
			<view class="box-2">
				<image class="box-2-icon" src="../../static/my/2.png" mode=""></image>
				<text class="box-2-text ">常见问题</text>
				<image class="box-2-image" src="../../static/home/more.png"></image>
			</view>
			<view class="box-3">
				<image class="box-3-icon" src="../../static/my/1.png" mode=""></image>
				<text class="box-3-text ">平台反馈</text>
				<image class="box-3-image" src="../../static/home/more.png"></image>
			</view>
			<view class="box-4">
				<image class="box-4-icon" src="../../static/my/1.png" mode=""></image>
				<text class="box-4-text ">联系客服</text>
				<image class="box-4-image" src="../../static/home/more.png"></image>
			</view>
		</view>
		<view class="but-end">
			<text class="but-text">退出</text>
		</view>
	</view>
</template>

<script>
	// 按需导入 mapState 辅助函数
	import {
		mapState
	} from 'vuex'

	export default {
		name: "my-userinfo",
		data() {
			return {

			};
		},
		computed: {
			// 将 m_user 模块中的 userinfo 映射到当前页面中使用
			...mapState(['userinfo']),
		},
	}
</script>

<style lang="scss">
	.top-title {
		position: absolute;
		left: 338rpx;
		top: 106rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 36rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #FFFFFF;
	}

	.avatar {
		position: absolute;
		left: 64rpx;
		top: 204rpx;
		width: 128rpx;
		height: 128rpx;
		border-radius: 45px;
		border: 1px solid white;
	}

	.nickname {
		position: absolute;
		left: 242rpx;
		top: 232rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 48rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #FFFFFF;
	}

	.box {
		position: absolute;
		left: 32rpx;
		top: 406rpx;
		width: 686rpx;
		height: 428rpx;
		border-radius: 30rpx;
		background: #FFFFFF;
		box-shadow: 0px 8rpx 20rpx 0px rgba(0, 0, 0, 0.1);

		.box-1 {
			position: absolute;
			width: 610rpx;
			height: 40rpx;
			left: 42rpx;
			top: 54rpx;

			.box-1-icon {
				position: absolute;
				width: 40rpx;
				height: 40rpx;
			}

			.box-1-text {
				position: absolute;
				left: 72rpx;
				top: 0px;
				// font-family: SourceHanSansCN;
				font-size: 30rpx;
				font-weight: normal;
				letter-spacing: 0em;
				color: #3D3D3D;
			}

			.box-1-image {
				position: absolute;
				left: 578rpx;
				top: 4rpx;
				width: 32rpx;
				height: 32rpx;
				opacity: 0.5;
			}
		}

		.box-2 {
			position: absolute;
			left: 44rpx;
			top: 148rpx;
			width: 606rpx;
			height: 40rpx;

			.box-2-icon {
				position: absolute;
				left: 0px;
				top: 4rpx;
				width: 32rpx;
				height: 32rpx;
			}

			.box-2-text {
				position: absolute;
				left: 68rpx;
				top: 0px;
				font-family: SourceHanSansCN-Regular;
				font-size: 30rpx;
				font-weight: normal;
				letter-spacing: 0em;
				color: #3D3D3D;
			}

			.box-2-image {
				position: absolute;
				left: 574rpx;
				top: 8rpx;
				width: 32rpx;
				height: 32rpx;
				opacity: 0.5;
			}
		}

		.box-3 {
			position: absolute;
			left: 44rpx;
			top: 242rpx;
			width: 606rpx;
			height: 40rpx;

			.box-3-icon {
				position: absolute;
				left: 0px;
				top: 8rpx;
				width: 32rpx;
				height: 32rpx;
			}

			.box-3-text {
				position: absolute;
				left: 68rpx;
				top: 0px;
				font-family: SourceHanSansCN-Regular;
				font-size: 30rpx;
				font-weight: normal;
				letter-spacing: 0em;
				color: #3D3D3D;
			}

			.box-3-image {
				position: absolute;
				left: 574rpx;
				top: 0px;
				width: 32rpx;
				height: 32rpx;
				opacity: 0.5;
			}
		}

		.box-4 {
			position: absolute;
			left: 44rpx;
			top: 336rpx;
			width: 606rpx;
			height: 40rpx;

			.box-4-icon {
				position: absolute;
				left: 0px;
				top: 4rpx;
				width: 32rpx;
				height: 31.18rpx;
			}

			.box-4-text {
				position: absolute;
				left: 68rpx;
				top: 0px;
				font-family: SourceHanSansCN-Regular;
				font-size: 28rpx;
				font-weight: normal;
				letter-spacing: 0em;
				color: #3D3D3D;
			}

			.box-4-image {
				position: absolute;
				left: 574rpx;
				top: 0px;
				width: 32rpx;
				height: 32rpx;
				opacity: 0.5;
			}
		}
	}

	.but-end {
		position: absolute;
		left: 50rpx;
		top: 90%;
		width: 652rpx;
		height: 92rpx;
		border-radius: 60rpx;
		background: #FFFFFF;
		box-shadow: 0px 8rpx 20rpx 0px rgba(0, 0, 0, 0.1);
	}

	.but-text {
		position: absolute;
		left: 298rpx;
		top: 26rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 28rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
	}
</style>
