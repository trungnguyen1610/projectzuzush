

var mySwiper1 = new Swiper('.swiper-container.s1', {
  
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  })
  
  var mySwiper2 = new Swiper('.swiper-container.s2', {
    effect: 'fade',
      speed: 500,
       autoplay: {
      delay: 5000,
   },
  })
  // aos animation start
  AOS.init();
  // aos animation end
  $(window).scroll(function() {    
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