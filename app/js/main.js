$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/svgElements/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/svgElements/arrow-right.svg" alt="arrow"></button>'
    })

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');

        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product__item-favorite').on('click', function() {
        $('.product__item-favorite').toggleClass('product__item-favorite--active');
    })
});

