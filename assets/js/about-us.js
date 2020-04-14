
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
  $('body').bind('touchmove', function (e) { e.preventDefault() })
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



$('.vsi-fe1-count-number').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 2000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }

    });

});

$(".vsi-fe1-show").hover(
  function () {
    $(this).addClass("vsi-fe1-active");
  },
  function () {
    $(this).removeClass("vsi-fe1-active");
  }
);

$(document).ready(function () {
  $(".vsi-fe1-show").hover(function () {
    $(this).find('.vsi-fe1-text-content').addClass("vsi-fe1-active-text");
  }, function () {
    $(this).find('.vsi-fe1-text-content').removeClass("vsi-fe1-active-text");
  });
});

$(document).ready(function () {
  $(".vsi-fe1-show").hover(function () {
    $(this).find('.vsi-fe1-icon-down').addClass("vsi-fe1-icon-block");
  }, function () {
    $(this).find('.vsi-fe1-icon-down').removeClass("vsi-fe1-icon-block");
  });
});
$('[data-toggle="popover"]').popover({
  title: "GeeksforGeeks",
  trigger: "hover"
});

