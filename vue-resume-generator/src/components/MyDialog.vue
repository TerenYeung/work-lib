<template>
	<div class="wrapper" v-show="visible">
		<div class="dialog">
			<header>
				<span class="title">{{title}}</span>
				<span class="close" @click="close">X</span>
			</header>
			<main>
				<slot></slot>
			</main>
		</div>
	</div>
</template>

<script>
	export default {
		name:'MyDialog',
		props: [ 'title' , 'visible'],
		methods:{
			close(){
				this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper
		position fixed
		background rgba(0,0,0,.5)
		left 0
		top 0
		right 0
		bottom 0
		display flex
		justify-content center
		align-items center
	
		.dialog
			display flex
			flex-direction column
			width 25em
			height 10em
			background #fff
			// border 1px solid
			header
				display flex
				justify-content space-between
				padding 16px 
				border-bottom 1px solid #333
				
				.close:hover
					cursor pointer
			main
				height 100%
				// border 1px solid			
			
			
</style>