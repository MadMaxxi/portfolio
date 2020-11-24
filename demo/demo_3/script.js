$(window).on('scroll', function () {
    var scrollCoef = 0.001;

    $('#main-block').css({
        opacity: $(window).scrollTop() * scrollCoef
    })
});
$(window).on('scroll', function () {
    var scrollCoef = 0.001;

    $('#video').css({
        opacity: 1 - $(window).scrollTop() * scrollCoef
    })
});
$(function () {
    $(document).on('mousemove', function (e) {
        $('.paralax:hover .first').css({
            left: -e.pageX / 20 + 90,
            top: -e.pageY / 100 + 10
        });
    });
});

