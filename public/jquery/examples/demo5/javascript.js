$(document).ready(function(){
  $("#b1").on("click",function(){
    $("h1, #d1, p").addClass("error");
  });
  $("#b2").on("click",function(){
    $("h1, #d1, p").removeClass("error");
  });
  $("#b3").on("click",function(){
    $("h1, #d1, p").toggleClass("error");
  });
  $("#b4").on("click",function(){
    //Key/value for a single property
    $("h1, #d1, p").css("background-color", "yellow");
  });
  $("#b5").on("click",function(){
    //Object to change several properties
    $("h1, #d1, p").css({
      "background-color": "yellow",
      "border": "solid blue 1px"
    });
  });
});