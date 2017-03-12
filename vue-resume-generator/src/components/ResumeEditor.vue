<template>
	<div id="resumeEditor">
	<!-- 	I am resumeEditor -->
		<nav>
			<ol>
				<li v-for="(item,index) in resumeConfig" :class="{active:item.field === selected}" @click="selected=item.field">
					<svg class="icon">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panels">
			<li v-for="item in resumeConfig" v-show="item.field===selected">
				<div v-if="item.type === 'array'">
					<div class="subItem" v-for="(subItem,arrIndex) in resume[item.field]">
						<div class="resumeField" v-for="(value,key) in subItem">
							<label>{{key}}</label>
							<!-- <input type="text" :value="value" @input="changeData(item.field,arrIndex,key,$event.target.value)"> -->
							<input type="text" :value="value" @input="changeData(`${item.field}.${arrIndex}.${key}`,$event.target.value)">
						</div>
						<div class="removeItem" @click="removeItem(item.field,arrIndex)"></div>
						<hr>					
					</div>			
				</div>
				<div v-else>
					<div class="resumeField" v-for="(value,key) in resume[item.field]">
						<label>{{key}}</label>
						<!-- <input type="text" :value="value" @input="changeData(item.field,null,key,$event.target.value)"> -->
						<input type="text" :value="value" @input="changeData(`${item.field}.${key}`,$event.target.value)">
					</div>	
				</div>
				<div class="addItem" v-show="item.field!=='profile'" @click="addItem(item.field)"></div>				
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
			},
			resumeConfig(){
				return this.$store.state.resumeConfig
			}			
		},
		methods: {
			// changeData(field,index,key,value){
			// 	// console.log(field,index,key,value)
			// 	this.$store.commit('changeData',{field,index,key,value})
			// },
			changeData(path,value){
				this.$store.commit('changeData',{path,value})
			},
			addItem(field){
				this.$store.commit('addItem',field)
			},
			removeItem(field,index){
				this.$store.commit('removeItem',{field,index})
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
			.subItem
				position relative
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
	.addItem
		width 30px
		height 30px
		border-radius 50%
		border 2px solid #333
		position relative
		margin 0 auto
		&::before
			content ''
			width 20px
			height 4px
			background #333
			display block
			position absolute
			top 11px
			left 3px
			border-radius 3px
		&::after
			content ''
			width 4px
			height 20px
			background #333
			display block
			position absolute
			top 3px
			left 11px
			border-radius 3px
	.removeItem
		width 20px
		height 20px
		border 2px solid red
		border-radius 50%
		position absolute
		top 0
		right 0
		&::after
			content ''
			display block
			width 10px
			height 2px
			position absolute
			background red
			top 7px
			left 3px
</style>