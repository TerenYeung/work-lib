


function FM_header($elem){
	this.$elem = $elem
	this.init()
	this.bindEvent()
}
FM_header.prototype = {
	
	init(){
		this.$fm_panel = $('.fm-panel')
		this.$menu = this.$elem.find('.icon-menu')
		this.$songName = this.$elem.find('.fm-song-name')
		this.$share = this.$elem.find('.icon-share')
		this.$channels_panel = this.$elem.siblings('.fm-list-panel')
		this.$share_panel = this.$elem.siblings('.fm-share-panel')
	},
	bindEvent(){
		this.$menu.on('click',(e)=>{
			e.stopPropagation()
			this.$channels_panel.fadeIn('fast')
								.data('isOpen','true')
		})
		this.$channels_panel.on('click',(e)=>{
			$(e.currentTarget).fadeOut('fast')
		})
		this.$fm_panel.on('click',()=>{
			this.$channels_panel.fadeOut('fast')
		})
		this.$share.on('click',(e)=>{
			e.stopPropagation()
			this.$share_panel.fadeIn('fast')
		})
		// this.$share_panel.on('click',(e)=>{

		// 	$(e.currentTarget).fadeOut('fast')
		// })
		this.$fm_panel.on('click',(e)=>{

			this.$share_panel.fadeOut('fast')
		})

	}
}
	
new FM_header($('.fm-header'))