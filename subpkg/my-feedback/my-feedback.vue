<template>
	<view>
		<view class="box">
			<text class="box-title">反馈描述</text>
			<uni-easyinput class='box-input' v-model="value" placeholder="请输入您的意见或遇到的问题~" type="textarea" autoHeight
				:inputBorder="false" maxlength="300" placeholderStyle="font-size:24rpx" @input="input">
			</uni-easyinput>
			<text class="count">{{valueNum}}/300</text>
		</view>
		<view class="box2">
			<text class="box2-title">联系方式</text>
			<uni-easyinput class='box2-input' :inputBorder="false" maxlength="11" v-model="value1"
				placeholder="请输入你的联系方式"></uni-easyinput>
		</view>
		<button class="but" @click="submit">提交反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				valueNum: 0,
				value1: ''
			};
		},
		methods: {
			input(e) {
				this.valueNum = e.length
			},
			async submit() {
				var submitValue = {
					"des": this.value,
					"tel": this.value1,
				}
				const {
					data: res
				} = await uni.$http.post('/feedback', submitValue)
				console.log(res);
				if (res.data == '保存成功') {
					uni.$showMsg('提交成功！')
				} else {
					uni.$showMsg('提交失败')
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.but {
		position: absolute;
		top: 90%;
		width: 698rpx;
		height: 90rpx;
		border-radius: 16rpx;
		background: #FFFFFF;
		left: 26rpx;
		font-size: 28rpx;
		font-family: SourceHanSansCN-Regular;
	}

	.box {
		position: absolute;
		left: 26rpx;
		top: 30rpx;
		width: 698rpx;
		height: 542rpx;
		border-radius: 16rpx;
		background: #FFFFFF;

		.box-input {
			position: absolute;
			left: 50rpx;
			top: 90rpx;
			width: 616rpx;
		}

		.box-title {
			position: absolute;
			left: 50rpx;
			top: 42rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 36rpx;
			font-weight: normal;
			line-height: 34rpx;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.count {
			position: absolute;
			left: 598rpx;
			top: 464rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 24rpx;
			font-weight: normal;
			line-height: 34rpx;
			letter-spacing: 0em;
			color: rgba(61, 61, 61, 0.6);
		}
	}

	.box2 {
		position: absolute;
		left: 26rpx;
		top: 590rpx;
		width: 698rpx;
		height: 90rpx;
		border-radius: 16rpx;
		background: #FFFFFF;

		.box2-title {
			position: absolute;
			left: 28rpx;
			top: 28rpx;
			width: 112rpx;
			height: 34rpx;
			font-family: SourceHanSansCN-Regular;
			font-size: 28rpx;
			font-weight: normal;
			line-height: 34rpx;
			letter-spacing: 0em;
			color: #3D3D3D;
		}

		.box2-input {
			position: absolute;
			left: 380rpx;
			top: 4rpx;
			height: 34rpx;
		}
	}
</style>
