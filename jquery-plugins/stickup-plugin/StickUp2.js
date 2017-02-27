$.fn.stickUp2 = function(){
    var $nav = $(this),
        offsetLeft = $nav.offset().left,
        offsetTop = $nav.offset().top

    var $navClone = $nav.clone()
            .css({
                visibility: 'hidden',
                display: 'none'
            }).insertBefore($nav);


    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= offsetTop) {
            if (!isFixed()) {
                setFixed()
            }
        } else {
            if (isFixed()) {
                unsetFixed()
            }
        }
    });

    function isFixed() {
        return $nav.data('data-fixed')
    }

    function setFixed() {
        $nav.data('data-fixed', true)
                .css({
                    position: 'fixed',
                    top: 0,
                    left: offsetLeft,
                    margin: '10px 0',
                    'z-index': 999,

                })
        $navClone.show();
    }

    function unsetFixed() {
        $nav.data('data-fixed', false).removeAttr('style')
        $navClone.hide();
    }
}