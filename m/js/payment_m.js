$(document).ready(function() {
	
	$("#contents .term input[type=radio]").on('click', function() {
		if( $(this).is("checked") ){
			$(this).closest("ul").addClass("on");	
		} else {
			$(this).closest("div").children("ul").removeClass("on");
			$(this).closest("ul").addClass("on");	
		}
	});
});