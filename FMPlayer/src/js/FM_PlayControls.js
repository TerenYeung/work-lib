function FM_PlayControls($elem){
	this.$controls = $elem
	this.init()
	this.autoPlay()
	this.bindEvent()
}
FM_PlayControls.prototype = {

	init(){
		this.$audio = $('.fm-player')
		this.audio = this.$audio[0]
		this.$songName = $('.fm-song-name')
		this.$disk_img = $('.fm-disk').find('img')
		this.$channelsPanel = $('.fm-list-panel')
		this.channelID = 'public_tuijian_spring'
		this.$prev = this.$controls.find('.icon-prev')
		this.$next = this.$controls.find('.icon-next')
		this.$play_pause = this.$controls.find('.icon-play-pause')
		this.$lyricPanel = $('.fm-lyric').find('.lyric-wrapper')
		this.letPlay = false
		this.songArr = []
		this.lyricTimeArr = []

	},
	canPlay(){
		this.$audio.on('canplay',()=>{
			if(this.letPlay){
				this.audio.play()
			}
			this.letPlay = false
		})
	},
	autoPlay(){
		this.$audio.on('ended',()=>{
			// console.log('end')
			this.letPlay = true
			this.getSong(this.channelID)
		})
	},
	getSong(channelID){
		var self = this//注意在延迟对象中使用this，最好这么使用
		$.get('http://api.jirengu.com/fm/getSong.php', {
            channel: channelID
        }).done((data)=>{
        	self.song = JSON.parse(data).song[0]
        	self.songReset(self.song)
        	self.songArr.push(self.song)
        })
	},
	songReset(song){
		// console.log(song)
		this.audio.src = song.url
		this.audio.load()//重新加载音频
		this.audio.currentTime = 0
		this.$songName.text(song.title)
		this.$disk_img[0].src = song.picture
		// console.log(song.sid)
		this.lyricReset(song.sid)
	},
	lyricReset(sid){
		var self = this
		$.post('http://api.jirengu.com/fm/getLyric.php', {
            sid: sid
        }).done((data)=>{
        	var lyricStr = JSON.parse(data).lyric
        	$('.lyric-wrapper').children().remove()
        	self.lyricTimeArr = []
        	self.lyricFormat(lyricStr)
        })
	},
	lyricFormat(lyricStr){
		var html = ''
		var lyricArr = lyricStr.split('\n')
		var regexp = /[\[\]\{\}\(\)\\]/g
		// var lyricArr = (""+lyricStr).split('\n')
		for(var i=0 ; i<lyricArr.length ; i++){
			var lyric = lyricArr[i].slice(10,lyricArr[i].length)
			if(!lyric){
				lyric='------------'
			}
			if(regexp.test(lyric)){
				lyric = lyric.replace(regexp,'')
			}
			html +=`<p class="lyric-No-${i}">${lyric}</p>`
			this.getLyricTimeArr(lyricArr[i])
		}
		// console.log(html)
		// console.log($('.lyric-wrapper'))
		$('.lyric-wrapper').append(html)
		// console.log($('.lyric-wrapper'))
	},
	getLyricTimeArr(lyric){
		var min = Number(lyric.substring(1,3))
		var sec = Math.round(min * 60 + parseFloat(lyric.substring(4,9)))
		// console.log(lyric.substring(1,3))
		
		this.lyricTimeArr.push(sec)
		// console.log(this.lyricTimeArr)
	},
	lyricPanelMove(curTime){

		for(var i = 1 ; i < this.lyricTimeArr.length ; i++){
			// console.log(curTime)
			if(curTime === this.lyricTimeArr[i]){
				var top = 35 - i * 30 + 'px'/*100/2=50.元素高度30px,30/2=15,50-15=35px*/
				var lightClass = `.lyric-No-${i}`
				$(lightClass).siblings().removeClass('hightlight')
				$(lightClass).addClass('hightlight')
				this.$lyricPanel.animate({
					top:top
				},300)
			}
		}
	},
	timeUpdate(){
		this.$audio.on('timeupdate',()=>{
			var curTime = Math.round(this.audio.currentTime)
			this.lyricPanelMove(curTime)
		})
	},

	channelSelect(){
		var self = this
		this.$channelsPanel.on('click','li',function(){
			self.audio.pause()
			$(this).siblings().removeClass('list-selected')
			$(this).addClass('list-selected')
			self.channelID = $(this).data('channel-id')
			// console.log(self.channelID)
			self.letPlay = true
			self.getSong(self.channelID)
		})
	},
	channelsRender(){
		var self = this
		$('.fm-panel').ready(()=>{
			$.get('http://api.jirengu.com/fm/getChannels.php')
			 .done((channels)=>{
			 	var channelsArr = JSON.parse(channels).channels
			 	var html = ''
			 	for(var i = 0 ; i<channelsArr.length ; i++){
			 		var channelName = channelsArr[i].name
			 		var channelID = channelsArr[i].channel_id
			 		html += `<li data-channel-id = ${channelID}>${channelName}</li>`
			 	}
			 	this.$channelsPanel.append(html)
				$('.fm-list-panel').children().first().addClass('list-selected')
				self.getSong(self.channelID)
				$('.fm-disk-bg').css('animation-play-state','paused')
			 })
			 // console.log(self.$channelsPanel.children().first()[0])

		})
	},
	bindEvent(){

		var self = this
		this.channelsRender()
		this.channelSelect()
		this.canPlay()
		this.autoPlay()
		this.timeUpdate()
		this.lyricPanelMove()

		this.$play_pause.on('click',()=>{
			if(self.audio.paused){
				self.audio.play()
				if(this.$play_pause.hasClass('icon-play')){
					this.$play_pause.removeClass('icon-play')
									.addClass('icon-pause')
				}
			}else{
				this.audio.pause()
				if(this.$play_pause.hasClass('icon-pause')){
					this.$play_pause.removeClass('icon-pause')
									.addClass('icon-play')
				}
			}
		})
		/*当直接点击上下一曲按键时触发*/
	  	this.$audio.on('play',(e)=>{
	  		if(this.$play_pause.hasClass('icon-play')){
					this.$play_pause.removeClass('icon-play')
									.addClass('icon-pause')
				}
	  	})

		this.$prev.on('mousedown',()=>{this.audio.pause()})
				  .on('click',()=>{
				  		if(self.songArr.length > 1){
				  			self.songArr.pop()
				  			self.songReset(self.songArr[self.songArr.length-1])
				  			self.letPlay = true
				  		}

				  })

	  	this.$next.on('mousedown',(e)=>{this.audio.pause()})
	  			  .on('click',()=>{
	  			  		self.letPlay = true
	  			  		self.getSong(self.channelID)
	  			  })
	}
}
// console.log(1)
var fm = new FM_PlayControls($('.fm-controls'))
// console.log(fm)
// fm.
// console.log(1)
var lyricObj = {"sid":"325908","name":"\u6740\u7834\u72fc","lyric":"[00:00.01]\u97f3\u4e50\u6765\u81ea\u767e\u5ea6FM, by \u9965\u4eba\u8c37\n[ti:0]\n[ar:0]\n[al:0]\n[offset:0]\n\n[00:00.00]\u6740\u7834\u72fc\n[00:03.15]\u6f14\u5531\uff1aJS\n[00:04.34]\n[00:04.78]\u54e6 \u5440 \u563f \u5440....\n[00:28.59]\n[00:28.93]\u6c89\u7761\u4e86\u5343\u5e74\u7684\u8eab\u4f53\n[00:32.67]\u4ece\u8150\u679d\u67af\u53f6\u91cc\u82cf\u9192\n[00:36.11]\u662f\u591c\u83ba\u51c4\u51c9\u7684\u53f9\u606f\n[00:39.58]\u89e3\u5f00\u5492\u8bed\n[00:40.84]\n[00:43.05]\u9057\u5fd8\u7684\u5251\u88ab\u8c01\u5c01\u5370\n[00:46.42]\u8ffd\u968f\u7740\u7bab\u58f0\u548c\u9a6c\u8e44\n[00:53.21]\u627e\u5230\u4f60\n[00:54.80]\n[00:55.66]\u6700\u5149\u8363\u7684\u727a\u7272\n[00:59.04]\u662f\u82f1\u96c4\u7684\u5bbf\u547d\n[01:02.62]\u6325\u5251\u7684\u77ac\u95f4\u5fc3\u5374\u5728\u54ed\u6ce3\n[01:08.10]\n[01:09.49]\u751f\u662f\u4e3a\u4e86\u8bc1\u660e\n[01:12.79]\u7231\u5b58\u5728\u7684\u75d5\u8ff9\n[01:16.46]\u706b\u71c3\u70e7\u540e\u66f4\u4f1f\u5927\u7684\u751f\u547d\n[01:22.73]\n[01:23.56]\u6740\u662f\u4e3a\u4e86\u6b4c\u9882\n[01:26.95]\u7834\u706d\u524d\u7684\u58ee\u4e3d\n[01:30.54]\u591c\u662f\u72fc\u6df1\u9083\u773c\u775b\n[01:35.50]\u5b64\u72ec\u7b49\u5f85\u9ece\u660e\n[01:38.75]\n[01:51.88]\u770b\u4e0d\u89c1\u672a\u6765\u548c\u8fc7\u53bb\n[01:55.17]\u5206\u4e0d\u6e05\u751f\u6b7b\u7684\u5dee\u5f02\n[01:58.75]\u4e0d\u5e26\u8d70\u559c\u60a6\u6216\u9057\u61be\n[02:02.10]\u79bb\u5f00\u8fd9\u91cc\n[02:03.75]\n[02:05.20]\u7834\u6653\u548c\u6708\u7259\u5728\u4ea4\u66ff\n[02:08.87]\u6211\u7a7f\u8d8a\u8fc7\u51e0\u4e2a\u4e16\u7eaa\n[02:15.87]\u53ea\u4e3a\u4f60\n[02:17.49]\n[02:18.34]\u5f53\u82b1\u74e3\u5728\u98d8\u96f6\n[02:21.64]\u8fd9\u60b2\u51c9\u7684\u98ce\u666f\n[02:25.22]\u957f\u8896\u6325\u4e0d\u53bb\u4e00\u751f\u5200\u5149\u5251\u5f71\n[02:30.61]\n[02:35.39]\u751f\u662f\u4e3a\u4e86\u8bc1\u660e\n[02:38.70]\u7231\u5b58\u5728\u7684\u75d5\u8ff9\n[02:42.65]\u706b\u71c3\u70e7\u540e\u66f4\u4f1f\u5927\u7684\u751f\u547d\n[02:49.09]\n[02:49.51]\u6740\u662f\u4e3a\u4e86\u6b4c\u9882\n[02:52.82]\u7834\u706d\u524d\u7684\u58ee\u4e3d\n[02:56.18]\u591c\u662f\u72fc\u6df1\u9083\u773c\u775b\n[03:00.93]\u5b64\u72ec\u7b49\u5f85\u9ece\u660e\n[03:04.80]\n[03:30.35]\u6211\u662f\u5426\u5df2\u7ecf\u6ce8\u5b9a\n[03:35.18]\u8fd9\u6d41\u79bb\u7684\u5bbf\u547d\n[03:38.68]\u6211\u6b8b\u7834\u7684\u7fbd\u7ffc\n[03:43.14]\u76f4\u5230\u4f60\n[03:45.56]\u662f\u4f60\u8ba9\u6211 \u627e\u56de\u81ea\u5df1\n[03:50.57]\n[03:50.79]\u751f\u662f\u4e3a\u4e86\u8bc1\u660e\n[03:54.02]\u7231\u5b58\u5728\u7684\u75d5\u8ff9\n[03:57.64]\u706b\u71c3\u70e7\u540e\u66f4\u4f1f\u5927\u7684\u751f\u547d\n[04:04.16]\n[04:04.51]\u6740\u662f\u4e3a\u4e86\u6b4c\u9882\n[04:07.86]\u7834\u706d\u524d\u7684\u58ee\u4e3d\n[04:11.43]\u591c\u662f\u72fc\u6df1\u9083\u773c\u775b\n[04:16.33]\u5b64\u72ec\u7b49\u5f85\u9ece\u660e\n[04:23.01]\n"}