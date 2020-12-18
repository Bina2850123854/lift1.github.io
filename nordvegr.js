$(function() {		

	function submenuWidth() { //объявление функции submenuWidth()
		var windowWidth = $(window).width();//объявление переменной и присваивание ей значения равного ширине окна
		$('.menu__item').each(function(){	//для каждого элемента с классом menu__item(пункта меню) задается функция				
			if($(this).find('.submenu').length > 0) {//если в данном элементе находится количество элементов с классом submenu(подпунктов) больше нуля
				var submenuW = $(this).find('.submenu').width();//то объявляем переменную и присваиваем ей значение ширины .submenu
			} else {
				var submenuW = 0;//иначе присваиваем переменной значение 0
			};
			if($(this).find('.submenu-2').length > 0) {//если в данном элементе находится количество элементов с классом submenu-2(подпунктов submenu) больше нуля
				var ssubmenuW = $(this).find('.submenu-2').width();//то объявляем переменную и присваиваем ей значение ширины .submenu-2
			} else {
				var ssubmenuW = 0;//иначе присваиваем переменной значение 0
			};

			var targetWidth = submenuW + ssubmenuW,//объявляем переменную targetWidth и присваиваем ей сумму значений переменных submenuW и ssubmenuW(суммируем ширину подпункта и его дочернего подпункта)
			targetPos = $(this).offset().left,//объявляем переменную targetPos и приваиваем ей значение ширины отступа элемента слева от экрана
			targetResult = windowWidth-(targetPos+targetWidth)-17;//объявляем переменную argetResult и приваиваем ей значение выражения 'windowWidth-(targetPos+targetWidth)-17', которое обозначает ширину экрана справа до крайнего подпункта		

			if (targetResult < 0) {//если эта ширина меньше нуля, т.е расстояния нет
				$(this).find('.submenu').addClass('submenu--reverse');//добавляем дополнительный класс элементу, который поворочивает элементы в другую сторону
			} else {
				$(this).find('.submenu').removeClass('submenu--reverse');//иначе, убираем этот класс
			};
		});
	};

	if ($(window).width() > 1199) {//при ширине окна больше 1199px применяем функцию submenuWidth()
		submenuWidth();	
	};		

	if($('.hero').length == 1) {	//если блок с классом hero существует	

		var scrollTop = 0;//вводим переменную scrollTop и присваиваем ей значение 0
		if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
			$('.header').removeClass('is-transparent');	//убираем у хэдера класс is-transparent 	
		} else {			
			$('.header').addClass('is-transparent');//иначе добавляем этот класс				
		};

		$(window).scroll(function(){	//при скролле	
			var scrollTop = 0;//объявляем переменную scrollTop и присваиваем ей значение 0
			if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
				$('.header').removeClass('is-transparent');	//убираем у хэдера класс is-transparent			
			} else {
				$('.header').addClass('is-transparent');//иначе добавляем этот класс				
			};
		});

    };
    if ($(window).width() > 1699) {//если ширина окна более 1699px
		var topMenu = $('.menu').clone();//объявляем перемнную topMenu и присваиваем ей значение копии элемента с классом menu
		$('.top-menu').append(topMenu);// в .top-menu добавляем копию элемента .menu
	};		

	if ($(window).width() > 1199) {	//если ширина окна больше 1199px

		$('.hamburger').click(function() {//по клику на .hamburger выполняется следующая функция	
			var menu = $('.menu-block');//объявляем переменную menu и присваиваем ей элемент с классом menu-block
			if (menu.hasClass('is-hidden')) {//если у menu присутствует класс is-hidden
				$(this).addClass('is-active');//то добавляем menu класс is-active
				menu.removeClass("is-hidden");// и убираем is-hidden	
			} else {//иначе
				$(this).removeClass('is-active');//убираем is-active
				menu.addClass('is-hidden');//и добавляем menu класс is-hidden 
			};
		});	

		$(window).scroll(function(){// при скролле выполняется след. функция 		
			var scrollTop = 0;//объявляем переменную scrollTop и присваиваем ей значение 0
			if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
				$(".header").addClass("is-fixed");//хэдеру добавляем класс is-fixed		
				$(".menu-block").addClass("is-hidden");//.menu-block добавляем класс is-hidden
				$('.hamburger').removeClass('is-active')//.hamburger убираем класс is-active
			} else {//иначе
				$(".header").removeClass("is-fixed");//хэдеру убираем класс is-fixed
				$(".menu-block").removeClass("is-hidden");//.menu-block убираем класс is-hidden
			};
		});

		var scrollTop = 0;//объявляем переменную scrollTop и присваиваем ей значение 0
		if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
			$(".header").addClass("is-fixed");//хэдеру добавляем класс is-fixed 		
			$(".menu-block").addClass("is-hidden");//.menu-block добавляем класс is-hidden
			$('.hamburger').removeClass('is-active')//.hamburger убираем класс is-active	
		} else {//иначе
			$(".header").removeClass("is-fixed");	//хэдеру убираем класс is-fixed
			$(".menu-block").removeClass("is-hidden");//.menu-block убираем класс is-hidden
		};
		
	} else {	//иначе

		$('.hamburger').click(function() {//по клику на .hamburger выполняется следующая функция
			var menu = $('.menu-block');//объявляем переменную menu и присваиваем ей элемент с классом menu-block		
			if (menu.hasClass('visible')) {	//если у menu присутствует класс visible
				$(this).removeClass('is-active');//	то убираем у menu класс is-active	
				menu.removeClass("visible");//и убираем класс visible	
				$('.overlay').removeClass('is-visible');//у .overlay убираем класс is-visible
				$('body').removeClass('noscroll'); //у body убираем класс noscroll
			} else { //иначе			
				$(this).addClass('is-active');//menu добавляем класс is-active
				menu.addClass('visible').scrollTop(0);//menu добавляем класс visible и устананвливаем значение оступа прокрутки сверху раное 0
				$('.overlay').addClass('is-visible');//.overlay добавляем класс is-visible
				$('body').addClass('noscroll');//body добавляем класс noscroll
			};
		});	

		$('.overlay').click(function(){//при клике на .overlay выполняется след. функция
			var menu = $('.menu-block');//объявляем переменную menu и присваиваем ей элемент с классом menu-block			
			menu.removeClass("visible");//убираем у menu класс visible		
			$('.submenu').removeClass('slide');//.submenu убираем класс slide	
			$(this).removeClass('is-visible');//убираем у menu класс is-visible
			$('.hamburger').removeClass('is-active');//	убираем у .hamburger класс is-active	
			$('body').removeClass('noscroll');// убираем у body класс noscroll
			$('.menu-block').removeClass('noscroll-y');	//убираем у .menu-block класс noscroll-y	
		});	

		$('.menu__link--sub').click(function(){// при клике на .menu__link--sub выполняется след. функция
			event.preventDefault();//отменяется обычное поведение события
			$(this).next().addClass('slide').scrollTop(0);//следующему элементу добавляем класс slide и устананвливаем значение оступа прокрутки сверху раное 0
			$('.menu-block').addClass('noscroll-y');//.menu-block добавляем класс noscroll-y
		});		

		$('.menu__back').click(function(){//при клике на .menu__back выполняется след. функция
			event.preventDefault();//отменяется обычное поведение события
			$(this).parent().parent().removeClass('slide');//
			$('.menu-block').removeClass('noscroll-y');//.menu-block убираем класс noscroll-y
		});	

		$(window).scroll(function(){// при скролле выполняется след. функция		
			var scrollTop = 0;//объявляем переменную scrollTop и присваиваем ей значение 0
			if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
				$(".header").addClass("is-fixed");//хэдеру добавляем класс is-fixed					
			} else {//иначе
				$(".header").removeClass("is-fixed");//	хэдеру убираем класс is-fixed	
			};
		});		

		var scrollTop = 0;//объявляем переменную scrollTop и присваиваем ей значение 0
		if ($(this).scrollTop() > scrollTop) {//если значение отступа прокрутки сверху больше 0
			$(".header").addClass("is-fixed");//хэдеру добавляем класс is-fixed						
		} else {//иначе
			$(".header").removeClass("is-fixed");//	хэдеру убираем класс is-fixed
		};

	};	
