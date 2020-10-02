(function (window, document, $) {
	"use strict";
	
	$(window).on("load", function () {
		$(".noo-spinner").fadeOut('slow').remove();
	});
	
	/* On resize */
	$(window).on("resize", function () {
	});
	
	/* On scroll */
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 500) {
			$("#backtotop").addClass("on");
		} else {
			$("#backtotop").removeClass("on");
		}
	});
	
	$(document).ready(function($) {
		
		//fitvids
		if ($('.media-iframe').length > 0) $('.media-iframe').fitVids();
		
		//scroll to top
		$("body").on("click", "#backtotop", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		//Pretty photos
		if($("a.prettyphoto").length > 0) {
			$("a[data-rel^='prettyPhoto'], a.prettyphoto").prettyPhoto();
			$("a[data-rel^='prettyPhoto']").prettyPhoto({hook:"data-rel",social_tools:!1,theme:"pp_default",horizontal_padding:20,opacity:.8,deeplinking:!1});
		}
		
		//Main content margin bottom
		if($(".footer-reveal").length > 0) {
			var height = $(".footer").innerHeight();
			$("#main").css("margin-bottom", height);
		}
		
		//search button
		$('.btn-open-popup-search').on('click',function(){
			$(this).toggleClass("show-search");
			$('.header-search').toggleClass("show-search");
			$('body').toggleClass('show-search');
		});
		//Toggle Search
		$('.search-close').on('click', function() {
			$('body').toggleClass('show-search');
		});
		
		//Sticky Menu
		$(".header-sticky").headroom();
		
		//Toggle Accordion
		$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
			var $target = $(e.target)
			if (e.type == 'show')
				$('.accordion-header').removeClass('active');
				$target.prev('.accordion-header').addClass('active');
			if (e.type == 'hide')
				$target.prev('.accordion-header').removeClass('active');
		});
		
		//counter
		$( '.counter-item' ).each( function() {
			var $numbers = $(this).find('.number');
			var animation = $(this).data('animation') ? $(this).data('animation') : 'counterUp';
	
			if (animation === 'odometer') {
				var _number = $numbers.html();
				var od      = new Odometer({
					el   : $numbers[0],
					value: 0
				});
				od.render();
	
				$(this).waypoint(function() {
					od.update(_number);
				}, {
					offset     : '90%',
					triggerOnce: true
				});
			} else {
				$numbers.counterUp({
					delay: 10,
					time : 1000
				});
			}
		});
		
		//Onepage navigation
		if($(".onepage-menu").length > 0) {
			var offset = $('.onepage-menu').attr('data-offset');
			if ($('.onepage-menu').length > 0) { 
				$('.onepage-menu').singlePageNav({ 'offset': offset, 'filter': '.onepage' });
				$('.onepage-menu > li > a').removeClass("current");
				$('.onepage-menu > li:first-child > a').addClass("current");
			}
		}
		
		/* Show Main Navigation for Header v7*/
		$("#page-open-main-menu").on('click', function () {
			$("#toggle-menu").toggleClass('open');
		});
		$("#hide-mainnav").on('click', function () {
			$("#toggle-menu").removeClass('open');
		});
		$('.cms-menu-toggle').on('click', function () {
			if($(this).prev().hasClass('submenu-open')) {
				$(this).prev().toggleClass('submenu-open');	
			} else {
				$('.sub-menu').removeClass('submenu-open');
				$(this).prev().toggleClass('submenu-open');
				$(this).parent('li').parent('.sub-menu').addClass('submenu-open');
			}
		});
		
		//toggle mini cart
		$('#mini-cart').on('click', function() {
			$(this).toggleClass("open");
		});
		
		//Wavify
		$( '.wavify-item' ).each( function () {
			var _color     = $(this).data('wavify-background') ? $(this).data('wavify-background') : '#fff',
				_height    = $(this).data('wavify-height') ? $(this).data('wavify-height') : 100,
				_bones     = $(this).data('wavify-bones') ? $(this).data('wavify-bones') : 3,
				_amplitude = $(this).data('wavify-amplitude') ? $(this).data('wavify-amplitude') : 80;
	
			$(this).children('path').wavify( {
				height: _height,
				bones: _bones,
				amplitude: _amplitude,
				color: _color,
				speed: .15
			});
		});
		
		//Ajax popup
		if($(".quickview-icon").length > 0) {
			$('.quickview-icon').magnificPopup({
				type: 'ajax'
			});
		}
		
		//Typed Text
		if($("#typed").length > 0) {
		  $("#typed").typed({
			stringsElement: $("#typed-strings"),
			typeSpeed: 30,
			backDelay: 500,
			loop: true,
			contentType: "html", // or text
			loopCount: false,
			cursorChar: "|",
		  });
		}
		
		//SlimScroll
		if($("#portfolio-main-info-wrap").length > 0) {
			$("#portfolio-main-info-wrap").slimscroll({
			  height: 'auto'
			});
		}
		
		//Toggle Mobile Menu
		$('.page-open-mobile-menu, .page-close-mobile-menu').on('click',function(){
			$('.page-mobile-main-menu').toggleClass('open');
		});
		$('.toggle-sub-menu').on('click',function(){
			if($(this).parent("a").next().hasClass('open')) {
				$(this).parent("a").next().toggleClass('open');
				$(this).toggleClass('open');
			} else {
				$('.sub-menu').removeClass('open');
				$(this).parent("a").next().toggleClass('open');
				$(this).parent("a").parent('li').parent('.sub-menu').addClass('open');
				
				$('.toggle-sub-menu').removeClass('open');
				$(this).parent('a').parent('li').parent('.sub-menu').siblings('a').children('.toggle-sub-menu').toggleClass('open');
				$(this).toggleClass('open');
			}
        });
		
		//Owl Carousel
		OwlCarousel();
		
		//Hotspot
		hotSpot();
		
		//Progress Bars
		ProgressBar();
		
		/* background marque */
		marqueBackground();
		
		//fullscreen
		introHeight();
		
		//google map
		googleMap();
		
		/* countdown */
		Countdown();
		
		/* init revolution slider */
		if ($("#rev_slider").length > 0) {
			RevolutionInit();
		}
		if ($("#rev_slider_2").length > 0) {
			RevolutionInit_2();
		}
		if ($("#rev_slider_3").length > 0) {
			RevolutionInit_3();
		}
		if ($("#rev_slider_4").length > 0) {
			RevolutionInit_4();
		}
		if ($("#rev_slider_5").length > 0) {
			RevolutionInit_5();
		}
		if ($("#rev_slider_6").length > 0) {
			RevolutionInit_6();
		}
		if ($("#rev_slider_7").length > 0) {
			RevolutionInit_7();
		}
		if ($("#rev_slider_8").length > 0) {
			RevolutionInit_8();
		}
		if ($("#rev_slider_9").length > 0) {
			RevolutionInit_9();
		}
		if ($("#rev_slider_10").length > 0) {
			RevolutionInit_10();
		}
		if ($("#rev_slider_11").length > 0) {
			RevolutionInit_11();
		}
	});
	
	$(document).ajaxComplete(function() {
  		//Owl Carousel
		OwlCarousel();
	});

})(window, document, jQuery);

