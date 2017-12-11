$(function() {
	var carouselList = $("#carousel ul"),
		setTimeInterval,
		slideWidth = 640,
		animationTime = 1000,
		firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	function setSlideInterval() {
		setTimeInterval = setInterval(changeSlide, 3000);
	}
	setSlideInterval();

	function changeSlide() {
		carouselList.animate({'marginLeft':-slideWidth}, animationTime, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
/*
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
