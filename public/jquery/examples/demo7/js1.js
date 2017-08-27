$(document).ready(function(){

  $("#p1").on("click",function(){
     console.log(this.id); //OK for simple JS properties
    try {
      this.text("New Hello World"); //Not for jQuery functions
    }catch(error){
      console.log(error);
    }
    var result = (this === $(this)[0]);
    console.log("Value of this: "+this);
    $(this).text('"this === $(this)[0]" is '+result);
  });

});