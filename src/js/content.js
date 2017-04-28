$(document).ready(function(){
	//이미지 넣기
	$.LayerPop = function(url) {
		$("#pop_img").attr("src",url);
		var width = $("#pop_img").width();
		$("#pop_img").css({"height":"100%"});
		$("#pop_wrap").show();
	}

	//이미지 로드시 박스위드조절
	$.ImageLoad = function(width) {
		$(".pop_img_wrap").css({"width":width});
	}

	//이전버튼
	$.PrevImage = function(Pimg) {
		var img_num = Pimg.replace(/[^0-9]/g,'');
		var Pimg_num = parseInt(img_num)-1;
		if(Pimg_num < 1) {
			alert("처음 이미지입니다.");
			$("#pop_wrap").hide();
			
		}
		var Pimg_url = "http://img.ditower.co.kr/"+Pimg_num+".jpg";
		$("#pop_img").attr("src",Pimg_url);
	}
	
	//다음버튼
	$.NextImage = function(Nimg) {
		var img_num = Nimg.replace(/[^0-9]/g,'');
		var Nimg_num = parseInt(img_num)+1;
		if(Nimg_num > 20) {
			alert("마지막 이미지입니다.");
			$("#pop_wrap").hide();
			
		}
		var Nimg_url = "http://img.ditower.co.kr/"+Nimg_num+".jpg";
		$("#pop_img").attr("src",Nimg_url);
	}

	//닫기버튼
	$.ClosePop = function() {
		$("#pop_wrap").hide();
	}

	$("#pop_wrap").on("selectstart", function(event){ return false; });
$("#pop_wrap").on("dragstart", function(event){ return false; });

	//하단바 클릭시 맨위로 이동
	$("#top_up").click(function(){
		$('html, body').animate({scrollTop:0},500);
	});

	//높이값들
	var home = 0;//$("#comp-ihjck6rgiframe").offset().top;
	var introduce = $("#comp-ihditsk8").offset().top;
	var servzone = $("#service_zone").offset().top;
	var withus = $("#comp-ihdjadsi").offset().top;
	var gallary = $("#comp-ihdkb6ks").offset().top;
	var floor = $(".floor_box").offset().top;
	var service = $("#comp-ihemf2iy").offset().top;
	var contact = $("#comp-ihenviaz").offset().top;
	

	//우측 메뉴 마우스 오버시 액션
	$(".s29_symbol").hover(function(){
		$(this).parents(2).addClass("s29_active");
	});
	$(".s29_item").mouseleave(function(){
		if(!$(this).hasClass("s29_selected")) {
			$(this).removeClass("s29_active");
		}
	});

	//상단 메뉴 이동
	$(".s3repeaterButtonbg").each(function(index){
		$(this).click(function(){
			switch(index) {
				case 0 :
					$('html, body').animate({scrollTop:home},500);
				break;
				case 1 :
					$('html, body').animate({scrollTop:introduce},500);
				break;
				case 2 :
					$('html, body').animate({scrollTop:servzone},500);
				break;
				case 3 :
					$('html, body').animate({scrollTop:withus},500);
				break;
				case 4 :
					$('html, body').animate({scrollTop:gallary},500);
				break;
				case 5 :
					$('html, body').animate({scrollTop:contact},500);
				break;
			}
		});
	});

	//우측 메뉴 이동
	$(".s29_symbol").each(function(index){
		$(this).click(function(){
			switch(index) {
				case 0 :
					$('html, body').animate({scrollTop:home},500);
				break;
				case 1 :
					$('html, body').animate({scrollTop:introduce},500);
				break;
				case 2 :
					$('html, body').animate({scrollTop:servzone},500);
				break;
				case 3 :
					$('html, body').animate({scrollTop:withus},500);
				break;
				case 4 :
					$('html, body').animate({scrollTop:gallary},500);
				break;
				case 5 :
					$('html, body').animate({scrollTop:floor},500);
				break;
				case 6 :
					$('html, body').animate({scrollTop:service+100},500);
				break;
				case 7 :
					$('html, body').animate({scrollTop:contact},500);
				break;
			}
		});
	});

	// 페이지 시작, 새로고침시 우측메뉴 로드
	var bodysctop = $(document).scrollTop();
	if(bodysctop >= home && bodysctop < introduce) {
		$(".s29_item").eq(0).addClass("s29_active s29_selected");
		$(".s29_item").eq(0).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= introduce && bodysctop < servzone) {
		$(".s29_item").eq(1).addClass("s29_active s29_selected");
		$(".s29_item").eq(1).siblings().removeClass("s29_active s29_selected");
	}else if(bodysctop >= servzone && bodysctop < withus) {
		$(".s29_item").eq(2).addClass("s29_active s29_selected");
		$(".s29_item").eq(2).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= withus && bodysctop < gallary) {
		$(".s29_item").eq(3).addClass("s29_active s29_selected");
		$(".s29_item").eq(3).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= gallary && bodysctop < floor) {
		$(".s29_item").eq(4).addClass("s29_active s29_selected");
		$(".s29_item").eq(4).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= floor && bodysctop < service) {
		$(".s29_item").eq(5).addClass("s29_active s29_selected");
		$(".s29_item").eq(5).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= service && bodysctop < contact) {
		$(".s29_item").eq(6).addClass("s29_active s29_selected");
		$(".s29_item").eq(6).siblings().removeClass("s29_active s29_selected");
	} else if(bodysctop >= contact-1) {
		$(".s29_item").eq(7).addClass("s29_active s29_selected");
		$(".s29_item").eq(7).siblings().removeClass("s29_active s29_selected");
	}

	//우측 메뉴 스크롤 높이따라 변환
	$(document).scroll(function(){
		var bodysctop = $(document).scrollTop();
		if(bodysctop >= home && bodysctop < introduce) {
			$(".s29_item").eq(0).addClass("s29_active s29_selected");
			$(".s29_item").eq(0).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= introduce && bodysctop < servzone) {
			$(".s29_item").eq(1).addClass("s29_active s29_selected");
			$(".s29_item").eq(1).siblings().removeClass("s29_active s29_selected");
		}else if(bodysctop >= servzone && bodysctop < withus) {
			$(".s29_item").eq(2).addClass("s29_active s29_selected");
			$(".s29_item").eq(2).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= withus && bodysctop < gallary) {
			$(".s29_item").eq(3).addClass("s29_active s29_selected");
			$(".s29_item").eq(3).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= gallary && bodysctop < floor) {
			$(".s29_item").eq(4).addClass("s29_active s29_selected");
			$(".s29_item").eq(4).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= floor && bodysctop < service) {
			$(".s29_item").eq(5).addClass("s29_active s29_selected");
			$(".s29_item").eq(5).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= service && bodysctop < contact) {
			$(".s29_item").eq(6).addClass("s29_active s29_selected");
			$(".s29_item").eq(6).siblings().removeClass("s29_active s29_selected");
		} else if(bodysctop >= contact-1) {
			$(".s29_item").eq(7).addClass("s29_active s29_selected");
			$(".s29_item").eq(7).siblings().removeClass("s29_active s29_selected");
		}
	});

			///////////////////////////////////////////////////////////////////////////////////////////////////
	// 페이지 시작, 새로고침시 우측메뉴 로드
	var right_menu = $("#comp-ihetwc6qmenuContainer").offset().top;
	if (right_menu >= servzone && right_menu < gallary) {
		$(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
		$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#000","stroke":"#fff"});
		$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
		$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
		
		$(".s29_symbol").mouseenter(function(){
			$(this).css({"fill":"#000","stroke":"#fff"});
		});
		$(".s29_item").mouseleave(function(){
			if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
				$(this).find(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
			}
		});
		$(".s29_label").css({"color":"#fff"});

	} else if (right_menu >= floor && right_menu < contact) {
		$(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
		$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#000","stroke":"#fff"});
		$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
		$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
		
		$(".s29_symbol").mouseenter(function(){
			$(this).css({"fill":"#000","stroke":"#fff"});
		});
		$(".s29_item").mouseleave(function(){
			if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
				$(this).find(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
			}
		});
		$(".s29_label").css({"color":"#fff"});

	} else {
		$(".s29_symbol").css({"fill":"#000","stroke":"#000"});
		$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#fff","stroke":"#000"});
		$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
		$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
		
		$(".s29_symbol").mouseenter(function(){
			$(this).css({"fill":"#fff","stroke":"#000"});
		});
		$(".s29_item").mouseleave(function(){
			if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
				$(this).find(".s29_symbol").css({"fill":"#000","stroke":"#000"});
			}
		});
		$(".s29_label").css({"color":"#000"});
	}

	//우측 메뉴 영역따라 색 변환
	$(document).scroll(function(){
		var right_menu = $("#comp-ihetwc6qmenuContainer").offset().top;
		if (right_menu >= servzone && right_menu < gallary) {
			$(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
			$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#000","stroke":"#fff"});
			$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
			$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
			
			$(".s29_symbol").mouseenter(function(){
				$(this).css({"fill":"#000","stroke":"#fff"});
			});
			$(".s29_item").mouseleave(function(){
				if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
					$(this).find(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
				}
			});
			$(".s29_label").css({"color":"#fff"});

		} else if (right_menu >= floor && right_menu < contact) {
			$(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
			$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#000","stroke":"#fff"});
			$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
			$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
			
			$(".s29_symbol").mouseenter(function(){
				$(this).css({"fill":"#000","stroke":"#fff"});
			});
			$(".s29_item").mouseleave(function(){
				if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
					$(this).find(".s29_symbol").css({"fill":"#fff","stroke":"#fff"});
				}
			});
			$(".s29_label").css({"color":"#fff"});

		} else {
			$(".s29_symbol").css({"fill":"#000","stroke":"#000"});
			$(".s29_item.s29_active").find(".s29_symbol").css({"fill":"#fff","stroke":"#000"});
			$(".s29_item.s29_active").find(".s29_symbol").addClass("selected_sym");
			$(".s29_item").not(".s29_active").find(".s29_symbol").removeClass("selected_sym");
			
			$(".s29_symbol").mouseenter(function(){
				$(this).css({"fill":"#fff","stroke":"#000"});
			});
			$(".s29_item").mouseleave(function(){
				if(!$(this).find(".s29_symbol").hasClass("selected_sym")) {
					$(this).find(".s29_symbol").css({"fill":"#000","stroke":"#000"});
				}
			});
			$(".s29_label").css({"color":"#000"});
		}
	});
	///////////////////////////////////////////////////////////////////////////////////////////////

	$("#fixed_inquiry").mouseenter(function(){
		if(!$(this).is(":animated")) {
			layerOnoff('on');
		}
	});
	$("html").not("#fixed_inquiry").click(function(){
		event.stopPropagation();
		layerOnoff('off');
	});
	$("#fixed_inquiry").click(function(){
		event.stopPropagation();
		layerOnoff('on');
	});
	$("#fixed_inquiry").mouseleave(function(){
		event.stopPropagation();
		layerOnoff('off');
	});
});

//폼체크
function formSubmit() {
	var fform = $("#fixed_form");
	var chk_name = $("#comp-iheonyjxnameField");
	var chk_email = $("#comp-iheonyjxEmailField");
	var chk_phone1 = $("#comp-iheonyjxphoneField1");
	var chk_phone2 = $("#comp-iheonyjxphoneField2");
	var chk_phone3 = $("#comp-iheonyjxphoneField3");
	var chk_subject = $("#comp-iheonyjxsubjectField");
	var chk_message = $("#comp-iheonyjxmessageField");

	if($.trim(chk_name.val()).length < 1) {
		alert('이름을 입력해주세요');
		chk_name.focus();
		layerOnoff('on');
		return false;
	}

	if($.trim(chk_email.val()).length <1 ) {
		alert('이메일을 입력해주세요');
		chk_email.focus();
		layerOnoff('on');
		return false;	
	} else {
		var mail_chk = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(!mail_chk.test(chk_email.val())) {
			alert("잘못된 이메일 형식입니다.");  		
			chk_email.focus();
			layerOnoff('on');
			return false;
		}
	}

	if($.trim(chk_phone1.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');		
		chk_phone1.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_phone2.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');
		chk_phone2.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_phone3.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');
		chk_phone3.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_subject.val()).length <1 ) {
		alert('제목을 입력해주세요');
		chk_subject.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_message.val()).length <1 ) {
		alert('내용을 입력해주세요');
		layerOnoff('on');
		chk_message.focus();
		return false;	
	}
	$("#fixed_form").submit();
}

//숫자 입력체크
function Onlynum(value,id) {
	if(event.keyCode != 9 && event.keyCode != 8) {
		if($.isNumeric(value) === true && $("#"+id).val().length > 3) {
			$("#"+id).next("input").focus();
		} else if($.isNumeric(value) === true) {
			return true;
		} else {
			$("#"+id).val('');
		}
	}
}

function layerOnoff(mode) {
	if(mode == "on") {
		$("#fixed_inquiry").animate({"opacity":"1"},300);
	} else {
		var chkCnt	= 0;
		$(".inquiry").each(function(){
			if($(this).is(":focus")) {
				chkCnt++;
			}
		});
	}
		if(chkCnt < 1) {
			$("#fixed_inquiry").animate({"opacity":"0.7"},200);
		}
	}

function floorPop(width,height,image) {
	var winH = $(window).height();
	var winW = $(window).width();
	var popH = (winH-height)/2;
	var popW = (winW-width)/2;
	var pop = window.open("/pop.php?img="+image,'','width='+width+'px,height='+height+'px,top='+popH+'px,left='+popW+'px');
}


//팝업1
function Layer_pop()
{	
	$("#pop_wrap").show();
}
function pop_cclose()
{
	$.cookie('nopen_pop','nopen',{expires:7,path:'/'});
	$("#pop_wrap").hide();
}
function pop_close()
{
	var nopen_chk = $("#not_open").is(":checked");
	if(nopen_chk == true)
	{
		$.cookie('nopen_pop','nopen',{expires:7,path:'/'});
	}
	$("#pop_wrap").hide();
}

//팝업2
function Layer_pop2()
{	
	$("#pop_wrap2").show();
}
function pop_cclose2()
{
	$.cookie('nopen_pop2','nopen2',{expires:7,path:'/'});
	$("#pop_wrap2").hide();
}
function pop_close2()
{
	var nopen_chk = $("#not_open2").is(":checked");
	if(nopen_chk == true)
	{
		$.cookie('nopen_pop2','nopen2',{expires:7,path:'/'});
	}
	$("#pop_wrap2").hide();
}