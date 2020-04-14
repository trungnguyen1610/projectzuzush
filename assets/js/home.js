// js header - start 





  

$("#luxbar-hamburger").on("click", function (e) {
 
    $(".vsi-header__menu-btn-mb").toggleClass("vsi-header__menu-btn-mb-show");
 
    $(".vsi-header__menu-item-opacity").toggleClass("vsi-header__menu-item-opacity-show");
    setTimeout(function () {
            $(".vsi-my-navbarNav-footer-mobile").toggleClass("vsi-my-navbarNav-footer-mobile-show");
            

    }, 250);

    setTimeout(function () {
            $(".vsi-header_menu-test").toggleClass("vsi-header_menu-test-show");
           
            $(".vsi-header__menu-item").toggleClass("vsi-header__menu-item-show");

    }, 1000);
    


});

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

// js header - end

// js footer - start 
// js footer - end 

// js banner - start
var swiper = new Swiper('.swiper-container');
// js banner - end

// Difference - start
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
// Difference - end

// Solution - start
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

 // Solution - end


  /* Vision fe2 -start */
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".rec.orange").addClass("run1");
    } 
    if (scroll >= 500) {
      $(".rec.brown").addClass("run2");
    }
});

/*vision fe2 -end */
