$(document).ready(function () {
    // "use strict";

    $(".see-more").on('click', function (e) {
        e.preventDefault();
        $(this).prev("span").slideDown();
        $(this).hide();
    })

    // Mobile menu toggler
    $toggler = $('.mobile-menu__toggler');
    $toggler.on('click', function () {
        $('nav.menu').toggle();
    });

    // Sticky Header

    var $win = $(window);
    var num = 90; //number of pixels before modifying styles

    $win.bind('scroll', function () {
        if ($win.width() >= 992) {
            var $navbar = $('#header');
            if ($win.scrollTop() > num) {
                $navbar.addClass('sticky__header');
            } else {
                $navbar.removeClass('sticky__header');
            }
        }
    });



});