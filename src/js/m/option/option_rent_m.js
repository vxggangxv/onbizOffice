$(document).ready(function() {
  /*임대상품선택 효과 기능*/
  $("#contents .term ul li").on("click",function() {
    $(this).closest("section").find("li").find("input + span").removeClass("on");
    $(this).find("input + span").addClass("on");
    $(this).closest("section").find("li").removeClass("on");
    $(this).addClass("on");
    $(this).find("input").prop("checked", true);
    pay.calc();
  });

  /*이용약관 4가지*/
  $("#contents .terms li .ts_check + span").on("click", function() {
    $(this).toggleClass("on");
    var isChecked = $(this).prev().prop("checked");
    isChecked = !isChecked;
    $(this).prev().prop("checked", isChecked);
  });
  /*주의사항 및 약관 동의 클릭시 보이기/가리기*/
  $("#panel > p i").on("click", function() {
    $(this).closest("p").toggleClass("up");
    $(this).closest("div").children(".txtara").slideToggle();
  });
  /*주의사항 체크박스 기능*/
  $("#panel #agree + span").on("click", function() {
    $(this).toggleClass("on");
    var isChecked = $(this).prev().prop("checked");
    isChecked = !isChecked;
    $(this).prev().prop("checked", isChecked);
  });
  $("#panel #agree + span + label").on("click", function() {
    $(this).prev().toggleClass("on");
  });
});