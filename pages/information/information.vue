<template>
	<view style="position: relative;">
		<view class="top-nav">
			<view v-if="current === 0" class="top-title top-mark" @click="onClickItem2">综合</view>
			<view v-else class="top-title" @click="onClickItem2">综合</view>

			<view v-if="current === 1" class="top-title top-mark" @click="onClickItem1">活动</view>
			<view v-else class="top-title" @click="onClickItem1">活动</view>

			<view v-if="current === 2" class="top-title top-mark" @click="onClickItem2">政策</view>
			<view v-else class="top-title" @click="onClickItem3">政策</view>

			<view v-if="current === 3" class="top-title top-mark" @click="onClickItem2">社区通知</view>
			<view v-else class="top-title" @click="onClickItem4">社区通知</view>

			<view v-if="current === 4" class="top-title top-mark" @click="onClickItem2">党建宣传</view>
			<view v-else class="top-title" @click="onClickItem5">党建宣传</view>
		</view>
		<view class="cut"></view>

		<view class="centre1" v-for="item in articleList" :key="item.id">
			<inf-one v-if="item.kind === 1" :articleList1="articleList1"></inf-one>
			<inf-two v-if="item.kind === 2" :articleList2="articleList2"></inf-two>
			<inf-three v-if="item.kind === 3" :articleList3="articleList3"></inf-three>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				articleList: [],
				articleList1: [],
				articleList2: [],
				articleList3: []
			};
		},
		onLoad() {
			this.getarticleList()
		},
		methods: {
			async getarticleList() {
				const {
					data: res
				} = await uni.$http.get('/message?name=&type=&kind=')
				this.articleList = res.data

				for (let i = 0; i < this.articleList.length; i++) {
					if (this.articleList[i].kind === 1) {
						this.articleList1[i] = this.articleList[i]
					}
					if (this.articleList[i].kind === 73) {
						this.articleList2[i] = this.articleList[i]
					}
					if (this.articleList[i].kind === 3) {
						this.articleList3[i] = this.articleList[i]
					}
				}
			},
			onClickItem1() {
				this.current = 1;
			},
			onClickItem2() {
				this.current = 0;
			},
			onClickItem3() {
				this.current = 2;
			},
			onClickItem4() {
				this.current = 3;
			},
			onClickItem5() {
				this.current = 4;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-nav {
		position: relative;
		left: 22rpx;
		top: 16rpx;
		width: 552rpx;
		height: 63rpx;
		display: flex;
		justify-content: space-around;

		.top-title {
			font-family: SourceHanSansCN-Regular;
			height: 40rpx;
			font-size: 28rpx;
			font-weight: normal;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.top-mark {
			padding-bottom: 2rpx;
			border-bottom: 4rpx solid #98C8EE;
		}
	}

	.cut {
		position: absolute;
		top: 74rpx;
		width: 750rpx;
		border: 0.6rpx solid #D8D8D8;
	}
</style>
