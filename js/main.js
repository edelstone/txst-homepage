// No delay on mobile tapping

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

// Background image delay and fade 

$(window).load(function() {
    $(".slider-image, .slider-overlay-right").delay(0).animate({
        opacity: "1"
    }, 700);
    $(".slider-overlay-left").delay(500).animate({
    	opacity: "1",
        left: 0
    }, 700);
});

// Video Lightbox

$(document).ready(function(){
	$('a').nivoLightbox();
});

// Tabs

$(function() {
    $( "#tabs" ).tabs();
});

$("#tabs").tabs({
  show: function(event, ui) {
    var lastOpenedPanel = $(this).data("lastOpenedPanel");
    if (!$(this).data("topPositionTab")) {
        $(this).data("topPositionTab", $(ui.panel).position().top)
    }
    // do crossfade of tabs
    $(ui.panel).hide().css('z-index', 2).fadeIn(500, function() {
      $(this).css('z-index', '');
      if (lastOpenedPanel) 
      {
        lastOpenedPanel
          .toggleClass("ui-tabs-hide")
          .hide();
      }
    });

    $(this).data("lastOpenedPanel", $(ui.panel));
  } 
});

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