$(".buyingButton").on("click", function() {
   
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




$("form").on('submit',function(e) {
   
    var data = $("#Subscribe").val(); 
    alert('Thanks for subscribing!. The email provided was: ' +data);
    $("#Subscribe").val("");
    e.preventDefault();
          
 
      });


      
$("a").click(function() {
  var dats = $(this).attr('rel')
 console.log('".'+dats+'"')
  $('html,body').animate({
  scrollTop: $('.'+ dats).offset().top-90},
  750);  
    });