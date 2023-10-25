//popup
window.onload = function(){
    let loadingPage = document.getElementsByClassName('loading')[0];

    setTimeout(function(){
        loadingPage.style.display = 'none'
    },1000)
}

// $('.popup1').hide();
$('.hover1').mouseenter(function () {
    $('.popup1').fadeIn();
})
$('.popup1').mouseleave(function () {
    $('.popup1').fadeOut();
})

$('.popup2').hide();
$('.hover2').mouseenter(function () {
    $('.popup2').fadeIn();
})
$('.popup2').mouseleave(function () {
    $('.popup2').fadeOut();
})

$('.popup3').hide();
$('.hover3').mouseenter(function () {
    $('.popup3').fadeIn();
})
$('.popup3').mouseleave(function () {
    $('.popup3').fadeOut();
})

// $('.popup4').hide();
$('.hover4').mouseenter(function () {
    $('.popup4').fadeIn();
})
$('.popup4').mouseleave(function () {
    $('.popup4').fadeOut();
})
//popup end

//main_week swiper
var swiper = new Swiper('.swiper-container', {
    rewind: true,
    centeredSlides: true,
    speed: 500,
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    loopedSlides: 2,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//mainbook
var swiper = new Swiper('.swiper-book', {
    slidesPerView: 3,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//mainbook_ slide hover stop
$('.swiper-slide').on('mouseover', function () {
    swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function () {
    swiper.autoplay.start();
});


//mainbook end

//mainpoet
$(function () {
    let menu = $('.tab_menu li'); //클래스명 탭메뉴안에 있는 li
    let bar = $('.bar');

    menu.click(function () {
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
            'left': moveLeft,
        }, 200) //animate - 이동

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

})
// poet jquery end

//text_event
$(function () {
    //변수작성
    let text = $('.text_event>div');
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
    setInterval(textSlide, 5000); //반복작용
})
// text_event jquey end

//art order
$(function () {
    let item = $('.port_item');
    let cont01Img = $('.art_list>figure img');

    //추가
    let artFigure = $('.target_box>img')

    item.click(function () {
        console.log($(this).index());

        let imgIndex = $(this).index() + 1;
        cont01Img.attr('src', 'images/main/main_art/main_painting_' + imgIndex + '.jpg');

        item.mouseover(function () {
            $('.title').css({
                'color': '#white',
            })

            $('.title').eq($(this).index()).css({
                'color': 'white',
                'background-color': '#081120',
            })
        })

        //추가
        artFigure.removeClass('target')
        artFigure.eq($(this).index()).addClass('target');
        cont01Img.attr('src', 'images/main/main_art/main_painting_' + imgIndex + '.jpg');

        $(".target_box")
            .on('mousemove', magnify)
            .prepend("<div class='magnifier'></div>")
            .children('.magnifier').css({
                "background": "url('" + $(".target").attr('src') + "') no-repeat"
            });


        var target = $('.target');
        var magnifier = $('.magnifier');

        function magnify(e) {

            // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
            var mouseX = e.pageX - $(this).offset().left;
            var mouseY = e.pageY - $(this).offset().top;

            // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
            if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
                magnifier.fadeIn(100);
            } else {
                magnifier.fadeOut(100);
            }

            //돋보기가 존재할 때
            if (magnifier.is(":visible")) {

                /* 이미지에 대한 마우스 포인터 아래의 픽셀 비율(본래 이미지 크기에 대한)을 얻고 
                이를 사용하여 돋보기 내부에 큰 이미지를 배치한다. */
                var rx = -(mouseX / target.width() * target[0].naturalWidth - magnifier.width() / 2);
                var ry = -(mouseY / target.height() * target[0].naturalHeight - magnifier.height() / 2);

                //돋보기를 마우스 위치에 따라 움직인다.
                //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
                var px = mouseX - magnifier.width() / 2;
                var py = mouseY - magnifier.height() / 2;

                //적용
                magnifier.css({
                    left: px,
                    top: py,
                    backgroundPosition: rx + "px " + ry + "px"
                });
            }
        }

    })//click

    item.mouseleave(function () {
        $('.title').eq($(this).index()).css({
            'background-color': 'white',
            'color': '#081120'
        })
    })//mouseleave

})
// art jquery end

