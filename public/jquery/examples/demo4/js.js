$(document).ready(function(){
  $("#btn1").on("click",function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").on("click",function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").on("click",function(){
    $("#test3").val("Dolly Duck");
  });
  $("#btn4").on("click",function(){
    $("#a1").text("fck");
    $("#a1").attr("href","http://www.fck.dk");
  });
});