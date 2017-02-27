function FM_Volume($elem){
	this.$volume = $elem
	this.init()
	this.bindEvent()
}
FM_Volume.prototype = {
	
	init(){
		this.$audio = $('.fm-player')
		this.audio = this.$audio[0]
		this.audio.volume = 0.51
		this.volumeLineHeight = 31
		this.$volumeTunnel = this.$volume.siblings('.volume-tunnel')
		this.$volumeHandler =  this.$volumeTunnel.find('.volume-handler')
		this.$volumeLine = this.$volumeTunnel.find('.volume-line')
	},
	volumeHandlerDrag(){
		this.$volumeHandler.draggabilly({
			axis: 'y',
			containment: true
		})
		var draggie = this.$volumeHandler.data('draggabilly')
		this.$volumeHandler.on('dragMove',()=>{
			// console.log((50-draggie.position.y)/50)
			this.audio.volume = ((50-draggie.position.y)/50)
			this.volumeLineHeight = draggie.position.y+1
			this.$volumeLine.css('height',this.volumeLineHeight)
			$('.fm-panel').draggabilly('disable')
		})
		this.$volumeHandler.on('dragEnd',()=>{
			$('.fm-panel').draggabilly('enable')
		})				
	},
	watchVolumeChange(){
		this.$audio.on('volumechange',()=>{
			if(this.audio.muted || this.audio.volume===0 ){
				this.$volume.removeClass('icon-volume')
					.addClass('icon-mute')				
				}else{
				this.$volume.removeClass('icon-mute')
					.addClass('icon-volume')
					// console.log('sssssssssssssssss')					
				}
		})
	},
	bindEvent(){
		this.volumeHandlerDrag()
		this.watchVolumeChange()
		this.$volume.on('click',(e)=>{
			e.stopPropagation()
			if(this.$volume.hasClass('icon-mute')){
				this.$volume.removeClass('icon-mute')
					.addClass('icon-volume')
				this.audio.muted = false
				this.$volumeHandler.css('top',(this.volumeLineHeight-1)+'px')
				this.$volumeLine.css('height',this.volumeLineHeight)
			}else{
				this.$volume.removeClass('icon-volume')
					.addClass('icon-mute')
				this.audio.muted = true
				this.$volumeLine.css('height',51)//path为圆角，多1px祛除空隙
				this.$volumeHandler.css('top','50px')
			}
		})
	}
}

new FM_Volume($('.icon-volume'))