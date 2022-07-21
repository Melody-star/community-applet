import {
	createStore
} from 'vuex'

const store = createStore({
	state: {
		"token": uni.getStorageSync('token') || '',
		"userinfo": JSON.parse(uni.getStorageSync('userinfo') || '{}')
	},
	mutations: {
		updateUserInfo(state, userinfo) {
			state.userinfo = userinfo
			this.commit('saveUserInfoToStorge')
		},
		saveUserInfoToStorge(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},
		// 更新 token 字符串
		updateToken(state, token) {
			state.token = token
			// 通过 this.commit() 方法，调用 m_user 模块下的 saveTokenToStorage 方法，将 token 字符串持久化存储到本地
			this.commit('saveTokenToStorage')
		},

		// 将 token 字符串持久化存储到本地
		saveTokenToStorage(state) {
			uni.setStorageSync('token', state.token)
		}
	}
})

export default store
