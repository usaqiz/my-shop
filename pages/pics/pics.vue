<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftOnclick(index,item.id)"	
			:class="active === index ? 'active':''"  
			v-for="(item,index) in cates" 
			:key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="">
			<view class="item" v-for="(item,index) in secondData" :key="item.id">
				<!-- <image :src="item.img_url"></image> -->
				<image @click="preViewImg(item.img_url)" src="../../static/2.jpg"></image> 
				<text>{{item.zhaiyao}}</text>
			</view>
			<view v-if="secondData.length ===0">
				暂时无数据
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getPicsCate(){
			const res= await this.$myRuquest({
					url:'/api/getimgcategory'
			})
			this.cates = res.data.message
			this.leftOnclick(0,this.cates[0].id)
			},
			async leftOnclick(index,id){
				this.active = index
				const res = await this.$myRuquest({
					url:'/api/getimages/'+id
				})
				this.secondData = res.data.message
			},
			preViewImg(current){
				const urls = this.secondData.map(item =>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad(){
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
		.right{
			right: 520rpx;
			height: 100%;
			margin: 10px auto;
			padding: 10px;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
					display: block;
					margin: 0 auto;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
		view{
			
		}
	}
</style>
