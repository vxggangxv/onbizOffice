$(function() {
  $("#faq .f_q").on("click", function() {
    $(this).next().slideToggle("fast");
  });
});