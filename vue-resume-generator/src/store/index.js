import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		selected:'profile',
		resume:{
			//关于改为config数组的问题；
			//数组是有序键值对集合，使用vue的列表渲染数组能够保证每次渲染符合开发者期望的数据顺序，去掉config，使用对象渲染将导致每次顺序不一致；
			config:[
				{field:'profile',icon:'id'},
				{field:'workHistory',icon:'work'},
				{field:'education',icon:'book'},
				{field:'projects',icon:'heart'},
				{field:'awards',icon:'cup'},
				{field:'contacts',icon:'phone'},
			],
			profile:{
				name:'Flag',
				city:'earth',
				title:'FE freshman',
				birthday:'19910101'
			},
			workHistory:[
				{company: 'F',content: 'Facebook'},
				{company: 'L',content: 'La...'},
				{company: 'A',content: 'Amazon'},
				{company: 'G',content: 'Google'},
			],
			education:[
				{school: 'UCLA',major: 'CS',content: 'Play Games'},
				{school: 'StandFord',major: 'Economics',content: 'Stock Buying'}
			],
			projects:[
				{name: '微信打飞机',content: '画了个飞机'},
				{name: '王者荣耀',content: '只会用后羿'}
			],
			awards:[
				{name: 'Tennis',content: 'Championship'},
				{name: 'Basketball',content: 'Gold Prize'}
			],
			contacts:[
				{contact: 'phone',content: '18888888888'},
				{contact: 'wechat', content: 'Page123'}
			],
		}														
	},
	mutations:{
		switchTab(state,payload){
			state.selected = payload
		},
		// changeMsg(state,payload){
		// 	state.
		// }
	}
})

export default store