// js header - start 
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.vsi-fe3-my-header').addClass("vsi-fe3__header--animation");
     }
    else
     {
      $('.vsi-fe3-my-header').removeClass("vsi-fe3__header--animation");
     }
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