$(function() {	

	if ($(window).width() > 1199) {

		$('.hamburger').click(function() {	
			var menu = $('.navbar');	
			if (menu.hasClass('navbar_is-hidden')) {
				$(this).addClass('is-active');
				menu.removeClass("navbar_is-hidden");		
			} else {
				$(this).removeClass('is-active');
				menu.addClass('navbar_is-hidden');	
			};
		});	

		$(window).scroll(function(){		
			var scrollTop = 0;
			if ($(this).scrollTop() > scrollTop) {
				$(".header").addClass("header_is-fixed");		
				$(".navbar").addClass("navbar_is-hidden");
				$('.hamburger').removeClass('is-active')	
			} else {
				$(".header").removeClass("header_is-fixed");	
				$(".navbar").removeClass("navbar_is-hidden");
			};
		});
		
	} else {

		$('.header__menu').mmenu({
		extensions: ["effect-menu-slide", "pagedim-black", "border-full"],
			navbar: {
				title: ""
			}
		});

		var mmAPI = $('.header__menu').data("mmenu");

		$(".hamburger").click(function() {	   
			mmAPI.open();
			return false;  
		}); 

	}	

	$(window).scroll(function(){	
		var scrollTop = $(window).height()*1;	
		if ($(this).scrollTop() > scrollTop) {			
			$(".up").addClass("up_is-visible");
		} else {			
			$(".up").removeClass("up_is-visible");
		};
	});

	$('.up').click(function() {
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	var maskFill;	

	//Маска для телефона
	$(".form-mask").mask("+7 (999) 999-99-99", {
		placeholder: "_",	
		completed: function() {maskFill = true;}
	});		

	//Фокус полей формы
	$('.input input, .input textarea').focus(function(){	
		maskFill = false;
		var placeholder = $(this).parent().find('.input__placeholder');
		placeholder.addClass('input__placeholder_top');		
	});
	$('.input input, .input textarea').focusout(function(){			
		var placeholder = $(this).parent().find('.input__placeholder');
		if ($(this).val() == '') {
			placeholder.removeClass('input__placeholder_top');			
		};	
		if ($(this).hasClass('form-mask') && (!maskFill)) {
			placeholder.removeClass('input__placeholder_top');
		}
	});

	function portfolioGrid() {
		if ($(window).width() > 1199) {
			$('.portfolio-grid').each(function(){
				var maxWorkHeight = 0,
				nextWork = $(this).find($('.portfolio__item')).next(),
				firstWork = $(this).find($('.portfolio__item')).first();
				nextWork.each(function(){
					if ( $(this).height() > maxWorkHeight) 
					{
						maxWorkHeight = $(this).height();
					}
				});
				nextWork.height(maxWorkHeight);	
				var firstWorkHeight = (nextWork.height()*2)-3;
				firstWork.height(firstWorkHeight);

				var maxWorkTitleHeight = 0;
				nextWork.find($(".work__title")).each(function(){
					if ($(this).height() > maxWorkTitleHeight) 
					{
						maxWorkTitleHeight = $(this).height();
					}
				});
				nextWork.find($(".work__title")).height(maxWorkTitleHeight);

				var maxWorkTypeHeight = 0;
				nextWork.find($(".work__type")).each(function(){
					if ($(this).height() > maxWorkTypeHeight) 
					{
						maxWorkTypeHeight = $(this).height();
					}
				});
				nextWork.find($(".work__type")).height(maxWorkTypeHeight);	
			})	
		} else {
			var maxWorkTitleHeight = 0;
			$(".portfolio__item .work__title").each(function(){
				if ($(this).height() > maxWorkTitleHeight) 
				{
					maxWorkTitleHeight = $(this).height();
				}
			});
			$(".portfolio__item .work__title").height(maxWorkTitleHeight);

			var maxWorkTypeHeight = 0;
			$(".portfolio__item .work__type").each(function(){
				if ($(this).height() > maxWorkTypeHeight) 
				{
					maxWorkTypeHeight = $(this).height();
				}
			});
			$(".portfolio__item .work__type").height(maxWorkTypeHeight);	
		}
	}

	function newsGrid() {		
		if ($(window).width() > 1199) {
			$('.news-grid').each(function(){			
				var maxNewsHeight = 0,
				nextNews = $(this).find($('.news-grid__news')).next(),
				firstNews = $(this).find($('.news-grid__news')).first();				
				nextNews.each(function(){
					if ($(this).height() > maxNewsHeight) 
					{
						maxNewsHeight = $(this).height();
					}
				});
				nextNews.height(maxNewsHeight);	
				var firstNewsHeight = (nextNews.height()*2)+57;
				firstNews.height(firstNewsHeight);
				var maxNewsHeadHeight = 0;
				nextNews.find($('.news__head')).each(function(){
					if ($(this).height() > maxNewsHeadHeight) 
					{
						maxNewsHeadHeight = $(this).height();
					}
				});
				nextNews.find($('.news__head')).height(maxNewsHeadHeight);	
			})
		} else 
			if ($(window).width() > 575) {
				var maxNewsHeadtHeight = 0;
				$('.news-grid__news .news__head').each(function(){
					if ( $(this).height() > maxNewsHeadtHeight) 
					{
						maxNewsHeadtHeight = $(this).height();
					}
				});
				$('.news-grid__news .news__head').height(maxNewsHeadtHeight);	
			}	
		}
	

	function equal() {			

		if (!$('.news-grid').length==1) {
			if ($(window).width() > 575) {
				var maxNewsHeadtHeight = 0;
				$(".news__head").each(function(){
					if ( $(this).height() > maxNewsHeadtHeight) 
					{
						maxNewsHeadtHeight = $(this).height();
					}
				});
				$(".news__head").height(maxNewsHeadtHeight);	
			}								
		} else {
			newsGrid();
		}

		if ($(window).width() > 767) {
			var maxServiceHeight = 0;
			$(".services .service__text").each(function(){
				if ( $(this).height() > maxServiceHeight) 
				{
					maxServiceHeight = $(this).height();
				}
			});
			$(".services .service__text").height(maxServiceHeight);
			var maxServiceFootHeight = 0;
			$(".services .service__foot").each(function(){
				if ( $(this).height() > maxServiceFootHeight) 
				{
					maxServiceFootHeight = $(this).height();
				}
			});
			$(".services .service__foot").height(maxServiceFootHeight);		
			var lastService = $('.services .service').last();
			var lastServiceIndex = lastService.index();	
			if (lastServiceIndex%2 == 0) {
				lastService.addClass('service_full-width');
				lastService.find('.service__text').css('height', 'auto');
			};
		};
		

		if ($('.portfolio').length==1) {
			portfolioGrid();
		}			

		var maxTarifHeadHeight = 0;
		$(".tarif__head").each(function(){
			if ( $(this).height() > maxTarifHeadHeight) 
			{
				maxTarifHeadHeight = $(this).height();
			}
		});
		$(".tarif__head").height(maxTarifHeadHeight);  

		var maxWorkTitleHeight = 0;
		$(".index__work .work__title").each(function(){
			if ($(this).height() > maxWorkTitleHeight) 
			{
				maxWorkTitleHeight = $(this).height();
			}
		});
		$(".index__work .work__title").height(maxWorkTitleHeight);

		var maxWorkTypeHeight = 0;
		$(".index__work .work__type").each(function(){
			if ($(this).height() > maxWorkTypeHeight) 
			{
				maxWorkTypeHeight = $(this).height();
			}
		});
		$(".index__work .work__type").height(maxWorkTypeHeight);                 		
		
	};

	equal();	

	//Checkbox на обработку персональных данных
	$('input[type="submit"]').prop('disabled', true);	

	$('.persondata__checkbox').click(function() {
		var btn = $(this).parent().parent().find("[type='submit']");
		if ($(this).hasClass('checked')) {
			$(this).removeClass('checked');
			btn.prop("disabled", true);
		} else {
			btn.prop("disabled", false);
			$(this).addClass('checked');
		};
	});	
	

	if ($(window).width() < 768) {

		var tizers = $(".index-tizers__tabs").slick({ 
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			speed: 400,
			arrows: false,			
			dots: false,
			draggable: false,
			swipe: true,
			autoplay: false,
			centerMode: true,
			centerPadding: "25%",
			responsive: [			
			{
				breakpoint: 576,
				settings: {					
					centerPadding: "20%"
				}
			}]		
		});

		var maxTizerHeight = 0;

		$(".index-tizers__tab").each(function() {
			if ($(this).height() > maxTizerHeight) 
			{
				maxTizerHeight = $(this).height();
			}
		});
		$(".index-tizers__tab").height(maxTizerHeight);				

		tizers.on('afterChange', function(){
			$('.index-tizers__tabs .slick-center').addClass("index-tizers__tab_current");
			var id = $('.index-tizers__tabs .slick-center').attr("href");	
			$(".tizers__cnt").removeClass("tizers__cnt_current tizers__cnt_visible");
			$(id).addClass("tizers__cnt_current");
				setTimeout(function () {
					$(id).addClass("tizers__cnt_visible");
				}, 20);
		});

	}	else {
		$(".index-tizers__tab").click(function(){	
			event.preventDefault(); 	
			if(!$(this).hasClass("index-tizers__tab_current")) {			
				$(".index-tizers__tab").removeClass("index-tizers__tab_current");
				$(this).addClass("index-tizers__tab_current");
				var id = $(this).attr("href");				
				$(".tizers__cnt").removeClass("tizers__cnt_current tizers__cnt_visible");
				$(id).addClass("tizers__cnt_current");
				setTimeout(function () {
					$(id).addClass("tizers__cnt_visible");
				}, 20);
			};				
		});	
	}

	$(".clients__js-slider").slick({ 
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		speed: 400,
		arrows: true,
		prevArrow: '.clients__slider-arrows .back',
		nextArrow: '.clients__slider-arrows .next',
		dots: false,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
		{
			breakpoint: 1340,
			settings: {
				slidesToShow: 3		
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2	
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "25%"
			}
		}]
	});

	$(".js-reviews-slider").slick({ 
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 400,
		arrows: true,
		prevArrow: '.reviews__slider-arrows .back',
		nextArrow: '.reviews__slider-arrows .next',
		dots: false,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [		
		{
			breakpoint: 768,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "25%"
			}
		},
		{
			breakpoint: 576,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "20%"
			}
		},
		{
			breakpoint: 480,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "15%"
			}
		}]
	});		

	$(".recommended-services__js-slider").slick({ 
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		speed: 400,
		arrows: true,
		prevArrow: '.recommended-services__slider-arrows .back',
		nextArrow: '.recommended-services__slider-arrows .next',
		dots: false,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [		
		{
			breakpoint: 768,
			settings: {				
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {			
				slidesToShow: 1,	
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "20%"
			}
		},
		{
			breakpoint: 400,
			settings: {			
				slidesToShow: 1,	
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "15%"
			}
		}]
	});	

	var maxRecServiceTxtHeight = 0;
	$(".recommended-services .service__text").each(function(){
		if ($(this).height() > maxRecServiceTxtHeight) 
		{
			maxRecServiceTxtHeight = $(this).height();
		}
	});
	$(".recommended-services .service__text").height(maxRecServiceTxtHeight);	

	var maxRecServiceFootHeight = 0;
	$(".recommended-services .service__foot").each(function(){
		if ($(this).height() > maxRecServiceFootHeight) 
		{
			maxRecServiceFootHeight = $(this).height();
		}
	});
	$(".recommended-services .service__foot").height(maxRecServiceFootHeight);			

	var maxRecSlideHeight = 0;
	$(".recommended-services__slide").each(function() {
		if ($(this).height() > maxRecSlideHeight) 
		{
			maxRecSlideHeight = $(this).height();
		}
	});
	$(".recommended-services__slide").height(maxRecSlideHeight);		

	$(".results__slider").slick({ 
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 400,
		arrows: true,
		prevArrow: '.results__slider-arrows .back',
		nextArrow: '.results__slider-arrows .next',
		dots: false,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [		
		{
			breakpoint: 768,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "15%"
			}
		},
		{
			breakpoint: 700,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "8%"
			}
		},
		{
			breakpoint: 576,
			settings: {				
				infinite: false,
				autoplay: false,
				centerMode: true,
				centerPadding: "10%"
			}
		}]
	});		

	var maxResultTxtHeight = 0;

	$(".result__text").each(function() {
		if ($(this).height() > maxResultTxtHeight) 
		{
			maxResultTxtHeight = $(this).height();
		}
	});
	$(".result__text").height(maxResultTxtHeight);				

	$(".btn_scroll").on("click", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top - 80;
		$('body,html').animate({scrollTop:top}, 750);
	});	

	function tarifsInit() {
		$(".tarifs__slider").slick({ 
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			speed: 400,
			arrows: true,
			prevArrow: '.tarifs__slider-arrows .back',
			nextArrow: '.tarifs__slider-arrows .next',
			dots: false,
			draggable: false,
			swipe: true,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3	
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "25%"
					}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "20%"
					}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "15%"
					}
			}]
		});
		$(".tarifs__slider-arrows").addClass('visible');
		var maxTarifHeight = 0;
		$(".tarif__body").each(function(){
			if ( $(this).height() > maxTarifHeight) 
			{
				maxTarifHeight = $(this).height();
			}
		});
		$(".tarif__body").height(maxTarifHeight);	
	}

	if (($('.tarifs .tarif').length > 4) && ($(window).width() > 1199)) {
		tarifsInit();
	} else if (($('.tarifs .tarif').length > 3) && ($(window).width() > 991) && ($(window).width() < 1200)) {		
		tarifsInit();
	} else if (($('.tarifs .tarif').length > 2) && ($(window).width() > 767) && ($(window).width() < 992)) {		
		tarifsInit();
	} else if (($('.tarifs .tarif').length > 1) && ($(window).width() < 768)) {		
		tarifsInit();
	} else {
		var maxTarifHeight = 0;
		$(".tarif__body").each(function(){
			if ( $(this).height() > maxTarifHeight) 
			{
				maxTarifHeight = $(this).height();
			}
		});
		$(".tarif__body").height(maxTarifHeight);
	}	

	function worksInit() {
		$(".works-slider .works").slick({ 
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			speed: 400,
			arrows: true,
			prevArrow: '.works__slider-arrows .back',
			nextArrow: '.works__slider-arrows .next',
			dots: false,
			draggable: false,
			swipe: true,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3	
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "25%"
					}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "20%"
					}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "15%"
					}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					infinite: false,
					autoplay: false,
					centerMode: true,
					centerPadding: "10%"
					}
			}]
		});
		$(".works__slider-arrows").addClass('visible');
		var maxWorkHeight = 0;
		$(".works-slider .work").each(function(){
			if ( $(this).height() > maxWorkHeight) 
			{
				maxWorkHeight = $(this).height();
			}
		});
		$(".works-slider .work").height(maxWorkHeight);	
	};	

	if (($('.works-slider .work').length > 4) && ($(window).width() > 1199)) {
		worksInit();
	} else if (($('.works-slider .work').length > 3) && ($(window).width() > 991) && ($(window).width() < 1200)) {		
		worksInit();
	} else if (($('.works-slider .work').length > 2) && ($(window).width() > 767) && ($(window).width() < 992)) {		
		worksInit();
	} else if (($('.works-slider .work').length > 1) && ($(window).width() < 768)) {		
		worksInit();
	} 

	if ($('.work-numbers').length==1) {
		$(".work-numbers").waypoint(function() {
			$(".work-numb__val").each(function() {
				var NCount = $(this).data("count");			
				$(this).animateNumber({
					number: NCount,
					easing: 'linear'
				}, 1000);
			});
			this.destroy();
		}, {
			offset: '90%'
		});
	}

	$(".macbook-slider__slider").slick({ 
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 400,
		arrows: true,
		prevArrow: '.macbook-slider__slider-arrows .back',
		nextArrow: '.macbook-slider__slider-arrows .next',
		dots: true,
		draggable: false,
		swipe: true,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true
	});	

	$("a[href^='img']:not(.gallery__photo)").click(function() {	
		event.preventDefault(); 
		var $gallerybox = $(this).parent().find($("a[href^='img']"));	
		var index = $(this).index();
		$.fancybox.open($gallerybox, {
			'index' : index,
			animationEffect : false
		});
	});	

	$(".gallery__photo").fancybox({		 
		animationEffect : false,
		thumbs : {
			autoStart: true
		}
	});

	if ($('.mixitup').length==1) {
		var mixer = mixitup('.mixitup', {
			animation: {
				enable: true,
				effects: 'scale fade',
				duration: 700
			}
		 });
	};	

	if ($('.tabs').length==1) {
		var hash = document.location.hash;	
		if(hash) {
			$('.tab[href="' + hash + '"]')[0].click();
		}
	};	

	$('.file-upload__input').change(function() {
		if ($(this).val() != '') {
			var	file_name = this.files[0].name;	
			$('.file-upload__success').html(file_name);	
		}
	});	

	//Стилизованный select	
	$('.select').selectize();	

	$('[href="#order"], [href="#callback"]').fancybox({
		touch: false
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".form").submit(function() {
		var th = $(this);
		if (!event.target.checkValidity()) {
			event.preventDefault(); 
			th.find("[required]").focus();
		} else {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				$.fancybox.close();
				th.trigger("reset");						
			});	
			return false;
		}
	});

	// Replace all SVG images with inline SVG
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = $(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

				}, 'xml');
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var lastWidth = $(window).width();
	$(window).resize(function(){
		if($(window).width()!=lastWidth) {
			location.reload();
		};		
	});
	

});