/*=================================================================
	fullscreen
===================================================================*/
function introHeight() {
	var wh = $(window).height();
	$('.section-fullscreen').css({ height: wh });
	$('.fullheight').css({ height: wh });
}

/*=================================================================
	countdown function
===================================================================*/
function Countdown() {
	if ($(".pl-clock").length > 0) {
		$(".pl-clock").each(function() {
			var time = $(this).attr("data-time");
			$(this).countdown(time, function(event) {
				var $this = $(this).html(event.strftime('' + '<div class="countdown-item"><div class="countdown-item-value">%D</div><div class="countdown-item-label">روز</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%H</div><div class="countdown-item-label">ساعت</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%M</div><div class="countdown-item-label">دقیقه</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%S</div><div class="countdown-item-label">ثانیه</div></div>'));
			});
		});
	}
}

/*=================================================================
	owl carousel
===================================================================*/
function OwlCarousel() {
	if ($(".navi-carousel").length > 0) {
		$(".navi-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")],
				navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			});
		});
	}
	if ($(".drag-carousel").length > 0) {
		$(".drag-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				addClassActive: true,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".dots-carousel").length > 0) {
		$(".dots-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: true,
				pagination: true,
				autoPlay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".testimonial-carousel").length > 0) {
		$(".testimonial-carousel").each(function() {
			$(this).owlCarousel({
				mouseDrag: true,
				navigation: true,
				dots: true,
				pagination: true,
				slideSpeed: 600,
				pagination: true,
				paginationSpeed: 400,
				autoHeight: true,
				addClassActive: true,
				autoPlay: true,
				singleItem: true,
				afterInit: makePages,
				afterUpdate: makePages,
				transitionStyle : "fade",
				navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			});
		});
	}
}

