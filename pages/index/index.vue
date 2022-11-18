<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in nav" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goGoodsDetail="goGoodsDetails" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				swipers:[],
				goods:[],
				nav:[
					{
						icon: 'iconfont icon-ziyuan',
						title:'黑暗超市',
						path:'/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			//获取轮播图的是数据
			async getSwipers(){
				const res = await this.$myRuquest({
					url:'/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			//获取热门上票列表数据
			async getHotGoods(){
			  const	res = await this.$myRuquest({
				  url:'/api/getgoods?pageindex=1'
			  })
			  this.goods = res.data.message
			},
			//导航惦记的处理函数
			navItemClick(url){
				console.log(url)
				uni.navigateTo({
					url
				})
			},
			//跳转到导航详情页
			goGoodsDetails(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
 .home{
	 swiper{
		 width: 750rpx;
		 height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
	 }
	 .nav{
		 display: flex;
		 .nav_item{
			 width: 25%;
			 text-align: center;
			 view{
				 width: 120rpx;
				 height: 120rpx;
				 background: $shop-color;
				 border-radius:60rpx;
				 margin: 10px auto;
				 line-height: 120rpx;
				 color: #fff;
				 font-size: 50rpx;
			 }
			 .icon-tupian{
				 font-size: 45rpx;
			 }
			 text{
				 font-size: 30rpx;
				 
			 }
		 }
	 }
	.hot_goods{
		background: #eee;
		overflow: hidden;
		margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color ;
			text-align: center;
			background: #fff;
			margin: 10rpx 0;
		}
		.goods_list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods_item{
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150rpx;
					margin: 0 auto;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: $shop-color;
					font-size: 36rpx;
					margin:18rpx 0 5rpx 0;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						text-decoration: line-through;
					}
				}
			}
			.good_name{
				font-size: 28rpx;
				line-height: 50rpx;
			}
		}
	}
 }
</style>
