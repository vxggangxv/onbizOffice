$(document).ready(function(){
	var target = $('.sec');
	$('.indicator li a').click(function(){
		var idx = $(this).parent().index();
		$('html, body').stop().animate({scrollTop:target.eq(idx).offset().top},200, function(){
			$(this).parent().addClass('on').siblings().removeClass('on');
		});
		return false
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		target.each(function(i){
			posY = $(this).offset().top;
			if (scroll >= posY)
			{
				$('.indicator li').eq(i).addClass('on').siblings().removeClass('on');
			}
			if (scroll == $(document).height()-$(window).height())
			{
				$('.gnb li:last').addClass('on').siblings().removeClass('on');
			}
		});
		if(scroll >= $('.intro').offset().top)
		{
			$('.ancor').show();
		}  else {
			$('.ancor').hide();
		}
	});
	$('.board_write label').on('click', function(){
		if ($('input[type="radio"]').is(':checked'))
		{
			$(this).parent('div').find('input[type="radio"]').removeClass('on');
			$(this).prev().addClass('on');
		}
	});
});