function makePages() {
	$.each(this.owl.userItems, function(i) {
		$('.owl-controls .owl-page').eq(i)
			.css({
				'background': 'url(' + $(this).data('thumb-image') + ')',
				'background-size': 'cover'
			})
	});
}

/*=================================================================
	progressbar
===================================================================*/
function ProgressBar() {
	$('.group-progressbar').each(function() {
		var $this = $(this);
		var waypoint = $this.waypoint({
			handler: function(direction) {
				$this.find('.progressbar').progressbar({ display_text: 'center' });
			},
			offset: "80%"
		});
	});
}

/*=================================================================
	google map
===================================================================*/
function googleMap() {
	var gmMapDiv = $("#google-map").children(".map");
	
	if (gmMapDiv.length) {
		var gmHeight = gmMapDiv.attr("data-height");
		var gmWidth = gmMapDiv.attr("data-width");
		var gmZoomEnable = gmMapDiv.attr("data-zoom_enable");
		var gmZoom = gmMapDiv.attr("data-zoom");
		gmMapDiv.width(gmWidth).height(gmHeight);
		gmMapDiv.gmap3({
			action: "init",
			marker: {
				values: [ {
					address: "40.7590615,-73.969231",
					data: '<div class="gmap-marker-wrap"><h5 class="gmap-marker-title">VISIT OUR STUDIO AT</h5><div class="gmap-marker-content">2005 Stokes Isle Apt. 896, Venaville 10010, USA</div></div>',
					options: {
						icon: "http://atomlab.thememove.com/wp-content/themes/atomlab/assets/images/maps/map-marker.png",
						visible: false
					}
				} ],
				events: {
					click: function(marker, event, context) {
						if (context.data == 0) {
							return;
						}
						var map = $(this).gmap3("get");
						infowindow = $(this).gmap3({
							get: {
								name: "infowindow"
							}
						});
						if (infowindow) {
							infowindow.open(map, marker);
							infowindow.setContent(context.data);
						} else {
							$(this).gmap3({
								infowindow: {
									anchor: marker,
									options: {
										content: context.data
									}
								}
							});
						}
					}
				}
			},
			overlay: {
				values: [ {
					address: "40.7590615,-73.969231",
					data: '<div class="gmap-marker-wrap"><h5 class="gmap-marker-title">VISIT OUR STUDIO AT</h5><div class="gmap-marker-content">2005 Stokes Isle Apt. 896, Venaville 10010, USA</div></div>',
					options: {
						content: '<div><div class="animated-dot">' + '<div class="middle-dot"></div>' + '<div class="signal"></div>' + '<div class="signal2"></div>' + "</div></div>"
					}
				} ],
				events: {
					click: function(overlay, event, context) {
						if (context.data == 0) {
							return;
						}
						var map = $(this).gmap3("get");
						infowindow = $(this).gmap3({
							get: {
								name: "infowindow"
							}
						});
						if (infowindow) {
							infowindow.open(map, overlay);
							infowindow.setContent(context.data);
						} else {
							$(this).gmap3({
								infowindow: {
									anchor: overlay,
									options: {
										content: context.data
									}
								}
							});
						}
					}
				}
			},
			map: {
				options: {
					zoom: parseInt(gmZoom),
					zoomControl: true,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					scaleControl: false,
					scrollwheel: gmZoomEnable == "enable" ? true : false,
					streetViewControl: false,
					draggable: true,
					styles: [ {
						featureType: "water",
						elementType: "geometry",
						stylers: [ {
							color: "#e9e9e9"
						}, {
							lightness: 17
						} ]
					}, {
						featureType: "landscape",
						elementType: "geometry",
						stylers: [ {
							color: "#f5f5f5"
						}, {
							lightness: 20
						} ]
					}, {
						featureType: "road.highway",
						elementType: "geometry.fill",
						stylers: [ {
							color: "#ffffff"
						}, {
							lightness: 17
						} ]
					}, {
						featureType: "road.highway",
						elementType: "geometry.stroke",
						stylers: [ {
							color: "#ffffff"
						}, {
							lightness: 29
						}, {
							weight: .2
						} ]
					}, {
						featureType: "road.arterial",
						elementType: "geometry",
						stylers: [ {
							color: "#ffffff"
						}, {
							lightness: 18
						} ]
					}, {
						featureType: "road.local",
						elementType: "geometry",
						stylers: [ {
							color: "#ffffff"
						}, {
							lightness: 16
						} ]
					}, {
						featureType: "poi",
						elementType: "geometry",
						stylers: [ {
							color: "#f5f5f5"
						}, {
							lightness: 21
						} ]
					}, {
						featureType: "poi.park",
						elementType: "geometry",
						stylers: [ {
							color: "#dedede"
						}, {
							lightness: 21
						} ]
					}, {
						elementType: "labels.text.stroke",
						stylers: [ {
							visibility: "on"
						}, {
							color: "#ffffff"
						}, {
							lightness: 16
						} ]
					}, {
						elementType: "labels.text.fill",
						stylers: [ {
							saturation: 36
						}, {
							color: "#333333"
						}, {
							lightness: 40
						} ]
					}, {
						elementType: "labels.icon",
						stylers: [ {
							visibility: "off"
						} ]
					}, {
						featureType: "transit",
						elementType: "geometry",
						stylers: [ {
							color: "#f2f2f2"
						}, {
							lightness: 19
						} ]
					}, {
						featureType: "administrative",
						elementType: "geometry.fill",
						stylers: [ {
							color: "#fefefe"
						}, {
							lightness: 20
						} ]
					}, {
						featureType: "administrative",
						elementType: "geometry.stroke",
						stylers: [ {
							color: "#fefefe"
						}, {
							lightness: 17
						}, {
							weight: 1.2
						} ]
					} ]
				}
			}
		});
	}
}

