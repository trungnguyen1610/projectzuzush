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

// $( "#trigger-button" ).click(function() {
//    $( "#vsi-fe3-btn-menu" ).trigger( "click" );
   
//  });

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
 
 // js footer - start 
 // js footer - end 

 // js banner - start
 var swiper = new Swiper('.swiper-container');
 // js banner - end

 // Difference - start
 $(document).ready(function($) {
	$(".tags a").hover(function() {
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
 $(window).scroll(function() {

    if ($(this).scrollTop()>1000)
     {
        $('.vsi-fe3-animate-left-1').addClass("vsi-fe3-our-solutions__left-1");
     }
   
     if ($(this).scrollTop()>1000)
     {
        $('.vsi-fe3-animate-left-2').addClass("vsi-fe3-our-solutions__left-2");
     }
     if ($(this).scrollTop()>1000)
     {
        $('.vsi-fe3-animate-right-1').addClass("vsi-fe3-our-solutions__right-1");
     }
     if ($(this).scrollTop()>1000)
     {
        $('.vsi-fe3-animate-right-2').addClass("vsi-fe3-our-solutions__right-2");
     }
 });
 // Solution - end