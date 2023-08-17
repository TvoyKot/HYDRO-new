$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/svgElements/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/svgElements/arrow-right.svg" alt="arrow"></button>'
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

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
});

