$(document).ready(function(){

	// add hide-item class to hide navigation menu
	$('#search').click(function(){
		$('.menu-item').addClass('hide-item');
		$('.search-form').addClass('active');
		$('.close').addClass('active');
		$('#search').fadeOut();
	});

	// remove hide class 
	$('#close').click(function(){
		$('.menu-item').removeClass('hide-item');
		$('.search-form').removeClass('active');
		$('.close').removeClass('active');
		$('#search').fadeIn();
	});
});