<template>
		<view class="goods_list">
			<view  class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
				<!-- <image :src="item.img_url"></image> -->
				<image src="../../static/1.jpg"></image>
				<view class="price">
					<text>￥{{ item.sell_price}}</text>
					<text>￥{{ item.market_price}}</text>
				</view>
				<view class="good_name">
					{{ item.title }}
				</view>
			</view>
		</view>

</template>

<script>
	export default{
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit("goGoodsDetail",id)
			}
		}
	}
</script>

<style lang="scss">
	
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
	
</style>
