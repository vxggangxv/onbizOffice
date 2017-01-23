$(function () {
	/*위로가기 버튼 클릭*/
  $(".btntop").click(function() {
		$(window).scrollTop(0);
	});
	/*tab 클릭시 Nav전체화면 등장*/
	$(".nav_tab").on("click", function() {
		$("#backDrop").fadeIn();
	});
	/*X, 홈으로 클릭시 Nav사라짐*/
	$(".clsBtn").on("click", function() {
		$(this).closest("div").fadeOut();
	});
	/*임대신청내역확인, Login클릭시 내역조회 등장*/
	$(".chClk, .chk_clsBtn").on("click", function() {
		$(this).closest("section").addClass("off");
		$(this).closest("section").next().removeClass("off");
	});
	/*내역조회 X버튼 클릭시 다시 Nav등장*/
	$(".chk_clsBtn").on("click", function() {
		$(this).closest("section").addClass("off");
		$(this).closest("section").prev().removeClass("off");
	});
});     