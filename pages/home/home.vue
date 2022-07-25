<template>
	<view>
		<image src="../../static/home/bg.png" class="bg"></image>
		<view class="top">
			<image src="../../static/home/weizhi.png" class="dingwei"></image>
			<navigator url="/subpkg/community/community" open-type="navigate" class="title">{{address}}</navigator>
			<image src="../../static/home/shangxiaqiehuan.png" class="qiehuan"></image>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="4000" :duration="1000">
			<swiper-item v-for="item in swiperList" :key="item.id">
				<view class="swiper-item">
					<image :src="item.name" style="width: 688rpx;height: 240rpx;"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="centre">
			<navigator class="aaa" url="/subpkg/collect/collect" open-type="navigate">
				<image src="../../static/home/2.png" class="icon"></image>
				<text class="wen">数据采集</text>
			</navigator>
			<view class="aaa">
				<image src="../../static/home/7.png" class="icon"></image>
				<text class="wen">在线预审</text>
			</view>
			<view class="aaa">
				<image src="../../static/home/8.png" class="icon"></image>
				<text class="wen">志愿服务</text>
			</view>
			<navigator class="aaa" style="margin-right: 0rpx;" url="/subpkg/rubbish/rubbish" open-type="navigate">
				<image src="../../static/home/3.png" class="icon"></image>
				<text class="wen">垃圾分类</text>
			</navigator>
			<view class="aaa">
				<image src="../../static/home/4.png" class="icon"></image>
				<text class="wen">失物招领</text>
			</view>
			<navigator class="aaa" url="/subpkg/my-guide/my-guide" open-type="navigate">
				<image src="../../static/home/1.png" class="icon"></image>
				<text class="wen">办事指南</text>
			</navigator>
			<view class="aaa">
				<image src="../../static/home/5.png" class="icon"></image>
				<text class="wen">万能电话</text>
			</view>
			<navigator url="/subpkg/home-feedbck/home-feedbck" class="aaa" style="margin-right: 0rpx;">
				<image src="../../static/home/6.png" class="icon"></image>
				<text class="wen">社区反馈</text>
			</navigator>
		</view>
		<view class="down">
			<view class="down-top">
				<text v-if="current === 0" class="gonggao gonggao-toupiao active" @click="onClickItem2">公告</text>
				<text v-else class="gonggao gonggao-toupiao" @click="onClickItem2">公告</text>
				<text v-if="current === 1" class="toupiao gonggao-toupiao active" @click="onClickItem1">投票</text>
				<text v-else class="toupiao gonggao-toupiao " @click="onClickItem1">投票</text>
			</view>
			<view class="content">
				<view v-show="current === 0">
					<view class="gonggaoaa">
						<view class="gonggao-1" v-for="item in homeNotice" :key="item.id">
							<text class="gonggao-1-text">{{item.name}}</text>
							<image v-show="item.admin==0" src="../../static/home/zhiding.png" class="zhiding"></image>
							<image v-show="item.admin==1" src="../../static/home/pingtai.png" class="zhiding"></image>
							<text v-if="item.admin==2" class="time"
								style="top: 100rpx;left: 30rpx;">{{item.createTime}}</text>
							<text v-else class="time">{{item.createTime}}</text>
							<text class="notice-more" style="color: rgba(61, 61, 61, 0.5);">更多</text>
							<image class="notice-more-icon" src="/static/home/more.png"></image>
						</view>
					</view>
				</view>
				<view v-show="current === 1" class="gonggaoaa">
					<view class="vote-item" v-for="item in voteList" :key="item.id">
						<image src="../../static/home/toupiao.png" class="vote-item-icon"></image>
						<text class="vote-item-title">{{item.title}}</text>
						<text class="vote-item-time">{{item.isData+" 至 "+item.endTime}}</text>
						<text class="notice-more" style="color: rgba(61, 61, 61, 0.5);">更多</text>
						<image class="notice-more-icon" src="/static/home/more.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],
				homeNotice: [],
				voteList: [],
				address: '南昌路社区',
				items: ['公告', '投票'],
				current: 0
			};
		},
		onLoad() {
			this.getSwiperList(),
				this.getHomeNotice(),
				this.getvoteList()
		},
		methods: {
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/api/swiper')
				// if (res.meta.status != 200) return uni.$showMsg()
				this.swiperList = res.data
			},
			async getHomeNotice() {
				const {
					data: res
				} = await uni.$http.get('/announce')
				// if (res.meta.status != 200) return uni.$showMsg()
				this.homeNotice = res.data
			},
			async getvoteList() {
				const {
					data: res
				} = await uni.$http.get('/vote?name=&id=1')
				// if (res.meta.status != 200) return uni.$showMsg()
				this.voteList = res.data
				console.log(this.voteList);
			},
			onClickItem1() {
				this.current = 1;
			},
			onClickItem2() {
				this.current = 0;
			}
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
		top: 103rpx;
		width: 240rpx;
		height: 44rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 35rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
	}

	.qiehuan {
		position: absolute;
		left: 254rpx;
		top: 111rpx;
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

	.down-top {
		position: absolute;
		left: 42rpx;
		top: 740rpx;
	}

	.gonggao {
		&.active {
			font-size: 36rpx;
			font-weight: 550;
			border-bottom: 10rpx solid #98C8EE;
			padding-bottom: 5rpx;
		}
	}

	.gonggao-toupiao {
		font-family: SourceHanSansCN-Regular;
		font-size: 30rpx;
		font-weight: normal;
		letter-spacing: 0em;
		color: #3D3D3D;
		box-sizing: border-box;
	}

	.toupiao {
		margin-left: 71rpx;

		&.active {
			font-size: 36rpx;
			font-weight: 550;
			border-bottom: 10rpx solid #98C8EE;
		}
	}

	.gonggao-1 {
		position: relative;
		width: 712rpx;
		height: 140rpx;
		border-radius: 24rpx;
		background: rgba(0, 0, 0, 0.03);
		margin-bottom: 20rpx;
	}

	.gonggao-1-text {
		position: absolute;
		left: 28rpx;
		top: 24rpx;
		width: 570rpx;
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

	.gonggaoaa {
		position: absolute;
		left: 20rpx;
		top: 834rpx;
		display: flex;
		flex-direction: column;
	}

	.vote-item {
		position: relative;
		width: 712rpx;
		height: 140rpx;
		border-radius: 24rpx;
		background: rgba(0, 0, 0, 0.03);
		margin-bottom: 20rpx;
	}

	.vote-item-icon {
		position: absolute;
		top: 25rpx;
		left: 26rpx;
		width: 32rpx;
		height: 32rpx;
	}

	.vote-item-title {
		position: absolute;
		top: 24rpx;
		left: 70rpx;
		width: 666rpx;
		font-size: 28rpx;
	}

	.vote-item-time {
		position: absolute;
		top: 88rpx;
		left: 31rpx;
		font-size: 23rpx;
	}

	.notice-more {
		position: absolute;
		left: 613rpx;
		top: 24rpx;
		font-family: SourceHanSansCN-Regular;
		font-size: 24rpx;
		font-weight: normal;
		letter-spacing: 0em;
	}

	.notice-more-icon {
		width: 24rpx;
		height: 24rpx;
		position: absolute;
		top: 31rpx;
		left: 661rpx;
	}
</style>