/*=================================================================
	hotspot
===================================================================*/
function hotSpot() {
	$('.image-hotspot .hotspot-item').each(function() {
		$(this).css({'bottom' : $(this).data("bottom") + 'px', 'left' : $(this).data("left") + 'px'});
	
		// mouse-on example
		var mouseOnDiv = $(this);
		var tipContent = $(
			'<div class="hotspot-content">' +
			'<h6 class="heading">' + $(this).find('.heading').text() + '</h6>' +
			'<div class="text">' + $(this).find('.text').text() + '</div>' +
			'</div>'
		);
		mouseOnDiv.data('powertipjq', tipContent);
		mouseOnDiv.powerTip({
			placement: 'n',
			mouseOnToPopup: true
		});
	});
}

/*=================================================================
	background marque
===================================================================*/

function marqueBackground() {
	$( '.background-marque' ).each( function() {
		var $el = $( this );
		var x = 0;
		var step = 1;
		var speed = 10;

		if ( $el.hasClass( 'to-left' ) ) {
			step = - 1;
		}

		$el.css( 'background-repeat', 'repeat-x' );

		var loop = setInterval( function() {
			x += step;
			$el.css( 'background-position-x', x + 'px' );
		}, speed );

		if ( $el.data( 'marque-pause-on-hover' ) == true ) {
			$( this ).hover( function() {
				clearInterval( loop );
			}, function() {
				loop = setInterval( function() {
					x += step;
					$el.css( 'background-position-x', x + 'px' );
				}, speed );
			} );
		}
	});
}

