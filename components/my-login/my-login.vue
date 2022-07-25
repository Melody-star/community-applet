<template>
	<view class="login-container">
		<image src="../../static/my/user.png" class="icon-head"></image>
		<!-- 登录按钮 -->
		<button type="primary" class="btn-login" @click="getUserInfo">一键登录</button>
		<!-- 登录提示 -->
		<view class="tips-text">登录后尽享更多权益</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'

	export default {
		name: "my-login",
		data() {
			return {

			};
		},
		methods: {
			...mapMutations(['updateUserInfo', 'updateToken']),
			getUserInfo() {
				uni.getUserProfile({
					desc: "仅用作登录功能",
					success: (res) => {
						// console.log(res);
						this.updateUserInfo(res.userInfo)
						this.getToken(res)
					},
					fail: () => {
						uni.$showMsg('您取消了登录授权！')
					}
				})
			},
			async getToken(info) {
				const res = await uni.login().catch(err => err)
				if (res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
				// const query = {
				// 	code: res.code,
				// 	encryptedData: info.encryptedData,
				// 	iv: info.iv,
				// 	rawData: info.rawData,
				// 	signature: info.signature
				// }

				const {
					data: loginResult
				} =
				await uni.$http.post(`/wx/login?code=${res.code}`)

				if (loginResult.code !== 1) return uni.$showMsg('登录失败！')

				this.updateToken(loginResult.data.ticket)
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子的样式
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;

		// 登录按钮的样式
		.btn-login {
			width: 80%;
			border-radius: 50rpx;
			margin-top: 200rpx;
			margin-bottom: 60rpx;
			background-color: #99C9EF;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 24rpx;
			color: gray;
		}

		.icon-head {
			height: 200rpx;
			width: 200rpx;
			margin-top: 330rpx;
		}

	}
</style>
