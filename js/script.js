/*global $, alert, console */

$(function() {
	'use strict';
	
	// $('html').niceScroll();
	
	/*--------- /Add Scrolled class to navbar -----
	$(window).scroll(function(){
		var navbar = $('nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled  navbar-fixed-top')){
				navbar.addClass('scrolled  navbar-fixed-top');
			}			
		}else{
			navbar.removeClass('scrolled  navbar-fixed-top');
		}
	});*/
	
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".nav-link").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		/*--------- Make Smooth Scroll -----*/
		$('html , body').animate({
			scrollTop : ($($(this).data("link"))).offset().top - 50
		},1500);
		
	
	});
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".navbar .navbar-nav .nav-item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	/*--------- Adjust Slider Height -----
	var WinH = $(window).height(),
		topH = $('.top-area').innerHeight(),
		navH = $('.navbar').innerHeight();*/
	// $('.owl-carousel,.owl-item').height(WinH - (topH + navH));
	

	/*--------- Call Owl Carousel -----*/
	$("#mainSlider").owlCarousel({
		nav:true,
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		navText :['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	});
	/*--------- Call Owl Carousel -----*/
	$("#aboutSlider").owlCarousel({
		loop:true,
		margin:15,
		dots:true, 
		responsiveClass: true, 

		responsive:{
			0:{
				items:1,
				autoplay:true,
				// loop:true

			},
			600:{
				items:2,
				autoplay:true
			},
			1000:{
				items:5
			}
		}
	});
	/*--------- Call Owl Carousel -----*/
	$("#serviceSlider").owlCarousel({
		loop:true,
		rtl:true,
		dots:false, 
		nav:true,
		responsiveClass: true, 
		navText :['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
		responsive:{
			0:{
				items:1,
				autoplay:true,
				// loop:true

			},
			768:{
				items:2,
				autoplay:true
			}
			
		}
	});
	/*--------- Call Owl Carousel -----*/
	$("#successSlider").owlCarousel({
		loop:true,
		rtl:true, 
		nav:true,
		responsiveClass: true, 
		navText :['<i class="fa fa-chevron-right"></i>','<i class="fa fa-chevron-left"></i>'],
		responsive:{
			0:{
				items:1,
				autoplay:true,
				// loop:true

			},
			496:{
				items:2,
				autoplay:true
			},
			786:{
				items:3,
				autoplay:true
			},
			992:{
				items:4,
				autoplay:true
			},
			1200:{
				items:5,
				autoplay:true
			},
			
		}
	});

	/*--------- make about section at center -----*/
	var winWidth = $(window).width();
	var aboutWidth = $('.about').width();
	var marginLeft = (winWidth - aboutWidth)/2;
	// $('.about').css('left' , marginLeft );
	/*--------- Adjust left on window resizing -----*/
	$(window).resize(function(){
		var winWidth = $(window).width();
		var aboutWidth = $('.about').width();
		var marginLeft = (winWidth - aboutWidth)/2;
		// $('.about').css('left' , marginLeft );
	});
});