<template>
	<view style="background-color: white;width: 750rpx; height: 2000rpx;">
		<image src="../../static/home/bg.png" class="bg"></image>
		<view class="top">
			<image src="../../static/home/weizhi.png" class="dingwei"></image>
			<text class="title">{{address}}</text>
			<image src="../../static/home/shangxiaqiehuan.png" class="qiehuan"></image>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1000">
			<!-- v-for="item in swiperList" :key="item.id" -->
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/home/swiper1.png" style="width: 688rpx;height: 240rpx;"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/home/swiper2.png" style="width: 688rpx;height: 240rpx;"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/home/swiper3.png" style="width: 688rpx;height: 240rpx;"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="centre">
			<view class="aaa">
				<image src="../../static/home/2.png" class="icon"></image>
				<text class="wen">数据采集</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/7.png" class="icon"></image>
				<text class="wen">在线预审</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/8.png" class="icon"></image>
				<text class="wen">志愿服务</text>
			</view>
			<view class="aaa" style="margin-right: 0rpx;">
				<image src="../../static/home/3.png" class="icon"></image>
				<text class="wen">垃圾分类</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/4.png" class="icon"></image>
				<text class="wen">失物招领</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/1.png" class="icon"></image>
				<text class="wen">办事指南</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/5.png" class="icon"></image>
				<text class="wen">万能电话</text>
			</view>
			<view class="aaa" style="margin-right: 0rpx;">
				<image src="../../static/home/6.png" class="icon"></image>
				<text class="wen">意见反馈</text>
			</view>
		</view>
		<view class="down">
			<text class="gonggao">公告</text>
			<text class="toupiao">投票</text>
			<view class="ase"></view>
			<view class="gonggao-1">
				<text class="gonggao-1-text">{{title}}</text>
				<image src="../../static/home/zhiding.png" class="zhiding"></image>
				<text class="time">{{time}}</text>
			</view>
			<view class="gonggao-1" style="top: 985rpx;">
				<text class="gonggao-1-text">{{title2}}</text>
				<image src="../../static/home/pingtai.png" class="zhiding"></image>
				<text class="time">{{time}}</text>
			</view>
			<view class="gonggao-1" style="top: 1137rpx;">
				<text class="gonggao-1-text">{{title2}}</text>
				<image src="../../static/home/pingtai.png" class="zhiding"></image>
				<text class="time">{{time}}</text>
			</view>
			<view class="gonggao-1" style="top: 1285rpx;">
				<text class="gonggao-1-text">{{title2}}</text>
				<image src="../../static/home/pingtai.png" class="zhiding"></image>
				<text class="time">{{time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],
				address: '南昌路社区',
				title: "希望业主做好生活垃圾定点投放的倡议",
				time: '2022-07-11 13:21:42',
				title2: "关于小程序平台维护通知",
			};
		},
		onLoad() {
			this.getSwiperList()
		},
		methods: {
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/api/swiper')
				console.log(res.List);
				// if (res.meta.status != 200) return uni.$showMsg()
				this.swiperList = res.List
			},
		}
	}
</script>

<style lang="scss">
	.bg {
		width: 750rpx;
		height: 268rpx;
	}

	.dingwei {
		position: absolute;
		left: 18rpx;
		top: 98rpx;
		width: 64rpx;
		height: 64rpx;
	}

	.title {
		position: absolute;
		left: 82rpx;
		top: 108rpx;
		width: 240rpx;
		height: 44rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 28rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
	}

	.qiehuan {
		position: absolute;
		left: 230rpx;
		top: 114rpx;
		width: 32rpx;
		height: 32rpx;
	}

	swiper {
		position: absolute;
		left: 32rpx;
		top: 180rpx;
		width: 688rpx;
		height: 240rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}

	.centre {
		display: flex;
		width: 668rpx;
		height: 286rpx;
		flex-wrap: wrap;
		justify-content: space-between;

		position: absolute;
		left: 38rpx;
		top: 448rpx;
	}

	.icon {
		width: 64rpx;
		height: 64rpx;
	}

	.wen {
		width: 118rpx;
		height: 50rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 28rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
		padding-top: 15rpx;
	}

	.aaa {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-right: 30rpx;
	}

	.gonggao {
		position: absolute;
		left: 42rpx;
		top: 745rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 36rpx;
		font-weight: 550;
		letter-spacing: 0em;
		color: #3D3D3D;
		box-sizing: border-box;
	}

	.toupiao {
		position: absolute;
		left: 185rpx;
		top: 750rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 30rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
	}

	.ase {
		position: absolute;
		left: 44rpx;
		top: 795rpx;
		width: 66rpx;
		height: 12rpx;
		background: #98C8EE;
	}

	.gonggao-1 {
		position: absolute;
		left: 20rpx;
		top: 834rpx;
		width: 712rpx;
		height: 140rpx;
		border-radius: 24rpx;
		background: rgba(0, 0, 0, 0.03);
	}

	.gonggao-1-text {
		position: absolute;
		left: 28rpx;
		top: 24rpx;
		width: 476rpx;
		height: 40rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 28rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
	}

	.zhiding {
		position: absolute;
		left: 28rpx;
		top: 84rpx;
		width: 52rpx;
		height: 23.84rpx;
		border-radius: 4rpx;
		background: #F4AC38;
	}

	.time {
		position: absolute;
		left: 102rpx;
		top: 82rpx;
		width: 188rpx;
		height: 28rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 20rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: rgba(61, 61, 61, 0.7);
	}
</style>
