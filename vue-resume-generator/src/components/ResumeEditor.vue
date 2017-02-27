<template>
	<div id="resumeEditor">
	<!-- 	I am resumeEditor -->
		<nav>
			<ol>
				<li v-for="(item,index) in resume.config" :class="{active:item.field === selected}" @click="selected=item.field">
					<svg class="icon">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panels">
			<li v-for="item in resume.config" v-show="item.field===selected">


				<div v-if="resume[item.field] instanceof Array">
	
					<div class="subItem" v-for="subItem in resume[item.field]">
						<div class="resumeField" v-for="(value,key) in subItem">
							<label>{{key}}</label>
							<input type="text" v-model="subItem[key]" >
						</div>
						<hr>					
					</div>			
				</div>
				<div v-else>
					<div class="resumeField" v-for="(value,key) in resume[item.field]">
						<label>{{key}}</label>
						<input type="text" v-model="resume[item.field][key]">
					</div>	
				</div>
			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name:'ResumeEditor',
		computed: {
			selected:{
				get(){
					return this.$store.state.selected
				},
				set(val){
					return this.$store.commit('switchTab',val)
				}
			},
			resume(){
				return this.$store.state.resume
			}
		},
		methods: {
			add(){
				this.$store.commit('increment')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	#resumeEditor
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
		display: flex;
		
		ol
			list-style:none;

		nav
			background:#1f2126;
			width:80px;
			color:#fff;
			height 100%
				
			li
				height:48px;
				display:flex;
				justify-content:center;
				align-items:center;
				margin:16px 0;


				&.active
					background: #fff;
					color: #1f2126;
		
		>.panels
			flex-grow:1;
			overflow: auto;
			&::-webkit-scrollbar
				width 8px
			&::-webkit-scrollbar-track
				background-color #eee
				-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,.1)
			&::-webkit-scrollbar-thumb
				height 5px
				border-radius 5px
				background-color #ccc			
			>li
				padding: 24px;
	.resumeField
		
		>label
			display: block;
		
		input[type=text]
				width: 100%;
				height: 40px;
				margin: 16px 0;
				padding: 0 8px;
				border: 1px solid #ddd;
				box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25)
	
	hr
		border: none;
		border-top: 1px solid #ddd;
		margin: 24px 0;
				
</style>