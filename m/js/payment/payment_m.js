$(document).ready(function() {
	/*라디오박스 스타일 설정*/
	$("#contents .term input[type=radio]").on('click', function() {
		if( $(this).is("checked") ){
			$(this).closest("ul").addClass("on");	
		} else {
			$(this).closest("div").children("ul").removeClass("on");
			$(this).closest("ul").addClass("on");	
		}
	});
	/*체크박스 스타일 설정*/
	$("#contents .add input[type=checkbox] + label").on("click", function() {
		$(this).closest("ul").toggleClass("on");
	});
});