$(document).ready(function() {
  /*라이도박스 효과 기능*/
  $("#contents .term .table .t_radio").on("click",function() {
    $(this).closest("ul").children().removeClass("on");
    $(this).closest("li").addClass("on");
    //$(this).closest("li").prev().css("border-right", "none");
  });
  /*체크박스 효과 기능*/
  $("#contents .option .o_check").on("click", function() {
    $(this).closest("li").toggleClass("on");
  });
  /*카드 할부 선택 기능*/
  $("#contents .way .co_check").on("click", function() {
    var thIdx = $(this).closest("li").index();
    $(this).closest("ul").children().removeClass("on");
    $(this).closest("li").addClass("on");
    $(this).closest("ul").next().children().removeClass("on");
    $(this).closest("ul").next().children().eq(thIdx).addClass("on");
  });
});