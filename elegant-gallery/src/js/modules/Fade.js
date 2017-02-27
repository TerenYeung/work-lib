define(function(){

	function Fade(opts){
		this.mode = opts.mode;
		this.type = opts.type;
		this.init(opts);


	}

	Fade.prototype = {

		constructor:Fade,

		init:function(opts){

			this.autoPlay = opts.autoPlay;

			this.interval = opts.interval || 2000;

			this.button = opts.button;

			this.bullet = opts.bullet;

			this.imgWidth = opts.width;

			this.imgHeight = opts.height;

			this.$imgBox = $('.img-box');

			this.$imgList = this.$imgBox.find('img');

			this.imgLength = this.$imgList.length

			this.render();

			this.bindEvent();
			// console.log(this.autoPlay)

			if(this.autoPlay){
				this.auto_Play();
			}

		},

		render:function(){


			/*动态生成HTML*/
			this.createTpl();

			/*加载CSS样式*/
			this.addStyle();

			/*动态设定imgBox的宽高和初始位置*/

			this.$viewpoint = $('.viewpoint')

			this.$button = $('.btn')

			this.$prevBtn = $('.prev');

			this.$nextBtn = $('.next');
			
			this.$bullet = $('.bullet');


			if(!this.button){
				this.$button.css({
					display:'none'
				})				
			}

			if(!this.bullet){
				this.$bullet.css({
					display:'none'
				})
			}


			/*动态设定图片宽高*/
			this.$imgList.css({
				width:this.imgWidth,
				height:this.imgHeight
			})

			this.$imgBox.css({
				width:this.imgWidth*this.imgLength,
			})

			this.$viewpoint.css({
				width:this.imgWidth,
				height:this.imgHeight
			})

		},

		createTpl:function(){

			/*轮播的viewpoint视窗*/
			var $viewpoint = $('<div class="viewpoint"></div>')

			/*轮播上下按钮模板*/
			var $button = $('<a href="#" class="btn prev"><</a> \
    						    <a href="#" class="btn next">></a>')

			/*轮播的进度条模板*/
			var $bullet = $('<ul class="bullet clearfix"></ul>');
			var bulletListTpl ='';
			for(var i=0;i<this.imgLength;i++){
				if(i===0){
					bulletListTpl += '<li class="active"></li>' 
				}else{
					bulletListTpl += '<li></li>' 
				}
			}
			

		   	$(bulletListTpl).appendTo($bullet);
			$viewpoint.append(this.$imgBox)
					  .append($button)
					  .append($bullet)
					  .appendTo($('body'))

		},

		addStyle:function(){

			$('<link rel="stylesheet" href="src/css/fade.css">').appendTo($('head'));

		},

		curIdx:0,
		playing:false,

		playNext:function(){
			this.play( (this.curIdx+1)%this.imgLength)
		},

		playPrev:function(){
			this.play( (this.imgLength+this.curIdx-1)%this.imgLength )
		},

		play:function(index){

			var self = this;

			if(this.playing){return}

			this.playing = true;

			this.$imgList.eq(this.curIdx).fadeOut(1000);
			this.$imgList.eq(index).fadeIn(1200,function(){
				self.playing = false;
			});
			// console.log(index)
			this.curIdx = index;
			// console.log(this.curIdx+"播放")
			this.bulletControl(this.curIdx);

		},

		clock:0,
		auto_Play:function(){

			var self = this;
			this.clock = setInterval(function(){
				self.playNext();
			},self.interval)
		},

		bulletControl:function(index){

			this.$bullet.find('li').removeClass('active')
								   .eq(index)
								   .addClass('active')

		},

		bindEvent:function(){

			var self = this;

			if(self.autoPlay){
				self.$viewpoint.on('mouseover',function(){
					clearInterval(self.clock)
				}).on('mouseout',function(){
					self.auto_Play()
				})
			}
			

			this.$prevBtn.on('click',function(e){
				
				e.preventDefault();

				self.playPrev()

				console.log(self.curIdx)

				
			})

			this.$nextBtn.on('click',function(e){

				console.log(self.curIdx+"点击")
				
				e.preventDefault();

				self.playNext();

				// console.log(self.curIdx)
				
			})

			this.$bullet.on('click','li',function(){

				var listIdx = $(this).index();

				self.play(listIdx)

			})
		}
	}
	return Fade;
})