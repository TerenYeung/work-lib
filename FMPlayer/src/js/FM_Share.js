function FM_share($elem){
	this.$share = $elem
	this.init()
	this.bindEvent()
}
FM_share.prototype = {
	init(){
		this.$weibo = this.$share.find('.icon-weibo>a')
		this.$douban = this.$share.find('.icon-douban>a')
	},
	bindEvent(){
		this.$weibo.on('click',()=>{
			this.$weibo[0].href = 'http://service.weibo.com/share/share.php?title=I love ' +
								 $('.fm-song-name').text() +
								 '&pic='+$('.fm-disk-bg>img')[0].src
		})
		this.$douban.on('click',()=>{
			this.$douban[0].href = 'http://shuo.douban.com/!service/share?text=I love ' +
								 $('.fm-song-name').text() +
								 '&image='+$('.fm-disk-bg>img')[0].src
		})		
	}
}
new FM_share($('.fm-share-panel'))