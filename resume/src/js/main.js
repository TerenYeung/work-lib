// var $goTop = $('.goTop');

// $goTop.on('click',function(){
//   $('body').animate({
//     scrollTop:0
//   })
// })


   $.goTop = function(){
        var $button = $('<div class="goTop"></div')
        var $arrow = $('<div class="arrow iconfont icon-triangle"></div>')
        $('body').append($button)
        $button.append($arrow)
                .click(function(){
                    $('body').animate({
                        scrollTop:0
                    })
                })

        $(window).on('scroll',function(){
            console.log(1)
            if($('body').scrollTop() === 0){
                $button.css({
                    display:'none'
                })
            }else if($('body').scrollTop() !== 0){
                $button.css({
                    display:'block'
                })
            }

        })

    }

    $.goTop()