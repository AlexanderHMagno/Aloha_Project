$("button").on("click", function() {
   
    $("#bcart")
    .text(newFunction())
    .css({"display":"flex"});
    
  
      });


function newFunction() {
    var ponte = $("#bcart").text();
    ponte ++;
    alert(ponte + " Products in your cart")
    return ponte;
}

