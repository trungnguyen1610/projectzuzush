// js header - start 
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
 
 
 
  $("#vsi-fe3-btn-menu").click(function () {     
      console.log("a");
    if ( !$(".vsi-fe3-menu-mobile--hide").hasClass("vsi-fe3-menu-mobile--show")) {
        $(".vsi-fe3-menu-mobile--hide").addClass("vsi-fe3-menu-mobile--show");
    } 
    else if ($(".vsi-fe3-menu-mobile--hide").hasClass("vsi-fe3-menu-mobile--show")) {
        $(".vsi-fe3-menu-mobile--hide").removeClass("vsi-fe3-menu-mobile--show");
    }
 });
 
 
   var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");
     // Do something else, like open/close menu
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