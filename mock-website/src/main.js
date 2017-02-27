//global and default stylesheet
require('./style.styl')
require('./components/iconfont/iconfont.styl')
require('./components/reset/reset.styl')

//homePage-3Drotate-effect
var rotate3D = require('./components/rotate3D/rotate3D.js')
rotate3D.init()

//nav-stickup-effect
var StickUp = require('./components/StickUp/StickUp.js')
StickUp.init($('.blade-homePage-nav'))

//testimonials-slide-effect
var Slide = require('./components/Slide/Slide.js')
new Slide()