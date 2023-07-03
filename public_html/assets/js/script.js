$(document).ready(function () {

    $(".cbailylaw__see-more").on('click', function (e) {
        e.preventDefault();
        $(this).prev("span").slideDown();
        $(this).hide();
    })

    // Mobile menu toggler
    $toggler = $('.cbailylaw__mobile-menu__toggler');
    $toggler.on('click', function () {
        $('nav.cbailylaw__menu').toggle();
    });



});