// event pada saat link di klik
$('.page-scroll').on('click', function() {

	// ambil atribut
	var target = $(this).attr('href');
	// elemen yg bersangkutan
	target = $(target);

	// efect scroll smooth
	$('html, body').animate({
		scrollTop : target.offset().top
	}, 1000);

});


// parallax
// about
$(window).on('load', function() {
	$('.ptengah').addClass('pmuncul');
	$('.bagian-kiri').addClass('bMuncul');
	$('.bagian-kanan').addClass('bMuncul');
});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
	});

	$('.jumbotron .sosmed').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	if (wScroll > $('.portfolio').offset().top - 230) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
				
			}, 350 * (i+1));
		});

	}

});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// page-scroll
	if (wScroll < 550 ) {
		$('.scroll-top').addClass('muncul');
	}

	$('.scroll-top').css({
		'transform' : 'translate(0px, '+ wScroll/9 +')'
	});

});

