<template>
	<my-login v-if="!token"></my-login>
	<my-userinfo v-else></my-userinfo>
</template>

<script>
	import store from '../../store/store.js'
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				isshow: false,
			};
		},
		computed: {
			...mapState({
				token: 'token'
			})
		},
		onLoad() {
			// uni.checkSession({
			// 	success: function() {

			// 	},
			// 	fail: function() {

			// 	}
			// })
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.bgImg {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 750rpx;
		height: 554rpx;
	}
</style>
