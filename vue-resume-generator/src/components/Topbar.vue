<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">Resumer</span>

			<div class="actions">
				<button class="primary">保存</button>
				<button>预览</button>
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		name:'Topbar'
	}
</script>

<style lang="stylus">
	#topbar
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
		
		>.wrapper
			height: 64px;
			max-width: 1440px;
			min-width: 1024px;
			margin: 0 auto;
		
		>.wrapper
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16px;
		
			.logo
				font-size: 24px;
				color: #000;
			
			button
				background:#ddd;
				width:72px;
				height:32px;
				font-family:STHeitiSC-Light;
				font-size:18px;
				color:#222;
				border:none;
				cursor: pointer;
				outline:none;
				transition: all .2s;

				&:hover	
					box-shadow:	1px 1px 1px hsla(0,0,0,0.5)
				&.primary
					background:#02af5f; 
					color: white;
					

	
</style>