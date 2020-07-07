$(document).ready(function() {
  $(".dropdown_parent").mouseenter(function(){
    $(this).children(".dropdown_content").show();
    });

    $(".dropdown_content").mouseleave(function(){
    $(this).hide();
    console.log("pipppo");
  });

  // $(".dropdown_parent").mouseleave(function(){
  //   $(this).children(".dropdown_content").hide();
  // });
});
