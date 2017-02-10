$(document).ready(function() {
  /*라이도박스 효과 기능*/
  $("#contents .term .table .t_radio").on("click",function() {
    $(this).closest("ul").children().removeClass("on");
    $(this).closest("li").addClass("on");
  });
  /*체크박스 효과 기능*/
  $("#contents .option .o_check").on("click", function() {
    $(this).closest("li").toggleClass("on");
  });
});