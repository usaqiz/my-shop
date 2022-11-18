<template>
	<view class="contact">
		<image class="img" src="../../static/2.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话: 450444444466</view>
			<view>联系地址:浙江城杭州市</view>
		</view>
		<map class="map" :longitude="longitude" :scale="sclac" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:120.363172,
				latitude:30.312212,
				sclac:13,
				markers:[
					{
						longitude:120.363172,
						latitude:30.312212,
						iconPath:'./../static/hmlogo.png',
						wdith:30,
						height:30
					}
				]
				
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:"22312321321321"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 360rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
