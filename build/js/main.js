$(function(){
	if($(window).width() > 767){
		new WOW().init();
	}
	$('.burger').click(function(){
		$(this).toggleClass('active')
		$('.menu').fadeToggle()
	})
})