$(function() {

	window.addEventListener("scroll", function () {
	    if ($(this).scrollTop() >= 10 || window.pageYOffset > 10) {
	        $(".header").addClass("is-sticky");
	    } else {
	        $(".header").removeClass("is-sticky");
	    }
	});

    new WOW().init();

	$(".phone-mask").mask("+7(999) 999-99-99");

   //  $('.projects-slider').owlCarousel({
   //      loop: true, //Зацикливаем слайдер
   //      margin: 30, //Отступ от элемента справа в 50px
   //      nav: true, //Отключение навигации
   //      navText: ["<i class='icon-back'></i>","<i class='icon-next'></i>"],
   //      dots: false,
   //      stopOnHover: true,
   //      //autoplay: true, //Автозапуск слайдера
   //      smartSpeed: 1000, //Время движения слайда
   //      //autoplayTimeout: 3000, //Время смены слайда
   //      responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
   //          375:{
   //              items:1
   //          },
   //          992:{
   //              items:3
   //          },
   //          1000:{
   //              items:3
   //          }

   //      }
   //  });

   //  $('.reviews-slider').owlCarousel({
   //      // loop: true, //Зацикливаем слайдер
   //      //margin: 30, //Отступ от элемента справа в 50px
   //      nav: false, //Отключение навигации
   //      dots: true,
   //      // items:3,
   //      // singleItem: true,
   //      // stopOnHover: true,
   //      // //autoplay: true, //Автозапуск слайдера
   //      // smartSpeed: 1000, //Время движения слайда
   //      //autoplayTimeout: 3000, //Время смены слайда
   //      // responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
   //      //     375:{
   //      //         items:1
   //      //     },
   //      //     992:{
   //      //         items:3
   //      //     },
   //      //     1000:{
   //      //         items:3
   //      //     }

   //      // }
   //  });

	$('.projects-slider').slick({
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
	});

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
		        /**
		         * Options.
		         * You must specify this type of layout.
		         */
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