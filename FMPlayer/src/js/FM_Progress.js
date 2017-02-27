function FM_Progress($elem){
	this.$progress = $elem
	this.init()
	this.bindEvent()
}

FM_Progress.prototype = {

	init(){
		this.$audio = $('.fm-player')
		this.audio = this.$audio[0]
		this.$loadHandler = this.$progress.find('.load-handler')
		this.$loadLine = this.$progress.find('.load-line')
		this.$curTimeText = this.$progress.find('.currentTime')
		this.$totalTimeText = this.$progress.find('.totalTime')
		this.timer;
	},
	progressUpdate(){
		this.$audio.on('play',()=>{
				var totalTime = this.audio.duration
				this.timer = setInterval(()=>{
					var curTime = this.audio.currentTime
					var curProgress =Math.round(curTime/totalTime*200) + 'px'
					this.$curTimeText.text(this.playTimeFormat(curTime))
					this.$loadLine.width(curProgress)
					this.$loadHandler.css('left',curProgress)
				},1000)
				this.$totalTimeText.text(this.playTimeFormat(totalTime))
		})
		this.$audio.on('pause',()=>{
			clearInterval(this.timer)
		})
	},
	playTimeFormat(playTime){
		var min = parseInt(playTime/60)
		if(min<10){
			min = '0' +  min
		}
		var sec = parseInt(playTime%60)
		if(sec<10){
			sec = '0' +  sec
		}
		return min + ':' + sec
	},
	handlerDrag(){
	    this.$loadHandler.draggabilly({
			axis: 'x',
		    containment: true,
		})		
		var draggie = this.$loadHandler.data('draggabilly')
		this.$loadHandler.on('dragStart',()=>{
			this.audio.pause()
		})
		this.$loadHandler.on('dragMove',()=>{
			this.audio.currentTime = (draggie.position.x/200)*this.audio.duration
			this.$loadLine.width(draggie.position.x)
			this.$curTimeText.text(this.playTimeFormat(this.audio.currentTime))

			$('.fm-panel').draggabilly('disable')
		})
		this.$loadHandler.on('dragEnd',()=>{
			this.audio.play()
			$('.fm-panel').draggabilly('enable')
		})				
	},
	bindEvent(){
		this.progressUpdate()
		this.handlerDrag()

	}
}

new FM_Progress($('.fm-progress'))