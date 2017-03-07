$(document).ready(function() {
	/*라디오박스 클릭 시 스타일 설정*/
	/*$("#contents .term input[type=radio]").on('click', function() {
		if( $(this).is("checked") ){
			$(this).closest("ul").addClass("on");	
		} else {
			$(this).closest("div").children("ul").removeClass("on");
			$(this).closest("ul").addClass("on");	
		}
	});*/
	/*라디오 박스 클릭 시 스타일 설정*/
	$("#contents .term:nth-child(2) ul").on("click",function() {
    $(this).closest("div").children("ul").removeClass("on");
    $(this).addClass("on");
    $(this).find("input[type=radio]").prop("checked", true);
	});
	/*체크 박스 클릭 시 스타일 설정*/
	$("#contents .term.add ul").on("click",function() {
		$(this).toggleClass("on");
		var isChecked =  $(this).find("input[type=checkbox]").prop('checked');
		console.log(isChecked);
		isChecked = !isChecked;
    $(this).find("input[type=checkbox]").prop("checked", isChecked);
		console.log(isChecked);
	});
	/*주의사항 및 약관 동의 클릭시 보이기/가리기*/
	$("#panel > p span").on("click", function() {
		$(this).closest("p").toggleClass("up");
		$(this).closest("div").children(".txtara").slideToggle();
	});
});