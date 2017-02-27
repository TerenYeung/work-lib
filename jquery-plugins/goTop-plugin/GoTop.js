    $.goTop = function(){
        var $button = $('<div class="goToTop"></div')
        var $arrow = $('<div class="arrow"></div>')
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