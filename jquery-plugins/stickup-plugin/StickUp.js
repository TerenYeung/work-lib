 $.fn.stickUp = function(handler){
            console.log(this)
            var $nav = this,
                    offsetLeft = $nav.offset().left,
                    offsetTop = $nav.offset().top

            //监听窗口滚动条的位置
            //如果滚动条的滚动位置大于所选元素具体顶部位置，则固定该元素
            $(window).on('scroll',function(){
                var scrollTop = $(this).scrollTop();
                if(scrollTop >= offsetTop){
                    if(!isFixed()){
                        setFixed();
                    }
                }else{
                    if(isFixed()){
                        unsetFixed();
                    }
                }
            });

            function isFixed(){
                return $nav.data('data-fixed');
            }

            function setFixed(){
                $nav.data('data-fixed',true)
                        .css({
                            position: 'fixed',
                            top: 0,
                            left: offsetLeft,
                            'z-index': 999,
                            background:'#333',
                            color: 'white',
                            border: '3px solid transparent',
                            margin: '10px 0'
                        })
            }

            function unsetFixed(){
                $nav.data('data-fixed',false).removeAttr('style')
            }
        }
