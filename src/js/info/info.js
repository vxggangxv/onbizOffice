$(document).ready(function() {
  /*셀렉트박스 기능 생성*/
  $("#contents .selectBox .s_btn").on("click", function() {
    $(this).next().next().slideToggle('fast');
  });
  $("#contents .selectBox i").on("click", function() {
    $(this).next().slideToggle('fast');
  });
  $("#contents .category > ul > li label").on("click", function() {
    var thIdx = $(this).closest("li").index();
    $(this).closest("ul").children().removeClass("on");
    $(this).closest("li").addClass("on");
    $("#container > section").css("display", "none");
    $("#container > section").eq(thIdx).css("display", "block");
    $("#contents .selectBox ul").hide();
  });
  $("#contents .selectBox ul li").on("click",function(){
    var thVar = $(this).text();
    console.log(thVar);
    $("#contents .selectBox input").val(thVar);
    $("#contents .selectBox input").attr("type", "button");
    $(this).closest("ul").slideUp("fast");
  });
  $("#contents .selectBox ul li:last").on("click",function(){
    $("#contents .selectBox input").val("");
    $("#contents .selectBox input").attr("type", "text");
    $("#contents .selectBox input").focus();
    $(this).closest("ul").slideUp("fast");
  });
  
  
});