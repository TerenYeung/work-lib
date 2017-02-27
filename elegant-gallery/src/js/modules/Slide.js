define(function(){

	function Slide(opts){
		this.mode = opts.mode;
		this.type = opts.type;
		this.init(opts);


	}

	Slide.prototype = {

		constructor:Slide,

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
			console.log(this.autoPlay)

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

			this.$imgRealList = this.$imgBox.find('img');

			this.imgRealLength = this.$imgBox.find('img').length;

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
			this.$imgRealList.css({
				width:this.imgWidth,
				height:this.imgHeight
			})

			this.$imgBox.css({
				width:this.imgWidth*this.imgRealLength,
				left:0-this.imgWidth
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
			

			this.$imgBox.prepend(this.$imgList.last().clone())
					   .append(this.$imgList.first().clone())

		   	$(bulletListTpl).appendTo($bullet);
			$viewpoint.append(this.$imgBox)
					  .append($button)
					  .append($bullet)
					  .appendTo($('body'))

		},

		addStyle:function(){

			$('<link rel="stylesheet" href="src/css/slide.css">').appendTo($('head'));

		},

		curIdx:1,
		playing:false,

		play:function(index){

			var self = this;
			
			if(self.playing){return}

			self.playing = true;

			$('.img-box').animate({
				left:0-(self.curIdx+index)*self.imgWidth
			},function(){

				self.curIdx += index;

				if(self.curIdx === (self.imgRealLength-1) ){
					
					$('.img-box').css({
						left:0-self.imgWidth,
					})

					self.curIdx = 1;

				}
				if(self.curIdx === 0){
					$('.img-box').css({
						left:0-self.imgWidth*(self.imgRealLength-2),
					})
					self.curIdx = (self.imgRealLength-2);
				}

				self.bulletControl(self.curIdx)

				self.playing = false;
			})
		},

		clock:0,
		auto_Play:function(){

			var self = this;
			this.clock = setInterval(function(){
				self.play(1);
			},self.interval)
		},

		bulletControl:function(index){

			this.$bullet.find('li').removeClass('active')
								   .eq(index-1)
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

				self.play(-1)
			})

			this.$nextBtn.on('click',function(e){
				
				e.preventDefault();

				self.play(1)
			})

			this.$bullet.on('click','li',function(){

				var listIdx = $(this).index()+1;

				var gap = listIdx - self.curIdx

				self.play(gap)

			})
		}
	}
	return Slide;
})