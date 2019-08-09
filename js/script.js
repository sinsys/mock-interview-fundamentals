$(function(){

	$('blockquote').click(function(){
		$(this).next('p').slideToggle();
		$(this).next('div.iframe').slideToggle();
		$(this).toggleClass('expanded');
	});
});

