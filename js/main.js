$(function() {

	window.addEventListener("scroll", function () {
	    if ($(this).scrollTop() >= 10 || window.pageYOffset > 10) {
	        $(".header").addClass("is-sticky");
	    } else {
	        $(".header").removeClass("is-sticky");
	    }
	});

	$('.navbar-nav .nav-link:not([data-toggle])').click(function(){
        var link = $(this).attr('href');
        var coordinats = $(link).offset().top - 50;
		var windowWidth = $(window).width();
                
        $('html, body').animate({scrollTop:coordinats}, 1000);
        if(windowWidth < 992){
            $('.navbar-collapse').collapse('hide');
        }
        return false;
    });

    if($(window).width() > 991){
		$(".nav-item-dropdown").each(function () {
			var navLink = $(this).find('.nav-link');
			navLink.removeAttr("data-toggle", "collapse").removeAttr("data-toggle", "dropdown");
			navLink.siblings('.navbar-nav-submenu').removeClass('collapse').removeClass('dropdown-menu');
	    });
    } else {
		$(".nav-item-dropdown").each(function () {
			var navLink = $(this).find('.nav-link');
			if($(this).hasClass('dropup')) {
				navLink.attr("data-toggle", "dropdown");
				navLink.siblings('.navbar-nav-submenu').addClass('dropdown-menu');
			} else {
				navLink.attr("data-toggle", "collapse");
				navLink.siblings('.navbar-nav-submenu').addClass('collapse');
			}
	    });
    }

    new WOW().init();

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true
    });

	$(".phone-mask").mask("+7(999) 999-99-99");

	$(".tooltip").tooltip();

	var optionsProjectSlider = {
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slider-arrow slider-arrow-back"><i class="icon-back"></i></button>',
		nextArrow: '<button type="button" class="slider-arrow slider-arrow-next"><i class="icon-next"></i></button>',
		dots: false,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		]
	}

	$('.projects-slider').slick(optionsProjectSlider);

	//обработка клика на кнопку показать все проекты
	$(".projects-link__btn").on( "click", function () {
		var siblinqsProjects = $(this).parent().siblings('.projects-slider');
	    toggleProjectsSlider(siblinqsProjects, $(this));
	});

	//функция, которая деактивирует слайдер и задает анимацию проектам
	function toggleProjectsSlider(projects, btn) {
    	var projectItems = $(projects).find('.project');
    	var button = btn;
    	//узнаем позицию курсора чтобы 
    	var x=window.scrollX;
    	var y=window.scrollY;
    	
	  	if ($(projects).hasClass('slick-initialized')) {
		    $(projects).slick('destroy');
		    setTimeout(window.scrollTo(x, y), 500);
		    button.text('Свернуть проекты');
	     	for (let i=0; i<projectItems.length; i++){
	     		projectItems.filter("[tabindex='-1']").addClass('show-project');
	     		projectItems.removeClass('hide-project');
	     	}

	    } else {
			$('.projects-slider').not('.slick-initialized').slick(optionsProjectSlider);
		  	projectItems.filter("[tabindex='0']").addClass('hide-project');
			projectItems.removeClass('show-project');
		    button.text('Показать все проекты');
	    }     
	}

	function topFunction(elem) {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}

	$('.reviews-slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: false,
	    dots: true,
	    infinite: false,
	    responsive: [
	        {
	          breakpoint: 991,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1,
	          }
	        },
	    ]
	});


	$('.modal-slider-block').each(function(){
		var $mainSlide = $('.modal-slider .modal-slider__item', this);
		var $prevSlide = $('.modal-thumb .modal-thumb__item', this);
 
        $prevSlide.click(function(){
            $mainSlide.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        }).first().click();
	});

    // var for center in yandex map, in table & mobile it should be olimp company
    var centerForYandexMap = [58.021389, 56.259341]; //center for desctop

    if ($(window).width() < "768"){
    	centerForYandexMap = [58.023508, 56.265687]; //center for table & mobile
    }

	if ( $('#map').length) {
		ymaps.ready(function () {
		    var myMap = new ymaps.Map("map", {
		      center: centerForYandexMap,
		      zoom: 15.5,
		      controls: []
		    });

		    myPlacemarkWithContent = new ymaps.Placemark([58.021520, 56.265614], {
		        hintContent: 'г. Пермь ул. Фрезеровщиков д. 86',
		        balloonContent: 'г. Пермь ул. Фрезеровщиков д. 86',
		        iconContent: ''
		    }, {
		        // *
		        //  * Options.
		        //  * You must specify this type of layout.
		         
		        iconLayout: 'default#imageWithContent',
		        // Custom image for the placemark icon.
		        iconImageHref: 'img/point.png',
		        // The size of the placemark.
		        iconImageSize: [44, 64],
		        /**
		         * The offset of the upper left corner of the icon relative
		         * to its "tail" (the anchor point).
		         */
		        iconImageOffset: [-24, -80],
		        // Offset of the layer with content relative to the layer with the image.
		        iconContentOffset: [15, 15],
		        // Content layout.
		        //iconContentLayout: MyIconContentLayout
		    });
			
			myMap.geoObjects.add(myPlacemarkWithContent);
		});
	}
    
});