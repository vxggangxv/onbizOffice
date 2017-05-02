$(document).ready(function(){
    var target = $('.sec');
    $('.gnb li h2 a').click(function(){
        idx = $(this).parents('li').index();
        $('html, body').stop().animate({scrollTop:target.eq(idx).offset().top-130},300, function(){
            $('.gnb li').eq(idx).find('a').addClass('on').parents('li').siblings().find('a').removeClass('on');
        });
        return false;
    });
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        target.each(function(i){
            posY = $(this).offset().top-130;
            if (scroll >= posY) {
                $('.gnb li').eq(i).find('a').addClass('on').parents('li').siblings().find('a').removeClass('on');
            }
			if(scroll >= $('.intro').offset().top) {
				$('.move_top').show();
			}else {
				$('.move_top').hide();
			}
        });
    });
	$('.move_top').click(function(){
		$('html, body').stop().animate({scrollTop:0},300);
		return false;
	});
});