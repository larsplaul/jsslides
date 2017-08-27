$(document).ready(function(){
  //ShowStart
  $("#b1").click(function(){
    $("#ul").append("<li>Append</li>");
  });
  $("#b2").click(function(){
    $("#ul").prepend("<li>Prepend</li>");
  });
  $("#b3").click(function(){
    $("#ul").empty();
  });
  $("#ul").click(function(evt){
    if(evt.ctrlKey){
      return $(evt.target).after("<li>After CTRL+clicked item</li>");
    }
    if(evt.shiftKey){
      return $(evt.target).remove();
    }
    $(evt.target).before("<li> Before clicked item</li>");
  });
  //ShowEnd
});
