$(document).ready(function() {

	$("[data-fancybox]").hover(function(){
		$(this).css("opacity", "0.8");
	});
	$("[data-fancybox]").mouseleave(function(){
		$(this).css("opacity", "1");
	});
	$("[data-fancybox]").fancybox({
			keyboard: true,
			arrows: true,
			animationEffect: "zoom",
			zoomOpacity: 'auto',
		});

});