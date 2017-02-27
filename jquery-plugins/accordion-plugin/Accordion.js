    $.fn.accordion = function(){
        var $ul = this;
        $ul.on('click','li',function(){
            $(this).addClass('selected')
                    .siblings('.selected')
                    .removeClass('selected')
        })
    }

