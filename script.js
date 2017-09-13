$(function(){
    var pageSlide = new mo.Slide({
        target: $('.content li'),
        effect: 'xx'
    });

    pageSlide.on('change', function(e, index) {
        $('.content li').eq(index).find('[data-ani]').each(function() {
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

    $('.star').append($.map(new Array(30), function(index) {
        return $('<li></li>').css({
            'left': Math.random() * 100 + '%',
            'top': Math.random() * 100 + '%'
        });
    }));

});
