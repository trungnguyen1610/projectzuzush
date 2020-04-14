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
  $('body').toggleClass('overflow-hidden');
  $('body').bind('touchmove', function(e){e.preventDefault()})
  $('body').unbind('touchmove')

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



var mySwiper1 = new Swiper('.swiper-container.s1', {


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
})
var mySwiper2 = new Swiper('.swiper-container.s2', {
  effect: 'fade',
  autoplay: 2000,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1
})

// aos animation start

AOS.init({
  once: true
});
// aos animation end
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("#animateMe1").addClass("run");
  }
  if (scroll >= 100) {
    $("#animateMe2").addClass("run");
  }
  if (scroll >= 100) {
    $("#animateMe3").addClass("run");
  }
  if (scroll >= 100) {
    $("#animateMe4").addClass("run");
  }
  if (scroll >= 100) {
    $("#animateMe5").addClass("run");
  }
  if (scroll >= 1000) {
    $(".vsi-fe2-navbar-follow-section").addClass("sickybar");
  } else {
    $(".vsi-fe2-navbar-follow-section").removeClass("sickybar");
  }
  if (scroll >= 2000) {
    $("#animateMe6").addClass("run");
  }
  if (scroll >= 2000) {
    $("#animateMe7").addClass("run");
  }
  if (scroll >= 2500) {
    $("#animateMe8").addClass("run");
  }
  if (scroll >= 2500) {
    $("#animateMe9").addClass("run");
  }
  if (scroll >= 2500) {
    $("#animateMe10").addClass("run");
  }
  if (scroll >= 4000) {
    $("#animateMe11").addClass("run");
  }
  if (scroll >= 4000) {
    $("#animateMe12").addClass("run");
  }
  if (scroll >= 4000) {
    $("#animateMe13").addClass("run");
  }
  if (scroll >= 4000) {
    $("#animateMe14").addClass("run");
  }
});
/* Mobile changing text-start */
function js_change_active(i = 1) {
  i = i <= 1 ? 1 : i;
  i = i > 3 ? 1 : i;
  switch (i) {
    case 1:
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(4)").removeClass("active");
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(2)").addClass("active");
      break;
    case 2:
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(2)").removeClass("active");
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(3)").addClass("active");
      break;
    case 3:
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(3)").removeClass("active");
      $(".vsi-fe2-our-solutions-management-details-mb-item").find(".content:nth-child(4)").addClass("active");
      break;
    default:
      break;
  }
  setTimeout(function () {
    js_change_active(i + 1);
  }, 2000);
}
$(document).ready(function () {
  js_change_active();
});
function js_change_active1(i = 1) {
  i = i <= 1 ? 1 : i;
  i = i > 2 ? 1 : i;
  switch (i) {
    case 1:
      $(".vsi-fe2-our-solutions-analytics-lottie-show-right").find(".img-right:nth-child(1)").removeClass("active");
      $(".vsi-fe2-our-solutions-analytics-lottie-show-right").find(".img-right:nth-child(2)").addClass("active");
      break;
    case 2:
      $(".vsi-fe2-our-solutions-analytics-lottie-show-right").find(".img-right:nth-child(2)").removeClass("active");
      $(".vsi-fe2-our-solutions-analytics-lottie-show-right").find(".img-right:nth-child(1)").addClass("active");
      break;
    default:
      break;
  }
  setTimeout(function () {
    js_change_active1(i + 1);
  }, 4500);
}
$(document).ready(function () {
  js_change_active1();
});
/* Mobile changing text-end */
/*menu follow section start */
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('selected');
    })
    $(this).addClass('selected');
    var target = this.hash,
      menu = target;
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 600, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.vsi-fe2-navbar-follow-section-menu a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.vsi-fe2-navbar-follow-section-menu a').removeClass("selected");
      currLink.addClass("selected");
    }
    else {
      currLink.removeClass("selected");
    }
  });
}
/*menu follow section end */
$("#toggleMobileMenu").click(function () {
  $("#vsi-fe2-menu-center").toggle("slow", function () {
    // Animation complete.
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $('#RevenueManagement').offset().top
    && $(window).scrollTop() < $('#RevenueManagement').offset().top + $('#RevenueManagement').outerHeight(true)
  ) {
    $('#textChanging').text('Revenue Management');
  }
  if ($(window).scrollTop() > $('#InsightsAnalytics').offset().top
    && $(window).scrollTop() < $('#InsightsAnalytics').offset().top + $('#InsightsAnalytics').outerHeight(true)
  ) {
    $('#textChanging').text('Insights Analytics');
  }
  if ($(window).scrollTop() > $('#ChannelManagement').offset().top
    && $(window).scrollTop() < $('#ChannelManagement').offset().top + $('#ChannelManagement').outerHeight(true)
  ) {
    $('#textChanging').text('Channel Management');
  }
  if ($(window).scrollTop() > $('#PropertyManagement').offset().top
    && $(window).scrollTop() < $('#PropertyManagement').offset().top + $('#PropertyManagement').outerHeight(true)
  ) {
    $('#textChanging').text('Property Management');
  }
  if ($(window).scrollTop() > $('#ReputationManagement').offset().top
    && $(window).scrollTop() < $('#ReputationManagement').offset().top + $('#ReputationManagement').outerHeight(true)
  ) {
    $('#textChanging').text('Reputation Management');
  }
});
/* Header-start */
