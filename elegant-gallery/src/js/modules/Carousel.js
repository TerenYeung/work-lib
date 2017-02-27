
define(["modules/Slide","modules/Fade","modules/FullPage","modules/ThreeD"],function(Slide,Fade,FullPage,ThreeD){
	
	function Carousel(opts){
		this.mode = opts.mode;
		this.type = opts.type;
		this.imgSize = opts.width+"px "+opts.height+"px"
		this.interval = opts.interval;
		this.init(opts);
	}

	Carousel.prototype = {
	
	constructor:Carousel,
	init:function(opts){

		if(opts.mode === "2d" && opts.type.toLowerCase() === "slide"){
			this.slide = new Slide(opts);
		}else if(opts.mode === "2d" && opts.type.toLowerCase() === "fade"){
			this.fade = new Fade(opts);
		}else if(opts.mode === "2d" && opts.type.toLowerCase() === "fullpage"){
		 	this.fullPage = new FullPage(opts)
		}else if(opts.mode === "3d" && !opts.type){
			this.threeD = new ThreeD(opts);
		}
	}
}	

return Carousel;
})