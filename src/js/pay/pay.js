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
  /*스크롤 시 사이드 패널 세로중앙정렬*/
  $(window).scroll(function() {
    var st = $(window).scrollTop();
    var pHeight = $(".price").height();
    pHeight = pHeight / 2 ;
    if (st > 130) {
      $(".price").css({
        "top": "50%",
        "margin-top": -pHeight
      });
    } else {
      $(".price").css({
        "top": "289px",
        "margin-top": "0"
      });
    }
  });
  
});