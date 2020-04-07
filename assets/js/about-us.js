$('.vsi-fe1-count-number').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
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

$(document).ready(function() {     
  $(".vsi-fe1-show").hover(function() {
      $(this).find('.vsi-fe1-text-content').addClass("vsi-fe1-active-text");    
  }, function() {    
      $(this).find('.vsi-fe1-text-content').removeClass("vsi-fe1-active-text");     
  });
});

$(document).ready(function() {     
  $(".vsi-fe1-show").hover(function() {
      $(this).find('.vsi-fe1-icon-down').addClass("vsi-fe1-icon-block");    
  }, function() {    
      $(this).find('.vsi-fe1-icon-down').removeClass("vsi-fe1-icon-block");     
  });
});
$('[data-toggle="popover"]').popover({ 
  title: "GeeksforGeeks", 
  trigger: "hover" 
}); 
