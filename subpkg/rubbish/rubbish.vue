<template>
	<view>
		<uni-search-bar @confirm="search" @input="input" clearButton="none" cancelButton="none"></uni-search-bar>
		<image src="../../static/home/d.jpg" style="width: 750rpx; height: 1142rpx;"></image>
		<image src="../../static/home/b.jpg"></image>
		<image src="../../static/home/a.jpg"></image>
		<image src="../../static/home/c.jpg"></image>
		<image src="../../static/home/e.jpg" style="height: 692rpx;"></image>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="info" message="成功消息" :duration="2000">
				{{rubbishName}}为:{{rubbishType.aim.goodsType}}
				<p></p>
				{{rubbishType.recommendList[1].goodsName}}为:{{rubbishType.recommendList[1].goodsType}}
				<p></p>
				{{rubbishType.recommendList[2].goodsName}}为:{{rubbishType.recommendList[2].goodsType}}
			</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rubbishType: {
					aim: {
						goodsType: '',
					},
					recommendList: [{
							goodsName: '',
							goodsType: ''
						},
						{
							goodsName: '',
							goodsType: ''
						},
						{
							goodsName: '',
							goodsType: ''
						}
					]
				},
				rubbishName: ''
			}
		},
		onLoad(option) {

		},
		methods: {
			search(res) {
				const rubbishName = res.value
				this.rubbishName = res.value
				this.getRubbish(rubbishName)
			},
			async getRubbish(rubbishName) {
				const {
					data: res
				} = await uni.$http.get(
					`https://www.mxnzp.com/api/rubbish/type?name=${rubbishName}&app_id=oajlnynotujmrmzi&app_secret=UGxuVkdNVXdjWWNrUE9UdSs1UlRVdz09`
				)
				console.log(res);
				// if (res.meta.status != 200) return uni.$showMsg()
				this.rubbishType = res.data
				this.$refs.popup.open('center')
			},
			input(res) {
				// console.log('----input:', res)
			},
		}
	}
</script>

<style lang="scss">
	image {
		width: 750rpx;
		height: 824rpx;
	}
</style>
