$(function() {
  $("#faq .f_q").on("click", function() {
    $(this).next().slideToggle("fast");
  });
  /*tab 클릭시 Nav전체화면 등장*/
	$(".nav_tab").on("click", function() {
		$("#backDrop").fadeOut();
		$("#menu_wrap").fadeOut();
	});
});