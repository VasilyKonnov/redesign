
$(function(){

    $(".phone-mask").inputmask({"mask": "+3 (999) 999 9999"});

    //$(".hmenu_mbtn--category").click(function(e){$(".hmenu_mbtn--category").toggleClass("active")});

    // Раскрываем меню с категориями

    $(".hmenu_mbtn--category").click(function(){
        $('.popup-for-category').addClass('active');
    });
    $(".hmenu_mbtn--modal").click(function(){
        $('.popup-for-category').removeClass('active');
    });

    $('.popup-category--item').click(function(e) {

        if($(this).siblings('.inner-category').hasClass('active')){
            $(this).siblings('.inner-category').removeClass('active');
        }else{
            $('.inner-category').removeClass('active');
            $(this).siblings('.inner-category').addClass('active');
        }

    });

    $('.sidebar-category--item-wrapper').click(function(e) {
        console.log('Сработал клик!');
        if($(this).siblings('.inner-category').hasClass('active')){
            $(this).siblings('.inner-category').removeClass('active');
            console.log('Сработал клик 2!');
        }else{
            $('.inner-category').removeClass('active');
            $(this).siblings('.inner-category').addClass('active');
            console.log('Сработал клик 3!');
        }

    });


    $(".hmenu_mbtn").click(function(e){$("body").toggleClass("no-scroll")})

    $('.first-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: true,
        appendArrows: $('.first-slider--controll'),
        appendDots: $('.first-slider--controll'),
        focusOnSelect: false,	//Enable focus on selected element (click)
        //nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
        prevArrow:'<button type="button" class="slick-prev custom-slick-prev"></button>',
        swipe:true,
        swipeToSlide:true,
        touchMove:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 300
    });

    $('.first-slider--controll').append('<button type="button" class="custom-slick-next"></button>');
    $('.custom-slick-next').click(function(){
        $('.slick-next').click();
    });


    if($(window).width() <= 1400){
        var resize = $(window).width() - 375;
        $('.first-slider--item').width(resize);
        $('.first-slider--wrapper').width(resize);
    }
    if($(this).width() <= 1000){
        resize = $(window).width() - 40;
        $('.first-slider--item').width(resize);
        $('.first-slider--wrapper').width(resize);
    }

    $(window).resize(function(){
        if($(this).width() <= 1400){
            var resize = $(window).width() - 375;
            $('.first-slider--item').width(resize);
            $('.first-slider--wrapper').width(resize);
        }
        if($(this).width() <= 1000){
            resize = $(window).width() - 40;
            $('.first-slider--item').width(resize);
            $('.first-slider--wrapper').width(resize);
        }
    });

// Липкий хедер

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 35) {
            //alert('Прокрутили документ более 50px');
            $(".header").addClass("scroll-header");
        }else {
            $(".header").removeClass("scroll-header");
            //alert('Вернули в исходное состояние');
        }

    });

//Скрываем и показываем header при скроле страницы


    var currentScroll = $(window).scrollTop();

    function fixedHeader() {

        var newScroll = $(window).scrollTop();
        console.log(newScroll);

        if (newScroll > 300) {
            $('.header').addClass('hide');
        } else {
            $('.header').removeClass('hide');
        }

        console.log('currentScroll = ' + currentScroll);

        //проверяем направление скрола
        if (newScroll < currentScroll) {
            //scrolling up
            $('.header').addClass('show');
        } else if (newScroll > currentScroll) {
            //scrolling down
            $('.header').removeClass('show');
        }

        currentScroll = newScroll;
    }

    $(window).on('scroll', function(){
        fixedHeader();
    });

// Категории слайдеров

    $('.goods_slick-1').slick({
        appendArrows: $('.goods_slick-arrows-1'),
        /*appendDots:$('..slick .slick-controls .dots'),*/
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        dots:false,
        focusOnSelect: false,	//Enable focus on selected element (click)
        nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
        prevArrow:'<button type="button" class="slick-prev"><i class="icon-left-open"></i></button>',
        swipe:true,
        swipeToSlide:true,
        touchMove:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1850,
            settings: {
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 1485,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.goods_slick-2').slick({
        appendArrows: $('.goods_slick-arrows-2'),
        /*appendDots:$('..slick .slick-controls .dots'),*/
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        dots:false,
        focusOnSelect: false,	//Enable focus on selected element (click)
        nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
        prevArrow:'<button type="button" class="slick-prev"><i class="icon-left-open"></i></button>',
        swipe:true,
        swipeToSlide:true,
        touchMove:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1850,
            settings: {
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 1485,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.goods_slick-3').slick({
        appendArrows: $('.goods_slick-arrows-3'),
        /*appendDots:$('..slick .slick-controls .dots'),*/
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        dots:false,
        focusOnSelect: false,	//Enable focus on selected element (click)
        nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
        prevArrow:'<button type="button" class="slick-prev"><i class="icon-left-open"></i></button>',
        swipe:true,
        swipeToSlide:true,
        touchMove:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1850,
            settings: {
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 1485,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.goods_slick-4').slick({
        appendArrows: $('.goods_slick-arrows-4'),
        /*appendDots:$('..slick .slick-controls .dots'),*/
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        dots:false,
        focusOnSelect: false,	//Enable focus on selected element (click)
        nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
        prevArrow:'<button type="button" class="slick-prev"><i class="icon-left-open"></i></button>',
        swipe:true,
        swipeToSlide:true,
        touchMove:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1850,
            settings: {
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 1485,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});

