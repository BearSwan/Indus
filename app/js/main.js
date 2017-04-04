$(document).ready(function(){
    $('.burg-wrapper').click(function () {
        $('.aside').toggleClass('aside-hidden');
    })
    $('.nav').click (function () {
        $('.menu-nav').toggle();
    })
    $('.comp').click (function () {
        $('.menu-components').toggle();
    })
});
