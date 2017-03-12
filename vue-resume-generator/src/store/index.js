import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		selected:'profile',
		resume:{
			//关于改为config数组的问题；
			//数组是有序键值对集合，使用vue的列表渲染数组能够保证每次渲染符合开发者期望的数据顺序，去掉config，使用对象渲染将导致每次顺序不一致；
			// profile:{},
			// workHistory:[],
			// education:[],
			// projects:[],
			// awards:[],
			// contacts:[],
		},
		resumeConfig:[
				{field:'profile',icon:'id',keys:['name','title','city','birthday']},
				{field:'workHistory',icon:'work',type:'array',keys:['company','content']},
				{field:'education',icon:'book',type:'array',keys:['school','major','content']},
				{field:'projects',icon:'heart',type:'array',keys:['name','content']},
				{field:'awards',icon:'cup',type:'array',keys:['name','content']},
				{field:'contacts',icon:'phone',type:'array',keys:['contact','content']},
		],
		user:{
			username:'',
			id: ''
		}														
	},
	mutations:{
		initData(state,payload){
			// state = payload
			state.resumeConfig.map((item)=>{
				if(item.type==='array'){
					Vue.set(state.resume,item.field,[])
				}else{
					Vue.set(state.resume,item.field,{})
					item.keys.map(key=>{
						Vue.set(state.resume[item.field],key,'')
					})
				}
			})
			Object.assign(state,payload)
		},
		switchTab(state,payload){
			state.selected = payload
			var dataStr = JSON.stringify(state)
			localStorage.setItem('state',dataStr)
		},
		// changeData(state,{field,index,key,value}){
		// 	if(index===null){
		// 		state.resume[field][key] = value
		// 	}else{
		// 		state.resume[field][index][key] = value
		// 	}
		// },
		changeData(state,{path,value}){
			objectPath.set(state.resume,path,value)
			var dataStr = JSON.stringify(state)
			localStorage.setItem('state',dataStr)
		},
		setUser(state,payload){
			Object.assign(state.user,payload)
		},
		removeUser(state){
			state.user.id = ''
		},
		addItem(state,payload){
			state.resumeConfig.map(item=>{
				if(item.field===payload){
					console.log(item.field)
					var fieldKeys = item.keys
					console.log(fieldKeys)
					var keysObj = {}
					fieldKeys.map(subItem=>{
						keysObj[subItem] = ''
					})
					console.log(keysObj)
					state.resume[payload].push(keysObj)					
				}
			})	
			// state[resume][payload].push()
		},
		removeItem(state,{field,index}){
			console.log(state.resume[field][index])
			state.resume[field].splice(index,1)
		}
	}
})

export default store