window.utils = {};




/*用户交互*/
window.utils.captureMouse = function(element){
	var mouse = {x:0,y:0}
	element.addEventListener('mousemove',function(event){
		var x,y;
		if(event.pageX||event.pageY){
			x = event.pageX;
			y = event.pageY;
		}else{
			x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft; 
			            y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop; 
		};
		x -= element.offsetLeft;
		y -= element.offsetTop;
		mouse.x = x;
		mouse.y = y;},false)
		return mouse;	
	};


window.utils.captureTouch = function(element){
	var touch = {
		x:null,
		y:null,
		isPressed:false,
		event:null
	};
	var body_scrollLeft = document.body.scrollLeft;

	var element_scrollLeft = document.documentElement.scrollLeft;

	var body_scrollTop= document.body.scrollTop;
	
	var element_scrollTop = document.documentElement.scrollTop;

	var offsetLeft =element.scrollLeft;

	var offsetTop = element.scrollTop;
	
	element.addEventListener('touchstart',function(event){
		touch.isPressend = true;
		touch.event = event;
	},false);
	element.addEventListener('touchend',function(event){
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
		touch.event = event;
	},false);
	element.addEventListener('touchmove',function(event){
		var x,y;
		var touch_event = event.touches[0];//多点触控中第一个触控点
		if(touch_event.pageX||touch_event.pageY){
			x = touch_event.pageX;
			y = touch_event.pageY;
		}else{
			x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
			y = touch_event.clientY + body_scrollTop + element_scrollTop;
		};
		x -= offsetLeft;
		y -= offsetTop;
		touch.x = x;
		touch.y = y;
		return touch;

})}

/*window.requestAnimationFrame兼容*/

if(!window.requestAnimationFrame){
	window.requestAnimationFrame =
	(
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		function (callback){
			return window.setTimeout(callback,Math.floor(1000/60))	
		}
	)
};

if(!window.cancelAnimationFrame){
	window.cancelAnimationFrame = (
		window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.msCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		window.clearTimeout
	)
};