/*=================================================================
	revolution slider function
===================================================================*/
function RevolutionInit() {
	$("#rev_slider").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			arrows: {
				style:"uranus",
				enable:true,
				hide_onmobile:false,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				tmp:'',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1400,1024,778,480],
		gridheight:[860,960,960,900],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_2() {
	$("#rev_slider_2").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			onHoverStop:"off",
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1400,1024,778,480],
		gridheight:[570,570,720,600],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_3() {
	$("#rev_slider_3").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			onHoverStop:"off",
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1400,1024,778,480],
		gridheight:[780,780,780,780],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_4() {
	$("#rev_slider_4").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			arrows: {
				style:"uranus",
				enable:true,
				hide_onmobile:false,
				hide_onleave:false,
				tmp:'',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1199,778,480],
		gridheight:[1000,768,960,720],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_5() {
	$("#rev_slider_5").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			bullets: {
				enable:true,
				hide_onmobile:false,
				style:"atomlab-3",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"vertical",
				h_align:"right",
				v_align:"center",
				h_offset:100,
				v_offset:0,
				space:15,
				tmp:''
			}
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1600,1024,778,480],
		gridheight:[570,790,790,790],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_6() {
	$("#rev_slider_6").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			bullets: {
				enable:true,
				hide_onmobile:false,
				style:"atomlab-2",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"vertical",
				h_align:"right",
				v_align:"center",
				h_offset:100,
				v_offset:-100,
				space:15,
				tmp:''
			}
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[860,860,860,860],
		lazyType:"none",
		minHeight:"860",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_7() {
	var rev_slider7;
	rev_slider7 = $("#rev_slider_7").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			arrows: {
				style:"zeus",
				enable:true,
				hide_onmobile:false,
				hide_onleave:false,
				tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:20,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:20,
					v_offset:0
				}
			}
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1440,1024,778,480],
		gridheight:[1000,800,900,800],
		lazyType:"none",
		parallax: {
			type:"mouse",
			origo:"enterpoint",
			speed:400,
			speedbg:0,
			speedls:0,
			levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
		},
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
	
	var api = rev_slider7;
	/* no need to edit below */
	var divider = '/ ',
    	totalSlides, numberText;
		
	api.one('revolution.slide.onloaded', function() {
		totalSlides = api.revmaxslide();
		api.find('.slide-status-current').text(divider + totalSlides);
		numberText = api.find('.slide-status-numbers').text('01');
		api.on('revolution.slide.onbeforeswap', function(e, data) {
			numberText.text('0' + (data.nextslide.index() + 1));
		});
	});
}
function RevolutionInit_8() {
	$("#rev_slider_8").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
			onHoverStop:"off",
			bullets: {
				enable:true,
				hide_onmobile:false,
				style:"atomlab-1",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"vertical",
				h_align:"right",
				v_align:"center",
				h_offset:110,
				v_offset:0,
				space:6,
				tmp:''
			}
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[900,900,960,900],
		lazyType:"none",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_9() {
	$("#rev_slider_9").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			onHoverStop:"off",
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[1000,768,960,720],
		lazyType:"none",
		minHeight:"600",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_10() {
	$("#rev_slider_10").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"auto",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			onHoverStop:"off",
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1720,1024,778,480],
		gridheight:[530,530,600,600],
		lazyType:"none",
		minHeight:"530",
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}
function RevolutionInit_11() {
	$("#rev_slider_11").show().revolution({
		sliderType:"standard",
		jsFileLocation:"js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			onHoverStop:"off",
		},
		viewPort: {
			enable:true,
			outof:"wait",
			visible_area:"80%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1920,1024,778,480],
		gridheight:[800,800,900,800],
		lazyType:"none",
		parallax: {
			type:"mouse",
			origo:"enterpoint",
			speed:400,
			speedbg:0,
			speedls:0,
			levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
		},
		shadow:0,
		spinner:"spinner3",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
}