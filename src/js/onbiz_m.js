var etc = {
	onlynum: function(e, i) {
		if(event.keyCode != 9 && event.keyCode != 8) {
			if($.isNumeric(e) === true) {
				return true;
			} else {
				$("#" + i).val("");
			}
		}
	},

	service: function(e) {
		if(e == "dr") {
			$("#service2").show();
		} else {
			$("#service2").hide();
		}
	},
	
	maxlength(e){
		if (e.value.length > e.maxLength) {
			e.value = e.value.slice(0, e.maxLength);
		}    
	},
	
	layer: function() {
		$('.ebizPost_layer').css({ 
		  'border': 'none',  
		  'top': '0px',  
		  'left': '0px',  
		  'width': '66.6%',  
		  'height': '66.6%', 
		  'z-index' : '1000001' 
		});
		
		 $(window).scrollTop(0);
	}
}

var contract = {
	copy: function(e) {
		if(e == 1) {
			$("#name").val($("#_name").val());
			$("#tel1").val($("#_tel1").val());
			$("#tel2").val($("#_tel2").val());
			$("#tel3").val($("#_tel3").val());
		} else {
			$("#cname").val($("#_name").val());
			$("#ctel1").val($("#_tel1").val());
			$("#ctel2").val($("#_tel2").val());
			$("#ctel3").val($("#_tel3").val());
		}
	},

	search: function() {
		/*
		if(!$("input[name='zmail1']").val())
		{
			alert("이메일을 입력해주세요.");
			$("input[name='zmail1']").focus();
			return;
		}

		if(!$("input[name='zmail2']").val())
		{
			alert("이메일을 입력해주세요.");
			$("input[name='zmail2']").focus();
			return;
		}
		*/

		if(!$("input[name='ztel1']").val())
		{
			alert("전화번호를 입력해주세요.");
			$("input[name='ztel1']").focus();
			return;
		}

		if(!$("input[name='ztel2']").val())
		{
			alert("전화번호를 입력해주세요.");
			$("input[name='ztel2']").focus();
			return;
		}

		if(!$("input[name='ztel3']").val())
		{
			alert("전화번호를 입력해주세요.");
			$("input[name='ztel3']").focus();
			return;
		}

		$.ajax({		
			type: "post",
			url: "/rent/state.php",
			data: $("#zform").serialize(),
			success: function(r){
				res = r.split("||");
				
				if(res[0] == "N") {
					alert(res[1]);
				} else {
					$("#search").html(r);
				}
			} 
		});	
	}
}

var pay = {
	simple: function() {
		if(!$("input[name='name']").val()) {
			alert("성명을 입력해주세요.");
			$("input[name='name']").focus();
			return;
		}

		if(!$("input[name='tel']").val()) {
			alert("연락처를 입력해주세요.");
			$("input[name='tel']").focus();
			return;
		}

		$("form[name='iform']").submit();
	},

	calc: function() {
		z = 0;

		$("input[name^=opt]").each(function(i) {
			if($("input[name^=opt]").eq(i).is(":checked") == true) {
				$("#option" + i).show();
				z++;
			} else {
				$("#option" + i).hide();
			}
		});

		onbiz	= $(":radio[name='rent']:checked").val().split("^");
		deposit	= $("input[name='deposit']").val();
		onmonth	= onbiz[0];
		onwork	= onbiz[1];
		price1	= onbiz[2];
		onsale1	= parseInt(price1) - parseInt(onwork);
		onsale2 = onsale1 * 1.1;
		onsale3 = (onsale2 > 0) ? "-" + onsale2 : onsale2;
		option	= onmonth * z * $("input[name='option']").val();
		cardkey	= ($("#cardkey").is(":checked") == true) ? $("input[name='_card']").val() : 0;

		if($("#parking").is(":checked") == true) {
			parking = $("input[name='_parking']").val();
			$("#parking1").show();
		} else {
			parking = 0;
			$("#parking1").hide();
		}

		//parking	= ($("#parking").is(":checked") == true) ? $("input[name='_parking']").val() : 0;
		opt		= parseInt(option) + parseInt(parking);

		normal	= parseInt(onwork) + parseInt(option) + parseInt(parking);
		normal2	= parseInt(price1) + parseInt(opt);
		tax		= normal * 0.1;
		tax2	= normal2 * 0.1;
		total	= parseInt(deposit) + parseInt(normal) + parseInt(tax);

		goods	= "임대료 " + onmonth + "개월";

		if(z > 0) {
			goods += " 외 옵션상품";
		}

		$("input[name='money']").val(total);
		$("input[name='goods_name']").val(goods);
		$("input[name='month']").val(onmonth);
		$("input[name='tax']").val(tax);

		$("#month").html(onmonth + "개월");
		$("#total").html($.number(total) + "원<span>(VAT포함)</span>");
		$("#blank1").html($.number(onwork) + "원");
		$("#options").html($.number(opt) + "원");
		$("#tax").html($.number(tax) + "원");

		$.ajax({		
			type: "post",
			url: "/rent/state.php",
			data: "mode=rdate&a=" + $("input[name='date']").val() +"&b=" + onmonth,
			success: function(r){
				$("#edate").html(r);
			}
		});		
	},

	payment: function() {
		if($("#ts1").is(":checked") == false) {
			alert("전자금융거래 이용약관에 동의해주세요.");
			$("#ts1").prop("checked", true);
			return false;
		}

		if($("#ts2").is(":checked") == false) {
			alert("개인정보의 수집 및 이용안내에 동의해주세요.");
			$("#ts2").prop("checked", true);
			return false;
		}

		if($("#ts3").is(":checked") == false) {
			alert("개인정보 제공 및 위탁안내에 동의해주세요.");
			$("#ts3").prop("checked", true);
			return false;
		}

		if($("#ts4").is(":checked") == false) {
			alert("정기과금 이용약관에 동의해주세요.");
			$("#ts4").prop("checked", true);
			return false;
		}


		if($("#agree").is(":checked") == false) {
			alert("주의사항 및 약관에 동의해주세요.");
			$("#agree").prop("checked", true);
			return false;
		}

		if($("input:radio[name='p_method']:checked").val() == "manualcard"){
			$("form[name='order']").attr({"action": "http://pay." + $("input[name='path']").val() + "/agreement_m.php"}).submit();		
		} else {
			$("form[name='order']").attr({"action": "http://pay.onbiz.co.kr/payment_m.php"}).submit();
		}
	},

	rent: function() {
		if(!$("#name").val()) {
			alert("성명을 입력해주세요.");
			$("#name").focus();
			return;
		}

		if(!$("input[name='tel1']").val()) {
			alert("연락처를 입력해주세요.");
			$("input[name='tel1']").focus();
			return;
		}

		if(!$("input[name='tel2']").val()) {
			alert("연락처를 입력해주세요.");
			$("input[name='tel2']").focus();
			return;
		}

		if(!$("input[name='tel3']").val()) {
			alert("연락처를 입력해주세요.");
			$("input[name='tel3']").focus();
			return;
		}

		pay.payment();
	}
}