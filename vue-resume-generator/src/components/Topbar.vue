<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">Resumer</span>
			<div class="actions">
				<div class="logined" v-if="logined">
					<span class="welcome">你好，{{user.username}}</span>
					<button class="button primary" @click.prevent="signOut">登出</button>
				</div>
				<div class="notLogined" v-else>
					<button class="button primary" @click="isShow=true,dialogTitle='注册'" >注册</button>
					<button class="button" @click="isShow=true,dialogTitle='登录'" >登录</button>
					<MyDialog :title="dialogTitle" :visible="isShow" @close="isShow=false">
						<SignUpForm @success="signIn($event)" v-if="dialogTitle === '注册'"/>
						<SignInForm @success="signIn($event)" v-else="dialogTitle === '登录'"/>
					</MyDialog>				
				</div>
<!-- 				<button class="primary">保存</button>
				<button>预览</button> -->
			</div>

		</div>
	</div>
</template>

<script>
	import MyDialog from './MyDialog'
	import SignUpForm from './SignUpForm'
	import SignInForm from './SignInForm'
	import AV from '../lib/leadcloud.js'

	export default{
		name:'Topbar',
		components: { MyDialog , SignUpForm , SignInForm},
		data(){
			return{
				isShow: false,
				dialogTitle: ''
			}
		},
		computed:{
			user(){
				return this.$store.state.user
			},
			logined(){
				return this.user.id
			}
		},
		methods:{
			signIn(user){
				this.isShow = false
				this.$store.commit('setUser',user)
			},
			signOut(){
				AV.User.logOut()
				this.$store.commit('removeUser')
				this.isShow = false
			}
		}
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
		.actions
			display flex
			.welcome
				margin-right 16px
			button
				margin-right 16px
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