function FM_Open($elem){
	this.$open = $elem
	this.init()
	this.bindEvent()
}
FM_Open.prototype = {
	constructor:FM_Open,
	init(){
		this.$iconOpen = this.$open.find('.icon-open')
		this.$FMPanel = $('.fm-panel')
	},
	bindEvent(){
		this.$FMPanel.draggabilly()
		this.$open.on('mousedown',(e)=>{
			this.$open.toggleClass('open')
			this.$iconOpen.toggleClass('open')
			this.$FMPanel.toggleClass('open')
						 
		})
	}
}
//
new FM_Open($('.fm-open'))

