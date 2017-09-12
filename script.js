$(function(){
    var pageSlide = new mo.Slide({
        target: $('.slide li'),
        effect: 'slide'
    });

    pageSlide.on('change', function(e, index) {
        $('li').eq(index).find('[data-ani]').each(function() {
            var $el = $(this);
            animate($el, $el.data('ani'));
        });
    });

    function animate($el, name) {
        $el.addClass('animated').addClass(name);
        setTimeout(function() {
            $el.removeClass(name);
        }, 1000);
    }
});
