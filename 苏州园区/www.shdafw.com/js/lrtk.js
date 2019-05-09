$(function(){
	$('.m-btn').click(function(){
		$('.m-menu').slideToggle();
		$(this).toggleClass('open-menu');
		$('.bdbg').toggle();
	});
	$('.m-menu li').click(function(){
		$(this).find('.sub').slideToggle();
	});
	$('.m-menu .yi').click(function(){
		var _this=$(this);
		if(_this.hasClass('cur')){
			_this.removeClass('cur').next('.sub_nav_01').slideUp();
		}else{
			_this.addClass('cur').next('.sub_nav_01').slideDown().parent('li').siblings('li').children('a').removeClass('cur').next('.sub_nav_01').slideUp();
		};
	});
})