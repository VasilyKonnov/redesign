var indexresize = function(){
	$('.index_bg').animate({
		paddingBottom: $('.tbott').innerHeight()+'px',
	},
	300, function() {

	});
}
var indexload = function(){
	indexresize();
}

$(function(){
	console.log('index.js');
	
	var auto=false,ap=5000,tsasNavFor=false;
	if($('.index_sliderbg')[0]){
		$('.index_sliderbg').slick({
			arrows: false,
			asNavFor: '.topslider_slick',
			autoplay:false,
			autoplaySpeed:ap,
			centerMode: false,
			centerPadding: '60px',
			cssEase:'ease',
			customPaging: function(slider, i) {
				return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
			},
			dots:false,
			swipe:false,
			swipeToSlide:false,
			touchMove:false,
		});
		tsasNavFor='.index_sliderbg'
	}

	$('.topslider_slick').slick({
			accessibility:true ,//Включает табулируя и клавиша со стрелкой навигации
			adaptiveHeight: true,
			arrows: true,
			asNavFor: tsasNavFor,
			autoplay:false,
			autoplaySpeed:ap,
			cssEase:'ease',
			customPaging: function(slider, i) {
				return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
			},
			dots:true,
			nextArrow:'<button type="button" class="slick-next"><i class="icon-right-open"></i></button>',
			prevArrow:'<button type="button" class="slick-prev"><i class="icon-left-open"></i></button>',
			rows:1, // 1 инициализирует режим сетки.
			swipe:true,
		});

	$('.index_bg').parallax(0.03);
	

	indexresize();
	$(window).bind('resize', indexresize);
	$(window).bind('load', indexload);
});