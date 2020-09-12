/*
Template Name: Sweetness
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
 */
 
jQuery(function($) {
	"use strict"; 

    $(document).ready(function() {

        //Scrolling feature 
        $('.page-scroll a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        //scroll down on menu tabs on mobile only
        if ($(window).width() <= 991) {
            $("#menu-nav li a").on('click', function() {
                $('html,body').animate({
                        scrollTop: $(".tab-content").offset().top - 100
                    },
                    'slow');
            });
        }

		
        //	Back Top Link
        var offset = 100;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        //Owl-sliders

        $("#owl-about").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            nav: false,
            margin: 20,
            responsive: {
                1: {
                    items: 1,
                },
                991: {
                    items: 1,
                },
            }
        });

        $("#owl-icons").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            margin: 0,
            responsive: {
                1: {
                    items: 1,
                },
                991: {
                    items: 3,
                },
            }
        });

        $("#owl-testimonial").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,

            margin: 30,
            responsive: {
                1: {
                    items: 1,
                },
                991: {
                    items: 2,
                },
            }
        });

        $("#owl-blog").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            margin: 30,
            responsive: {
                1: {
                    items: 1,
                },
                991: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            }
        });

        $("#owl-team").owlCarousel({
            dots: true,
            loop: true,
            autoplay: false,
            nav: true,
            margin: 5,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            responsive: {
                1: {
                    items: 1,
                },
                550: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            }
        });

        // Magnific Popup

		$('.polaroids').magnificPopup({
			delegate: '.polaroid-item a', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
				enabled: true
			}
		});


        // Reveal box effect
        $('.revealedBox').each(function(i) {
            var childrenSpan = $(this).children('span').length;
            $(this).addClass('childrenSpan-' + childrenSpan);
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + -10) {
                $(this).addClass('revealedBox-in');
            }

        });

        $(window).scroll(function() {
            $('.revealedBox').each(function(i) {
                if ($(window).scrollTop() + $(window).height() > $(this).offset().top - 10) {
                    $(this).addClass('revealedBox-in');
                }
            });

        });


    }); // end document ready function

    //On Click  function
    $(document).on('click', function() {

        //Navbar toggle
        $('.navbar .collapse').collapse('hide');

    })


    // Window load function

    $(window).load(function() {

        // Page Preloader 	
        $("#loading").fadeOut(1000);

        //Load Skrollr
        var skr0llr = skrollr.init({
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
        });

        //Effects on scroll
        AOS.init({
            disable: 'mobile',
            duration: 1500,
            once: true
        });
		
        //IE 11 Fix for shaky backgrounds
        $('body').on("mousewheel", function() {
            event.preventDefault();
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });


    }); // end window load function

});