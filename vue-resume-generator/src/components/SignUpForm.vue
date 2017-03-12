<template>
	<div id="signUpForm" >
		<form @submit.prevent="signUp">
			<div class="row">
				<label for="username">用户名: </label>
				<input id="username" type="text" v-model="user.username" required>
			</div>
			<div class="row">
				<label for="password">密码: </label>
				<input id="password" type="password" v-model="user.password" required>
			</div>
			<div class="actions">
				<input type="submit" value="提交">
				<span class="errorInfo">{{errorInfo}}</span>
			</div>
		</form>
	</div>
</template>

<script>
	import AV from '../lib/leadcloud.js'
	import getErrorInfo from '../lib/getErrorInfo.js'
	import getAVUser from '../lib/getAVUser.js' 
	// console.log(AV)
	export default {
		name:'SignUpForm',
		data(){
			return{
				user:{
					username:'',
					password: ''
				},
				errorInfo:''
			}
		},
		methods:{
			signUp(){
				let { username , password } = this.user
				var user = new AV.User();
				user.setUsername(username);
				user.setPassword(password);
				user.signUp().then( loginedUser => {
				  	// console.log(loginedUser);
				  	// 获取当前登录用户
				  	this.$emit('success',getAVUser())				  	
				},err=>{
					this.errorInfo = getErrorInfo(err)
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
		form
			display flex
			flex-direction column
			justify-content space-around			
			height 120px
		div 
			padding 0 16px
		input
			padding-left 5px
		.errorInfo
			color red
</style>