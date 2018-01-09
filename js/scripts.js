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

	carouselRight.click(function() {
		target = menuDots.siblings('.active').index();
		target == menuDots.length - 1 ? target = 0 : target += 1;
		moveSlider(target);
	})

	carouselLeft.click(function(){
		target = menuDots.siblings('.active').index();
		target == 0 ? target = menuDots.length - 1 : target -= 1;
		moveSlider(target);
	})

	function moveSlider(target) {
		carouselList.stop().animate({"left": -640 * target});
		menuDots.removeClass("active").eq(target).addClass("active");
	};

	function autoChangeSlide() {
		target = menuDots.siblings('.active').index();
		target == menuDots.length - 1 ? target = 0 : target += 1;
		moveSlider(target);
	};
	var autoMove = setInterval(function(){autoChangeSlide();}, 3000);

	function resetInterval() {
		clearInterval(autoMove);
		var autoMove = setInterval(function(){autoChangeSlide();}, 3000);
	}
});
