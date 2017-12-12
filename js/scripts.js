$(function() {
	var carouselList = $(".photo"),
		carouselMenu = $(".carousel-indicators"),
		carouselLeft = $(".fa-angle-left"),
		carouselRight = $(".fa-angle-right");
		

	carouselList.find("li").each(function() {
		carouselMenu.append("<li></li>");
	});
	
	var menuDots = carouselMenu.find("li");
	menuDots.first().addClass("active");

	menuDots.click(function() {
		target = $(this).index();
		moveSlider(target);
	});

	function moveSlider(target) {
		carouselList.stop().animate({"left": -640 * target});
		menuDots.removeClass("active").eq(target).addClass("active");
	};

	//============
	//set interval

	slideInterval = setInterval(changeSlide, 3000);

	function changeSlide() {
		carouselList.animate({"margin-left": -640}, 500, moveFirstSlide);
	};
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	//======================
	//set navigation - right (po kliknięciu resetujemy interval następnie 
	//uruchamiamy przewinięcie na następny slajd i ponownie ustawiamy interval)

	carouselRight.click(function() {
		clearInterval(slideInterval);
		changeSlide();
		setInterval(changeSlide, 3000);
	});


/*	
	var carouselList = $("#carousel ul"),
		setTimeInterval,
		slideWidth = 640,
		animationTime = 1000;

	
	$('#right').click(function() {
		clearInterval(setTimeInterval);
		changeSlide();
		setSlideInterval();
	});

	$('#left').click(changeSlideLeft);
		function changeSlideLeft() {
		clearInterval(setTimeInterval);
		moveFirstSlideLeft();
		carouselList.animate({'marginLeft':0}, animationTime, setSlideInterval);
	};

	function moveFirstSlideLeft() {
		firstItem.before(lastItem);
		carouselList.css({'marginLeft':-slideWidth});
	}; 
*/
});
