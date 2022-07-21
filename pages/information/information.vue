<template>
	<view>
		<!-- 		<view class="card" v-for="item in newsList" :key="item.id">
			<text class="card-title">{{item.title}}</text>
			<text class="card-author">{{item.author}}</text>
			<text class="card-time">{{item.time}}</text>
			<image :src="item.imgUrl"></image>
		</view> -->

	</view>
</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		newsList: [],
		// 		items: ['选项1', '选项2', '选项3'],
		// 		current: 0
		// 	};
		// },
		// onLoad() {
		// 	// this.getnewsList()
		// },
		// methods: {
		// 	async getnewsList() {
		// 		const {
		// 			data: res
		// 		} = await uni.$http.get('https://example.com/api/news')
		// 		// if (res.meta.status != 200) return uni.$showMsg()
		// 		this.newsList = res.List
		// 		console.log(this.newsList);
		// 	},
		// 	onClickItem(e) {
		// 		if (this.current != e.currentIndex) {
		// 			this.current = e.currentIndex;
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss">

</style>
