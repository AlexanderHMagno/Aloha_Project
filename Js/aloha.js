
/* Shows the number of items in the cart*/

$(".buyingButton").on("click", function() {
   
    $("#bcart")
    .text(newFunction())
    .css({"display":"flex"});
    
  
      });

/* Increase by 1 and Shows the number of items in the cart*/

function newFunction() {
    var ponte = $("#bcart").text();
    ponte ++;
    alert(ponte + " Products in your cart")
    return ponte;
}


/* when we are suscribing it.  it has to show to us a message  */
$("form").on('submit',function(e) {
   
    var data = $("#Subscribe").val(); 
    alert('Thanks for subscribing!. The email provided was: ' +data);
    $("#Subscribe").val("");
    e.preventDefault();
          
 
      });

/* Move the screen in a slowly way */
      
$("a").click(function() {
  var dats = $(this).attr('rel')
   $('html,body').animate({
  scrollTop: $('.'+ dats).offset().top-90},
  750);  
    });