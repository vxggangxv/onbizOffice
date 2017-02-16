$(document).ready(function() {
  /*라이도박스 효과 기능*/
  $("#contents .term ul li").on("click",function() {
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
    $(this).find("input").prop("checked", true);
  });
  /*체크박스 효과 기능*/
  $("#contents .option .o_check").on("click", function() {
    $(this).closest("li").toggleClass("on");
  });
  $("#contents .option li").on("click", function() {
    var isChecked =  $(this).find("input[type=checkbox]").prop('checked');
    $(this).toggleClass("on");
    //console.log( isChecked );
    isChecked = !isChecked;
    $(this).find("input[type=checkbox]").prop('checked', isChecked);
    //console.log( isChecked );
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
  /*모바일용 선택 카드할부 선택*/
  $("#m_way li").on("click", function() {
    var thIdx = $(this).index();
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
  });
  /*결제하실 금액 브라우저 너비에 따라 조절*/
  var wd = $(window).width();
  var ht = $(window).height();
  if( wd >= 768 ){
    $(".price").css({
      "position": "fixed"
    });
    /*스크롤 시 사이드 패널 세로중앙정렬*/
    $(window).scroll(function() {
      var st = $(window).scrollTop();
      var pHeight = $(".price").height();
      pHeight = pHeight / 2 ;
      if(ht > 828) {
        $(".price").css({
          "top": "50%",
          "margin-top": -pHeight
        });
      } else {
        $(".price").css({
          "top": "0"
        });
      }
    });
  }
  $(window).resize(function() {
    var wd = $(window).width();
    var ht = $(window).height();
    if( wd >= 768 ){
      $(".price").css({
        "position": "fixed"
      });
      /*스크롤 시 사이드 패널 세로중앙정렬*/
        var st = $(window).scrollTop();
        var pHeight = $(".price").height();
        pHeight = pHeight / 2 ;
      if(ht > 828) {
        $(".price").css({
          "top": "50%",
          "margin-top": -pHeight
        });
      } else {
        $(".price").css({
          "top": "0"
        });
      }
    } else {
      $(".price").css({
        "position": "relative",
        "top": 0,
        "margin-top": 0
      });
    }
  });
  
  /*주의사항 및 약관 동의 클릭시 보이기/가리기*/
  $("#panel > p i").on("click", function() {
    $(this).closest("p").toggleClass("up");
    $(this).closest("div").children(".txtara").slideToggle();
  });
  
  
  
});