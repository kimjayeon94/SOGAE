$('.submenu').hide();
$('.gnb>li').mouseover(function () {
    $('.submenu').stop().slideDown();
})
$('#header_wrap').mouseleave(function () {
    $('.submenu').stop().slideUp();
})

//scroll top
$(window).scroll(function () {
    var height = $(window).scrollTop();

    // $('.top').hide();

    console.log(height)

    if (height > 700) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});//scroll top end