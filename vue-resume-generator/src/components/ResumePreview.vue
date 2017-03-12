<template>
	<div id="resumePreview">
		<!-- I am resumePreview -->
		<!-- {{resume}} -->
		<section data-name="profile" v-if="resume.profile && resume.profile.name">
			<h1>{{resume.profile.name}}</h1>
			<h2>{{resume.profile.title}}</h2>
			<p>
				<small>{{resume.profile.city}}</small>
				<small>{{resume.profile.birthday}}</small>
			</p>
		</section>
		<section data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length>0">
			<h2>工作经历</h2>
			<ol>
				<li v-for="item in resume.workHistory">
					<h3>{{item.company}}</h3>
					<p v-if="item.content">{{item.content}}</p>
					<br>
				</li>
			</ol>
		</section>
	
		<section data-name="education" v-if="resume.education && resume.education.length>0">
			<h2>毕业院校</h2>
			<ol>
				<li v-for="item in resume.education">
					<h3>
						{{item.school}}
						{{item.major}}
						<span v-if="item.content">{{item.content}}</span>
					</h3>
				</li>
			</ol>
		</section>

		<section data-name="projects" v-if="resume.education && resume.projects.length>0">
			<h2>项目经历</h2>
			<ol>
				<li v-for="item in resume.projects">
					<h3>{{item.name}}</h3>
					<p v-if="item.content">{{item.content}}</p>
				</li>
			</ol>
		</section>

		<section data-name="awards" v-if="resume.education && resume.awards.length>0">
			<h2>获奖情况</h2>
			<ol>
				<li v-for="item in resume.awards">
					<h3>{{item.name}}</h3>
					<p v-if="item.content">{{item.content}}</p>
				</li>
			</ol>
		</section>

		<section data-name="contacts" v-if="resume.education && resume.contacts.length>0">
			<h2>联系方式</h2>
			<table>
				<tr v-for="item in resume.contacts">
					<td>{{item.contact}}</td>
					<td v-if="item.content">{{item.content}}</td>
				</tr>
			</table>
		</section>
	</div>
</template>

<script>
	export default{
		name:'ResumePreview',
		computed:{
			resume(){
				return this.$store.state.resume
			}
		},
		created(){
			console.log(this.resume)
		}
	}
</script>

<style lang="stylus">
*
	box-sizing: border-box;
	font-variant: normal;
	font-weight: normal;
#resumePreview
	background: #fff;
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
	padding: 2em;
	color: #333;
	line-height: 1.2;
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
ol
	list-style: none;
section + section
	margin-top: 2em;
p
	white-space: pre-line//去除一行文本中的空格，但是保留一行的换行符，作用是防止用户在输入框输入空格而对用户不友好显示
section
	>h2:first-child
		background: #ddd;
		display: inline-block;
		padding: .2em;
		margin-bottom: .5em;
section[data-name="profile"]
	>h1
		margin: .1em 0;
		font-size: 4em;
section[data-name="workHistory"]
section[data-name="projects"]
section[data-name="awards"]
	li + li
		margin-top: 1em;
	li
		h3
			border-bottom: 1px solid #999;
			padding-bottom: .3em;
			margin-bottom: .3em;
section[data-name="education"]
	li
		line-height: 1.5;	
section[data-name="contacts"]
	td:first-child
		padding-right: 1em;

</style>