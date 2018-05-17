$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage'],
		menu: '#js-Menu',
		autoScrolling: false,
		scrollingSpped: 50,
        bigSectionsDestination: top,
        paddingTop: '10px',
        paddingBottom: '10px',
	});

	$(window).on('scroll',function(){
		var scrolldistance = $(window).scrollTop();
		var $header = $(".js-header");
		if (scrolldistance > 300) {
			$header.addClass("header-scrolling");
		} else {
			$header.removeClass("header-scrolling");
		}
	})

	var rellax = new Rellax('.rellax',{
		center: true
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText:[],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
        	items:4
        },
        1600:{
            items:5
        }
    }
})
});