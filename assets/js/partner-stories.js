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
  
   //js main - start

   $(".vsi-fe3-partner-stories--view").click(function () {     
    if ( !$(".vsi-fe3-partner-stories__content--stories-item-right").hasClass("vsi-fe3-partner-stories__content--stories-item-right-show")) {
        $(".vsi-fe3-partner-stories__content--stories-item-right").addClass("vsi-fe3-partner-stories__content--stories-item-right-show");
    } 
    if ( !$(".vsi-fe3-partner-stories--view").hasClass("vsi-fe3-partner-stories--view-hide")) {
        $(".vsi-fe3-partner-stories--view").addClass("vsi-fe3-partner-stories--view-hide");
    } 
 });
   //js main - end


  // js footer - start 
  // js footer - end 