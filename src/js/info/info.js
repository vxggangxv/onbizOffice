$(document).ready(function() {
  /*공통 셀렉트박스 기능 생성*/
  $("#contents .selectBox .s_btn").on("click", function() {
    $(this).next().next().slideToggle('fast');
  });
  $("#contents .selectBox i").on("click", function() {
    $(this).next().slideToggle('fast');
  });
  /*업종선택 셀렉트박스*/
  $("#contents .category > ul > li").on("click", function() {
    var thIdx = $(this).index();
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
    $(this).find("input").prop("checked", true);
    
    $("#container > section").css("display", "none");
    $("#container > section").eq(thIdx).css("display", "block");
    $("#contents .st_wrap .selectBox ul").hide();
  });
  $("#contents .st_wrap .selectBox ul li").on("click",function(){
    var thVar = $(this).text();
    //console.log(thVar);
    $("#contents .st_wrap .selectBox input").val(thVar);
    $("#contents .st_wrap .selectBox input").attr("type", "button");
    $("#service1").val(thVar);
    $(this).closest("ul").slideUp("fast");
  });
  $("#contents .st_wrap .selectBox ul li:last").on("click",function(){
    $("#service1").val("");
    $("#contents .st_wrap .selectBox input").val("");
    $("#contents .st_wrap .selectBox input").attr("type", "text");
    $("#contents .st_wrap .selectBox input").focus();
    $(this).closest("ul").slideUp("fast");
  });
  /*환불계좌 정보 셀렉트박스*/
  $("#contents .refund .selectBox ul li").on("click",function(){
    var thVar = $(this).text();
    //console.log(thVar);
    $("#contents .refund .selectBox input").val(thVar);
    $("#contents .refund .selectBox input").attr("type", "button");
    $(this).closest("ul").slideUp("fast");
  });
  $("#contents .refund .selectBox ul li:last").on("click",function(){
    $("#contents .refund .selectBox input").val("");
    $("#contents .refund .selectBox input").attr("type", "text");
    $("#contents .refund .selectBox input").focus();
    $(this).closest("ul").slideUp("fast");
  });
  
});