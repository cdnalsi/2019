/*
	Foxstar Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    Sticky Header
=========================================================================*/ 
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 100;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.removeClass("animated fadeIn");
                header.addClass("navbar-fixed-top animated fadeInDown");
            } else {
                header.removeClass("navbar-fixed-top animated fadeInDown");
                header.addClass("animated fadeIn");
            }

        });
    });

/*=========================================================================
        Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on('click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'masonry',
	    });
	});

 /*=========================================================================
    Progress Bar Loading Effect
=========================================================================*/
	if ($('.skill_section').length) {
		var barsSec = $(".skill_section");
		var barsLoaded = false;
		if(barsSec[0]){
			$(window).on("scroll", function(){
				var _offsetTop = $(this).scrollTop() - barsSec.offset().top;
				if(!barsLoaded){
					if(_offsetTop >= -550){

						barsSec.find(".progress-bar").each(function(){
							var _this = $(this);
							_this.css('width',_this.data('skill-value')+'%');
						});
						barsLoaded = true;
					}
				}
			});
		}
	}

/*=========================================================================
        Testimonial Carousel
=========================================================================*/
    $('#testimonial_carousel').imagesLoaded( function() {
    	var testiSelector = $('#testimonial_carousel');
    	testiSelector.owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            items: 1,
            nav: false
        });
    });

    
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
             

/*=========================================================================
    Typed js Active
=========================================================================*/
    $(".typed").typed({
        strings: ["pianist", "composer", "arranger", "producer"],
        loop: true,
        typeSpeed: 150
    });
				 
/*=========================================================================
  Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);
