$(document).ready(function() {
  $(".dropdown_parent").mouseenter(function(){
    $(this).children(".dropdown_content").show();
    });

    $(".dropdown_content").mouseleave(function(){
    $(this).hide();
    // console.log("pipppo");
  });

  // $(".dropdown_parent").mouseleave(function(){
  //   $(this).children(".dropdown_content").hide();
  // });

  // menu hamburger mobile version
  $(".fas.fa-bars").click(function(){
    $(".menu_hamburger_content").show();
  });
  $(".fas.fa-times").click(function(){
    $(".menu_hamburger_content").hide();
  });

  $(".fas.fa-angle-down").click(function(){
    $(this).removeClass("fa-angle-down").addClass("fa-angle-up");
  });
// non funziona
  $(".fas.fa-angle-up").click(function(){
    console.log("ciao");
    $(this).removeClass("fa-angle.up").addClass("fa-angle-down")
  })
});
