$(function(){
	$(".top__banner__slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		responsive: [
			{
				breakpoint: 424,
				settings: {
					dots: false
				}
			}
		]
	});
	
	$(".gallery__slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		responsive: [
			{
				breakpoint: 424,
				settings: {
					dots: false
				}
			}
		]
	});
	
})