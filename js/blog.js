var blogmload = function (argument) {
	blogmresize()
	
}
var blogmresize = function (argument) {
	$('.pblog_col').height('auto');
	$('.pblog_col').each(function(index, el) {
		$(this).height($(this).parent().height())
	});
}
var blogmscroll = function (argument) {
	
}


$(function(){

	$(window).bind('load', blogmload);
	$(window).bind('resize', blogmresize);
	$(window).bind('scroll', blogmscroll);
});