//submenu
$('.submenu').hide();
$('.gnb>li').mouseover(function () {
    $('.submenu').stop().slideDown();
})
$('#header_wrap').mouseleave(function () {
    $('.submenu').stop().slideUp();
})
//submenu end

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
});
//scroll top end

//header_fixed
window.onscroll = function () { //스크롤 했을 때!

    let hd = document.getElementById('header_wrap');
    
    let scrollBar = window.scrollY; //스크롤바 Y축 값 /* onscroll 안에 작성해야 됨 */
    let hdTop = hd.offsetTop; //header의 Y축 값

    console.log(scrollBar)//축값 보기
    console.log(hdTop)

    if (hdTop < scrollBar) { //hdTop값이 스크롤바보다 적을 때
        hd.classList.add('on'); //hd에 클래스명 on을 붙여주겠다.
    } else { //조건이 맞지 않을 때 (hdTop값 = scrollBar값 같으면)
        hd.classList.remove('on'); //hd에 클래스명 on을 제거
    }
}