<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newList"></news-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newList:[]
			}
		},
		methods: {
			async getNewlist(){
				const res = await this.$myRuquest({
					url:'/api/getnewslist'
				})
				this.newList = res.data.message
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad(){
			this.getNewlist()
		}
	}
</script>

<style lang="scss">
</style>
