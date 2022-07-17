<template>
	<view>
		<uni-search-bar @confirm="search" @input="input" clearButton="none" cancelButton="none"></uni-search-bar>
		<view class="tips">
			<image class="bgImg" src="../../static/home/bgimg.png" mode=""></image>
			<text class="tips-text">没有更多社区...</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '抱歉！没有此社区',
					icon: 'none'
				})
			},
			input(res) {
				// console.log('----input:', res)
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.bgImg {
		width: 514rpx;
		height: 257rpx;
	}

	.tips {
		margin-top: 283rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.tips-text {
			font-size: 32rpx;
			color: rgba(61, 61, 61, 0.5);
		}
	}
</style>
