$(window).scroll(function () {

    if ($(this).scrollTop() > 0) {
        $('.vsi-fe3-my-header').addClass("vsi-fe3__header--animation");
    }
    else {
        $('.vsi-fe3-my-header').removeClass("vsi-fe3__header--animation");
    }
});



$("#vsi-fe3-btn-menu").click(function () {
    $(".vsi-fe3-my-navbarNav-mobile").addClass("vsi-fe3-animation-menu-mobile ");
});

$("#vsi-fe3-btn-menu").click(function () {     
    if ( !$(".vsi-fe3-my-navbar-mobile-hide").hasClass("vsi-fe3-my-navbar-mobile-show")) {
        $(".vsi-fe3-my-navbar-mobile-hide").addClass("vsi-fe3-my-navbar-mobile-show");
    } 
    else if ($(".vsi-fe3-my-navbar-mobile-hide").hasClass("vsi-fe3-my-navbar-mobile-show")) {
        $(".vsi-fe3-my-navbar-mobile-hide").removeClass("vsi-fe3-my-navbar-mobile-show");
    }
});

$("#vsi-fe3-btn-menu").click(function () {     
    if ( !$(".vsi-fe3-my-navbarNav-footer-mobile-hide").hasClass("vsi-fe3-my-navbarNav-footer-mobile-show")) {
        $(".vsi-fe3-my-navbarNav-footer-mobile-hide").addClass("vsi-fe3-my-navbarNav-footer-mobile-show");
    } 
    else if ($(".vsi-fe3-my-navbarNav-footer-mobile-hide").hasClass("vsi-fe3-my-navbarNav-footer-mobile-show")) {
        $(".vsi-fe3-my-navbarNav-footer-mobile-hide").removeClass("vsi-fe3-my-navbarNav-footer-mobile-show");
    }
});

