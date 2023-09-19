$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/svgElements/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/svgElements/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parents().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="../images/svgElements/arrow-left-black.svg" alt="arrow"></button>',
        nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="../images/svgElements/arrow-right-black.svg" alt="arrow"></button>'
    })

    $('.product__item-favorite').on('click', function() {
        $(this).toggleClass('product__item-favorite--active');
    })

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function()  {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });

    $('.js-range-slider').ionRangeSlider({
        type: 'double',
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product__item-wrapper').removeClass('product__item-wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product__item-wrapper').addClass('product__item-wrapper--list');
    });

    $('.rate-yo').rateYo({
        starWidth: '23px',
        starHeight: '23px',
        spacing: "7px",
        normalFill: "#c4c4c4",
        ratedFill: "#1C62CD"
    });

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });
});

