<template>
	<view style="background: #eee;">
		<goods-list @goGoodsDetail="goGoodsDetails" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">------ 没有多余的商品了----------</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pagesIndex:1,
				goods:[],
				flag:false
			}
		},
		onLoad(){
			this.getHotGoods()
		},
		methods: {
			// 获取商品列标的数据
			async getHotGoods(callBack){
			  const	res = await this.$myRuquest({
				  url:'/api/getgoods?pageindex='+this.pagesIndex
			  })
			  this.goods = [...this.goods,...res.data.message]
			  callBack && callBack()
			},
			goGoodsDetails(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onReachBottom(){
			if(this.pagesIndex>=3) return this.flag = true
			this.pagesIndex++
			this.getHotGoods()
		},
		onPullDownRefresh(){
			this.pagesIndex = 1 
			this.goods=[]
			this.flag = false
			setInterval(()=>{
				this.getHotGoods(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
