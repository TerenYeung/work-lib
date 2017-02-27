require('./stickUp.styl')
module.exports = {
	init:function($selector){
		var $nav = $selector
		var navOffsetLeft = $selector.offset().left,
			navOffsetTop = $selector.offset().top;

		$(window).on('scroll',(e)=>{
			var winScrollTop = $(e.target).scrollTop()
			if(winScrollTop>navOffsetTop){
				if(!isFixed()){
					setFixed()
				}
			}else{
				if(isFixed()){
					unsetFixed()
				}
			}
		})

		function isFixed(){
			return $nav.data('data-fixed')
		}

		function setFixed(){
			$nav.data('data-fixed',true)
				.addClass('stickup')

			$nav.find('.blade-homePage-nav-logo>img').attr('src','src/assets/img/logo-default-199x36.png')
		}
		function unsetFixed(){
			$nav.data('data-fixed',false)
				.removeClass('stickup')
			$nav.find('.blade-homePage-nav-logo>img').attr('src','src/assets/img/logo-white-200x36.png')
		}
	}
}