//메인팝업!!
$('.popup1').hide();
$('.hover1').mouseenter(function(){
    $('.popup1').fadeIn();
})
$('.popup1').mouseleave(function(){
    $('.popup1').fadeOut();
})

$('.popup2').hide();
$('.hover2').mouseenter(function(){
    $('.popup2').fadeIn();
})
$('.popup2').mouseleave(function(){
    $('.popup2').fadeOut();
})

$('.popup3').hide();
$('.hover3').mouseenter(function(){
    $('.popup3').fadeIn();
})
$('.popup3').mouseleave(function(){
    $('.popup3').fadeOut();
})

$('.popup4').hide();
$('.hover4').mouseenter(function(){
    $('.popup4').fadeIn();
})
$('.popup4').mouseleave(function(){
    $('.popup4').fadeOut();
})










//text_event
$(function () {
    //변수작성
    let text = $('.text_event p');
    let i = 0;
    function textSlide() {
        //함수작성
        i++;
        //
        if (i >= text.length) {
            i = 0;
        }
        text.removeClass('on');
        text.eq(i).addClass('on');
    }
    textSlide(); //텍스트 슬라이드를 실행하겠다!
    setInterval(textSlide, 1000); //반복작용


})// text_event jquey end


//시 부분!!
$(function(){
    let menu = $('.tab_menu li'); //클래스명 탭메뉴안에 있는 li
    let bar = $('.bar');

    menu.click(function(){
        //위치메서드 offset, position
        //offset() : 브라우저기준 x축,y축
        //position() : 부모포지션기준 x축,y축, position이 없다면 body 기준
        //position().top, position().left
        //위 , 왼쪽에서 얼마나 떨어진건지 찾을 수 있음

        console.log($(this).position().left)
        //내가 선택한 곳의 position left값 찾아내

        let moveLeft = $(this).position().left
        //변수명 bar에게 left값을 내가 클릭한 요소의 왼쪽에서 떨어진 위치값으로 적용해줄거임

        bar.animate({
            'left' : moveLeft,
        },200) //animate - 이동

        //figure에게 클래스명 제어
        let figure = $('figure');



        //내가 클릭한 li(=this)의 index값을 찾아서
        //console = 내가보려고 만든 태그, 없어도 됨
        console.log($(this).index());
        
        figure.removeClass('on');
        //그 index값과 동일한 순서를 가진 figure에게 = eq($(this).index()) = 순서 찾는 값
        //eq(1),eq(2) = 순서선택자
        //클래스명 on 추가 => addClass()
        figure.eq($(this).index()).addClass('on');

        //이렇게 하면 on을 붙여놓은 1번째 figure가 계속 나타나니까
        //addclass위에 removeclass 먼저 실행시켜주기!
        
        //eq($(this).index()) <<제이쿼리에서 多用

    })//menu.click

})// 시 부분! jquery end




//미술부분
$(function () {
    let item = $('.item');
    let cont01Img = $('.list > figure img'); //직계만 적용되도록 꺽새추가!

    item.mouseenter(function () {
        //콘솔을 통해 마우스 올린 선택자의 인덱스값을 알 수 있음
        console.log($(this).index());

        let imgIndex = $(this).index() + 1;
        //변수 잡기 = this의 index값이 불러와질거
        cont01Img.attr('src', 'img/main/메인_painting/main_painting_' + imgIndex + '.jpg');
        //파일명

        $('h4').css({
            'color': '#white',
        })
        //↓↓↓↓↓ 우선 h4의 css(스타일) 컬러값을 다 회색으로 만든 다음
        //내가 선택한 곳만 red로 변경되게!

        $('h4').eq($(this).index()).css({ //eq 순서값!!
            'color': 'white',
            'background-color': '#081120',
        })


    })//mouseenter


    item.mouseleave(function () {
        $('h4').eq($(this).index()).css({
            'background-color': 'white',
            'color': '#202020'
        })
    })//mouseleave

})// 미술부분 jquery end



//추가기능
// (function(){

	
// 	$.fn.smint = function( options ) {

// 		// 사용자 div에 클래스 추가
// 		$(this).addClass('smint')

// 		var settings = $.extend({
//             'scrollSpeed '  : 500
//             }, options);


// 		return $('.smint a').each( function() {

            
// 			if ( settings.scrollSpeed ) {

// 				var scrollSpeed = settings.scrollSpeed

// 			}
//        	$(this).on('click', function(e){


// 				// 사용자 div의 높이를 가져옵니다. 이것은 스크롤을 해제하는 데 사용되므로 emenu가 처음 스크롤 한 div의 내용과 겹치지 않습니다.
// 				var selectorHeight = $('.smint').height();   

//         		// 클릭하면 페이지 점프를 만드는 빈 hrefs 중지
// 				e.preventDefault();

// 				// 방금 클릭 한 버튼의 ID를 가져옵니다.
// 		 		var id = $(this).attr('id');
				
// 				// 버튼 ID에서 탐색 메뉴의 높이를 뺀 것과 일치하는 div 클래스의 상단에서 거리를 가져옵니다. 이것은 탐색이 처음에 내용과 겹치지 않음을 의미합니다.
// 				var goTo =  $('div.'+ id).offset().top -selectorHeight;
				
// 				// 페이지를 원하는 위치로 스크롤하십시오!
// 				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);
// 			});	          
// 		});
// 	}
// })();



$(window).scroll(function(){
    var height = $(window).scrollTop();

    // $('.top').hide();

    console.log(height)

    if (height > 700) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

// window.onload = function (){
//     let height = $(window).scrollTop();
//     let topBtn = document.getElementsByClassName('top')[0];

//     $('topBtn').hide();

//     if (height > 100){
//         $('.topBtn').fadeIn();
//     }else {
//         $('.topBtn').fadeOut();
//     }
// }