function Slide(opts){
	this.init(opts)
}

Slide.prototype= {
  constructor:Slide,
  init:function(opts){
    
    this.$imgList = $('.blade-testimonials-slide-item')
    this.$imgLength = this.$imgList.length
    this.$arrow_left = $('.arrow-left')
    this.$arrow_right = $('.arrow-right')
    
    this.bindEvent()
  },
  
  curImg:0,
  
  play:function(idx){
    
    this.curImg += idx
    
    if(this.curImg===this.$imgList.length){
        this.curImg = 0    
    }
    if(this.curImg === -1){
        this.curImg = this.$imgList.length-1
    }
    
    this.$imgList.eq(this.curImg).fadeIn(1000) 
    if(idx===1){
      this.$imgList.eq(this.curImg-1).fadeOut(100)
    }
    if(idx===-1 && this.curImg===this.$imgList.length-1){
      this.$imgList.eq(this.curImg-(this.$imgList.length-1)).fadeOut(100)
    }else if(idx ===-1){
      this.$imgList.eq(this.curImg+1).fadeOut(100)
    }

  },
  
  bindEvent:function(){
    
    this.$arrow_left.on('click',()=>{
      this.play(-1)
    })
    
    this.$arrow_right.on('click',()=>{
      this.play(1)
    })
    
  }
}

module.exports = Slide