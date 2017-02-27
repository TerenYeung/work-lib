define(function(){

	function ThreeD(opts){
		this.mode = opts.mode
		this.init(opts);
	}


ThreeD.prototype = {

		constructor:ThreeD,

		init:function(opts){

			this.autoPlay = opts.autoPlay;
			this.interval = opts.interval;
			this.$imgBox = $('.img-box')
			this.$imgList = this.$imgBox.find('img')
			this.imgLength = this.$imgList.length
			this.$imgBox.height(opts.height)
			this.$imgBox.width(opts.width)
			this.imgBoxWidth = this.$imgBox.width()
			this.imgBoxHeight = this.$imgBox.height()
			this.addStyle();
			this.render();
			this.bindeEvent();

			if(this.autoPlay){
				this.auto_Play();
			}
		},

		addStyle:function(){

			$('<link rel="stylesheet" href="src/css/threeD.css">').appendTo($('head'));

		},

		render:function(){

			this.$tpl = $('<div class="stage"></div>')

			this.$btn = $('<div class="threeD-btn">	  \
							<a class="prev"><</a> \
							<a class="next">></a> \
				            </div>')

			this.$tpl.append(this.$imgBox)
				     .appendTo($('body'))
				     .after(this.$btn)


			this.degree =360/this.imgLength


			this.tranZ = (this.imgBoxWidth/2)/Math.tan((this.degree/2)/180*Math.PI)

			for(var i=0;i<this.imgLength;i++){
				this.$imgList.eq(i).css({
					transform:'rotateY('+i*this.degree+'deg) translateZ('+this.tranZ+'px)'
				})
			}


			this.$tpl.css({
				marginLeft:-this.imgBoxWidth/2,
				marginTop:-this.imgBoxHeight/2
			})


		},

		auto_Play:function(){

			var self = this;
			this.clock = setInterval(function(){
				self.rotate -= self.degree;
				self.$imgBox.css({
					transform:'rotateY('+self.rotate+'deg)'
				})
			},self.interval)
		},

		rotate:0,
		bindeEvent:function(){
			var self = this;

			if(self.autoPlay){
				self.$imgList.on('mouseover',function(){
					clearInterval(self.clock)
				}).on('mouseout',function(){
					self.auto_Play()
				})
			}



			$('.prev').on('click',function(){
				clearInterval(self.clock)
				self.rotate += self.degree;
				self.$imgBox.css({
					transform:'rotateY('+self.rotate+'deg)'
				})
				self.auto_Play()
			})

			$('.next').on('click',function(){
				clearInterval(self.clock)
				self.rotate -= self.degree;
				self.$imgBox.css({
					transform:'rotateY('+self.rotate+'deg)'
				})
				self.auto_Play()
			})
		}
	}
	return ThreeD;
})