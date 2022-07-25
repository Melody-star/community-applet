<template>
	<view>
		<uni-search-bar @confirm="search" @input="input" clearButton="none" cancelButton="none"></uni-search-bar>
		<view class="scroll-view-container">
			<!-- 左侧滑动区 -->
			<scroll-view class="left-scroll-view" scroll-y="true" :style="{height:wh-56 + 'px'}">
				<block v-for="(item, i) in cateList" :key="i">
					<view class="left-scroll-view-item" :class="['left-scroll-view-item', i === active ? 'active' : '']"
						@click="activeChanged(i)">{{item.cat_name}}</view>
				</block>
			</scroll-view>
			<!-- 右侧滑动区 -->
			<scroll-view scroll-y="true" :style="{height:wh-56 + 'px'}" :scroll-top="scrollTop">
				<navigator class="cate-lv2" v-for="(item2, i2) in cateLevel2" :key="i2"
					url="/subpkg/my-guide-detail/my-guide-detail">
					<view class="cate-lv2-title">
						{{item2.cat_name}}
					</view>
					<image class="cate-lv2-img" src="../../static/home/more.png" mode=""></image>
				</navigator>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				wh: 0,
				cateLevel2: [{
					"cat_name": "残疾人证补领"
				}, {
					"cat_name": "残疾人证变更"
				}, {
					"cat_name": "就业政策法规咨询"
				}, {
					"cat_name": "残疾人家庭无障碍改造服务"
				}, {
					"cat_name": "居民健康档案管理"
				}],
				active: 0,
				cateList: [{
					"cat_name": "社会保障",
					"children": [{
						"cat_name": "残疾人证补领"
					}, {
						"cat_name": "残疾人证变更"
					}, {
						"cat_name": "就业政策法规咨询"
					}, {
						"cat_name": "残疾人家庭无障碍改造服务"
					}, {
						"cat_name": "居民健康档案管理"
					}]
				}, {
					"cat_name": "医保服务",
					"children": [{
						"cat_name": "城乡居民医保个人参保登记"
					}]
				}, {
					"cat_name": "卫生健康",
					"children": [{
						"cat_name": "办理"
					}]
				}, {
					"cat_name": "户政服务",
					"children": [{
						"cat_name": "办理"
					}]
				}, {
					"cat_name": "档案服务",
					"children": [{
						"cat_name": "退役军人信息采集"
					}]
				}, {
					"cat_name": "职业资格",
					"children": [{
						"cat_name": "办理"
					}]
				}, {
					"cat_name": "住房服务",
					"children": [{
						"cat_name": "办理"
					}]
				}],
			};
		},
		onLoad() {
			// 获取当前系统的信息
			const sysInfo = uni.getSystemInfoSync()
			// 为 wh 窗口可用高度动态赋值
			this.wh = sysInfo.windowHeight
		},
		methods: {
			activeChanged(i) {
				this.active = i
				this.cateLevel2 = this.cateList[i].children
				this.scrollTop = this.scrollTop === 0 ? 1 : 0
			},
			search(res) {
				uni.showToast({
					title: '',
					icon: 'none'
				})
			},
			input(res) {
				// console.log('----input:', res)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cate-lv2-title {
		font-size: 24rpx;
		padding: 30rpx 0;
		padding-left: 20rpx;
		border-bottom: 0.1px solid #D8D8D8;
	}

	.cate-lv2-img {
		height: 10px;
		width: 10px;
		position: absolute;
		top: 32rpx;
		right: 37rpx;
	}

	.cate-lv2 {
		position: relative;
	}

	.scroll-view-container {
		display: flex;

		.left-scroll-view {
			width: 120px;

			.left-scroll-view-item {
				line-height: 120rpx;
				background-color: #f7f7f7;
				text-align: center;
				font-size: 24rpx;

				// 激活项的样式
				&.active {
					background-color: #ffffff;
					position: relative;

					// 渲染激活项左侧的红色指示边线
					&::before {
						content: ' ';
						display: block;
						width: 6rpx;
						height: 60rpx;
						background-color: #99C9EF;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}
		}
	}
</style>
