<template>
	<view>
		<uni-collapse accordion>
			<uni-collapse-item title="登录失败怎么办？" :open="true">
				<view class="content">
					<text class="text">登录失败请先检查网络是否通畅，再退出小程序重新打开再登录，如还不能登录请联系客服处理。</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="客服不回复怎么办？">
				<view class="content">
					<text class="text">因小程序团队人员有限如客服没有回复请耐心等待，看到会第一时间回复，请谅解。</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="万能电话打不通怎么办？">
				<view class="content">
					<text class="text">万能电话由社区工作人员维护，如遇打不通建议稍后再试或在社区反馈提交。</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="为什么没有我所在的社区">
				<view class="content">
					<text class="text">社区入驻需要社区工作人员与我们联系。</text>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="社区反馈为啥没用？">
				<view class="content">
					<text class="text">社区反馈是由社区工作人员维护，可能是社区工作人员没有及时关注信息。</text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
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

<style lang="scss" scoped>
	.content {
		padding: 30rpx;
	}
</style>
