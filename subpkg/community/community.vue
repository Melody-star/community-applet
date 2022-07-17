<template>
	<view>
		<uni-search-bar @confirm="search" @input="input" clearButton="none" cancelButton="none"></uni-search-bar>
		<image class="bgImg" src="../../static/home/bgimg.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
</style>
