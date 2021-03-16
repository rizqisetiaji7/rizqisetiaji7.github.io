// Animated on Scroll Initial
AOS.init({
	duration: 1200,
	easing: 'ease',
	once: true,
	mirror: true,
	anchorPlacement: 'top-bottom'
});


$(window).scroll(function () {
	let offsetTop = $(this).scrollTop();
	// console.log(offsetTop);
	if (offsetTop > 450) {
		$('#header .navbar').addClass('navbar-scrolled');
	} else {
		$('#header .navbar').removeClass('navbar-scrolled');
	}
})