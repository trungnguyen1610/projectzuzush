

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