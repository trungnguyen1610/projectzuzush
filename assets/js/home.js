/* vsi-fe3 - strat */

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        if (!$(".vsi-fe3-header-animation").hasClass("vsi-fe3-header-animation-hide")) {
            $(".vsi-fe3-header-animation").addClass("vsi-fe3-header-animation-hide");
            $(".vsi-fe3-header-animation").removeClass("vsi-fe3-header-animation-show");
        }
    } else {
        if (!$(".vsi-fe3-header-animation").hasClass("vsi-fe3-header-animation-show")) {
            $(".vsi-fe3-header-animation").removeClass("vsi-fe3-header-animation-hide");
            $(".vsi-fe3-header-animation").addClass("vsi-fe3-header-animation-show");
        }
    }
    lastScrollTop = st;
});


var lastScrollTopMB = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTopMB) {
        if (!$(".vsi-fe3-header-mobile-animation").hasClass("vsi-fe3-header-mobile-animation-hide")) {
            $(".vsi-fe3-header-mobile-animation").addClass("vsi-fe3-header-mobile-animation-hide");
            $(".vsi-fe3-header-mobile-animation").removeClass("vsi-fe3-header-mobile-animation-show");
        }
    } else {
        if (!$(".vsi-fe3-header-mobile-animation").hasClass("vsi-fe3-header-mobile-animation-show")) {
            $(".vsi-fe3-header-mobile-animation").removeClass("vsi-fe3-header-mobile-animation-hide");
            $(".vsi-fe3-header-mobile-animation").addClass("vsi-fe3-header-mobile-animation-show");
        }
    }
    lastScrollTopMB = st;
});

$("#btn-test").click(function () {
    $("#vsi-fe3-btn-menu").trigger("click");

});

$("#vsi-fe3-btn-menu").click(function () {
    $(".vsi-fe3-my-navbarNav-mobile").addClass("vsi-fe3-animation-menu-mobile ");
});

$("#vsi-fe3-btn-menu").click(function () {
    if (!$(".vsi-fe3-my-navbar-mobile-hide").hasClass("vsi-fe3-my-navbar-mobile-show")) {
        $(".vsi-fe3-my-navbar-mobile-hide").addClass("vsi-fe3-my-navbar-mobile-show");

    }
    else if ($(".vsi-fe3-my-navbar-mobile-hide").hasClass("vsi-fe3-my-navbar-mobile-show")) {
        $(".vsi-fe3-my-navbar-mobile-hide").removeClass("vsi-fe3-my-navbar-mobile-show");
    }
});

$("#vsi-fe3-btn-menu").click(function () {
    if (!$(".vsi-fe3-my-navbarNav-footer-mobile-hide").hasClass("vsi-fe3-my-navbarNav-footer-mobile-show")) {
        $(".vsi-fe3-my-navbarNav-footer-mobile-hide").addClass("vsi-fe3-my-navbarNav-footer-mobile-show");
    }
    else if ($(".vsi-fe3-my-navbarNav-footer-mobile-hide").hasClass("vsi-fe3-my-navbarNav-footer-mobile-show")) {
        $(".vsi-fe3-my-navbarNav-footer-mobile-hide").removeClass("vsi-fe3-my-navbarNav-footer-mobile-show");
    }
});

$("#vsi-fe3-btn-menu").click(function () {
    if (!$(".vsi-fe3-menu-mobile--hide").hasClass("vsi-fe3-menu-mobile--show")) {
        $(".vsi-fe3-menu-mobile--hide").addClass("vsi-fe3-menu-mobile--show");
        $(".vsi-fe3-header-mobile-animation").removeClass("vsi-fe3-header-mobile-animation-show");
        $(".vsi-fe3-header-animation").removeClass("vsi-fe3-header-animation-show");
    }
    else if ($(".vsi-fe3-menu-mobile--hide").hasClass("vsi-fe3-menu-mobile--show")) {
        $(".vsi-fe3-menu-mobile--hide").removeClass("vsi-fe3-menu-mobile--show");
    }
});

var $hamburger1 = $("#vsi-fe3-btn-menu");
var $hamburger2 = $("#btn-test");
$hamburger1.on("click", function (e) {

    setTimeout(function () {
        $hamburger1.toggleClass("is-active");
        $hamburger2.toggleClass("is-active");
        
    }, 10);
});

var swiper = new Swiper('.swiper-container');
$(document).ready(function ($) {
    $(".tags a").hover(function () {
        $(".tab-content").hide();
        $(".tags a").removeClass('active');
        $(this).addClass("active");
        var selected_tab = $(this).attr("href");
        $(selected_tab).show();
        return false;
    });
});
$(window).scroll(function () {

    if ($(this).scrollTop() > 1000) {
        $('.vsi-fe3-animate-left-1').addClass("vsi-fe3-our-solutions__left-1");
    }

    if ($(this).scrollTop() > 1000) {
        $('.vsi-fe3-animate-left-2').addClass("vsi-fe3-our-solutions__left-2");
    }
    if ($(this).scrollTop() > 1000) {
        $('.vsi-fe3-animate-right-1').addClass("vsi-fe3-our-solutions__right-1");
    }
    if ($(this).scrollTop() > 1000) {
        $('.vsi-fe3-animate-right-2').addClass("vsi-fe3-our-solutions__right-2");
    }
});

/* vsi-fe3 - end */