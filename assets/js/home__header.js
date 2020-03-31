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