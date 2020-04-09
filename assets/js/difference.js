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