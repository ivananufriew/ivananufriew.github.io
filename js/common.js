$(function() {

	$('.portfolio_items').owlCarousel({
		items	: 1,
		autoWidth: true,
		itemsDesktop: [1280, 1],
		itemsDesktopSmall: [1024, 1],
		itemsTablet: [992, 1],
		itemsTabletSmall: [768, 1],
		itemsMobile: [480, 1],
		navigation	: true,
		navigationText : "",
		navSpeed : true,
		center : false,
		responsive : false,
		loop			 : true
	});


	$('.zoom').magnificPopup({
		type : 'image'
	});


});
