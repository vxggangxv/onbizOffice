$(document).ready(function() {
  $("#contents .selectBox .s_btn").on("click", function() {
    $(this).next().slideToggle('fast');
  });
  $("#contents .category li").on("click", function() {
    var thIdx = $(this).index();
    $("#container > section").css("display", "none");
    $("#container > section").eq(thIdx).css("display", "block");
  });
  
});