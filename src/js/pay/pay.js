$(document).ready(function() {
  /*라이도박스 효과 기능*/
  $("#contents .term ul li").on("click",function() {
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
    $(this).find("input").prop("checked", true);
	pay.calc();
  });
  /*체크박스 효과 기능*/
  $("#contents .option .o_check").on("click", function() {
    $(this).closest("li").toggleClass("on");
  });
  $("#contents .option li").on("click", function() {
    var isChecked =  $(this).find("input[type=checkbox]").prop('checked');
    $(this).toggleClass("on");
    isChecked = !isChecked;
    $(this).find("input[type=checkbox]").prop('checked', isChecked);
	pay.calc();
  });
  /*카드 할부 선택 기능*/
  $("#contents .way li").on("click", function() {
    var thIdx = $(this).index();
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
    $(this).find("input").prop("checked", true);
    $(this).closest("ul").next().children().removeClass("on");
    $(this).closest("ul").next().children().eq(thIdx).addClass("on");
  /*모바일용 연결*/
    $("#m_way").find("ul li").eq(thIdx).find("input").prop("checked", true);
    $("#m_way").find("ul li").removeClass("on");
    $("#m_way").find("ul li").eq(thIdx).addClass("on");
  });
  /*모바일용 선택*/
  $("#m_way li").on("click", function() {
    var thIdx = $(this).index();
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
  });
  var wd = $(window).width();
  if (wd >= 768) {
    setTimeout(function() {
      $(".price").addClass("on");
    }, 1000);
  }
  $(window).on("resize", function() {
    var r_wd = $(window).width();
    if (r_wd >= 768) {
      setTimeout(function() {
        $(".price").removeClass("m_on");
        $(".price").addClass("on");
      }, 1000);
    } else {
      $(".price").removeClass("on");
      $(".price").addClass("m_on");
    } 
  });

  /*주의사항 및 약관 동의 클릭시 보이기/가리기*/
  $("#panel > p i").on("click", function() {
    $(this).closest("p").toggleClass("up");
    $(this).closest("div").children(".txtara").slideToggle();
  });
});