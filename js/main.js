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

// Twitter slideshow

$(document).ready(function() {
    $('.slideshow').cycle({ 
    	fx: 'fade', 
    	speed: 800,
    	timeout: 5000,
    	pause: 1,
    	next: '.slideshow',
   	 	sync: 0
	});
});

// Fixed desktop navigation

$(document).ready(function() {
  $('.main-nav').scrollToFixed();
});

// Back to top

$('.btt').on("click", function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500)
});

// Mobile navigation

var slideout = new Slideout({
    'panel': document.getElementById('layout'),
	'menu': document.getElementById('mobile-menu'),
	'padding': 300,
	'tolerance': 70,
	'side': 'right',
	'duration': 300,
	'touch': false
});

document.querySelector('.menu-button').addEventListener('click', function() {
    slideout.toggle();
});

// Mobile navigation

var slideout = new Slideout({
    'panel': document.getElementById('mobile-nav'),
	'menu': document.getElementById('mobile-menu-2'),
	'padding': 300,
	'tolerance': 70,
	'side': 'right',
	'duration': 300,
	'touch': false
});

document.querySelector('.menu-button-2').addEventListener('click', function() {
    slideout.toggle();
});