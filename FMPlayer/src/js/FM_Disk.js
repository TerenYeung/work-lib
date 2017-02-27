function FM_disk($elem){
	this.$disk = $elem
	this.init()
	this.bindEvent()
}
FM_disk.prototype = {

	init(){
		this.$audio = $('.fm-player')
		this.$needle = this.$disk.find('.fm-disk-needle')
		this.$img = this.$disk.find('img')
		this.$disk_bg = this.$disk.find('.fm-disk-bg')
		this.$play = this.$disk.siblings('.fm-controls').find('.icon-play')
		// console.log(this.$audio[0])
	},
	bindEvent(){
		this.$audio.on('play',()=>{
			this.$needle.addClass('play')
			this.$disk_bg.addClass('play')//第一次播放时添加动画
			this.$disk_bg.css('animation-play-state','running')
		})
		this.$audio.on('pause',()=>{
			this.$needle.removeClass('play')
			this.$disk_bg.css('animation-play-state','paused')
		})
	}
}

new FM_disk($('.fm-disk'))