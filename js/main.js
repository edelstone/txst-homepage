// Initialize accordion

$(".accordion").accordion({
	collapsible: true,
	active: false,
	animate: 300,
	heightStyle: "content",
	alwaysOpen: false,
	active: false
});

$(".accordion-2").accordion({
	collapsible: true,
	active: false,
	animate: 150,
	heightStyle: "content",
	alwaysOpen: false,
	active: false
});

$(".accordion-3").accordion({
	collapsible: true,
	active: false,
	animate: false,
	heightStyle: "content",
	alwaysOpen: false,
	active: false
});

// No delay on mobile tapping

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

// Background image delay and fade 

$(window).load(function() {
    $(".bg_image_3, .bg_image_6").delay(200).animate({
        opacity: "1"
    }, 500);
});

$(window).load(function() {
    $(".bg_image_2, .bg_image_5").delay(0).animate({
        opacity: "1"
    }, 500);
});

// Parallax scrolling effect

$(window).scroll(function(e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $(".bg_image_2, .bg_image_3, .bg_image_5, .bg_image_6").css("top", (scrolled * .6) + "px");
}

// Fixed desktop navigation

$(document).ready(function() {
    $('.top_nav').scrollToFixed();
});

// Back to top

$('.btt').on("click", function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500)
});

// Mobile navigation

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
	'menu': document.getElementById('menu'),
	'padding': 300,
	'tolerance': 70,
	'side': 'right',
	'duration': 300,
	'touch': false
});

document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

// Slick Slider

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    infinite: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 7000,
  	speed: 500,
  });
  $('.slider_2').slick({
   	fade: true,
  	cssEase: 'ease-in-out',
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: true,
    infinite: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true
  });
  $('.slider_3').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	centerMode: true,
	infinite: true,
	centerPadding: '60px',
	slidesToShow: 3,
	speed: 500,
	swipeToSlide: true,
	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		}
	}]
	});
  $('.slider_4').slick({
	centerMode: true,
	infinite: true,
	centerPadding: '60px',
	slidesToShow: 1,
	speed: 500,
	focusOnSelect: true,
	swipeToSlide: true,
	});
});