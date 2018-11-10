
$(function (){

/* Shows the number of items in the cart*/

$(".buyingButton").on("click", function() {
   
    $("#bcart")
    .text(new_product())
    .css({"display":"flex"});
    
  
      });

/* Increase by 1 and Shows the number of items in the cart*/

function new_product() {
    let products = $("#bcart").text();
    products ++;
    return products;
}


/* when we are suscribing it.  it has to show to us a message  */
$("form").on('submit',function(e) {
   
    let email = $("#Subscribe").val(); 
    alert('Thanks for subscribing!. The email provided was: ' + email);
    $("#Subscribe").val("");
    e.preventDefault();
          
 
      });

/* Move the screen in a slowly way */
      
$("a").click(function() {
  let movement = $(this).attr('id')
   $('html,body').animate({
  scrollTop: $('.'+ movement).offset().top},
  750);  
    });

    /* Move the screen in a slowly way */
      
$(".bigger_img").click(function(e) {

  if (($("#bcart").text() === "")){
    

    alert ('You dont have products in your cart');
    e.preventDefault();
  } else{
    let address = prompt("What's your address?");

    if (address){
      alert ('Thanks for shopping with us! ' + $("#bcart").text() + " products will be sending sooner to " + address)
    } else {
      alert ("Please provide a valid address");
      e.preventDefault();
    }
    
  };
  
    });

  });