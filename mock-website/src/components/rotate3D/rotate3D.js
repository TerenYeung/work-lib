require('./rotate3D.styl')

module.exports = {
	init:function(){
		$('.blade-homePage-nav-button-menu>.icon-menu').on('click',(e)=>{
					console.log(1)
			e.preventDefault()
			if($('.blade-homePage-wrap').hasClass('rotate3D')){
				$('.blade-homePage-wrap').removeClass('rotate3D')
				$('.blade-sidebar').fadeOut('fast')
				setTimeout(()=>{
					$('.blade-homePage').removeClass('perspective')
				},800)

			}else{
				$('.blade-homePage').addClass('perspective')
				$('.blade-homePage-wrap').addClass('rotate3D')
				$('.blade-sidebar').fadeIn('slow')
			}
		})

		$('.blade-homePage-nav-logo-2 .icon-menu').on('click',(e)=>{
			if($('.blade-sidebar-left').hasClass('sidebar-left-show')){
				$('.blade-sidebar-left').removeClass('sidebar-left-show')
			}else{
				$('.blade-sidebar-left').addClass('sidebar-left-show')
			}
		})
	}
}