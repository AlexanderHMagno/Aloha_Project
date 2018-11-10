
# Aloha Project

Create a web page for the company Aloha. Aloha is an apparel company. For creating this webpage I used the following: 

* HTML
* CSS
* JavaScript
* JQuery
* Extension of third parts. 
  * [Flickity](https://flickity.metafizzy.co) 
  * [Font Awesome](https://fontawesome.com/)
  * [JQuery](https://jquery.com/)
* Github
* Terminal for commiting Git Bash

## HTML
Created using sections, Following two basic premises: 
* Windows everywhere
* Mobil desing first

#### Windows everywhere
* Header for the top
* Footer for the bottom
* and the others sections where I tryed to show them in a clean and organized way.

#### Mobil desing first
I start the project thinking that the best practice is building my webpage thinking first in writing my code thinking on mobile, and then using MQuerries I shall be able to show my webpage in any device. 

#### Links
Also in HTML is the perfect place for posting the links to connect my CSS and third parts developments. 

**_At the end I used an especial validator for searching any mistake commited [validator](https://validator.w3.org/nu/#textarea)_**



## CSS
An external Source was used for reseting the original rules created by default. 
Additional to this I created a file called Style.css for saving my CSS code: 

* Created following the same sections displayed on HTML (also including commentaries per section, easy to read.)
* on this file I also added my MQuerry for devices over 600 px. 

* Additional for the movement on the products section, a mobil menu was created using FLickity.    ```<div class="carousel" data-flickity='{ "groupCells": true }'>```


## Jquerry
* Download Jquerry.
* Created a file on my project 
* connected to HTML at the bottom of my file. 

I Used Jquerry to this project because I need to interact with some buttons and also for showing a message when the user doesnt add a proper email address. 

* adding a product to the cart 
```
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
```

* additional I also added a function for slow scrool movement when the user push any of the anchors on the main menu. 
```
$("a").click(function() {
  let movement = $(this).attr('id')
   $('html,body').animate({
  scrollTop: $('.'+ movement).offset().top},
  750);  
    });
```

## criteria for creating the project 




[here](https://alexanderhmagno.github.io/Aloha_Project/)

#This is a project named Aloha. We created the web page of this company.


<h2>Objective: Creat a web page for the company Aloha, following this criteria:</h2> 

<hr>

<h3>Typography:</h3> 

<ul>
<li>The base font size is 16px for all screen width 600px and up (the mobile base font size is 14px) <strong>(line 7 CSS)</strong></li> 
<li> The body font family is Raleway Light <strong>(line 8 CSS)</strong></li>
<li>The headings font family is Playfair Display <strong>(line 13 CSS)</strong></li> 

</ul>

<h3>Colours:</h3>

<ul>

</ul>
 <li>The HEX code for the body font colour is #2d2d2d <strong>(line 6 CSS)</strong></li>
 <li> The HEX code for the light grey text colour is #969696 <strong>(line 237 css)</strong></li>
 <li> The HEX code for orange brand colour is #e2574c (used for links, some headings, and buttons) <strong>(line 98,244, 320 css)</strong> </li> 
  <li>The HEX code for the link hover state colour is #b64036 <strong>(line 104 css)</strong> </li>
  <li>The HEX code for the light grey border colour is #d7d7d7 <strong>(line 60,76 css)</strong> </li>
  <li>The HEX code for the dark grey background colour is the footer is #242424<strong> (line 252 ,333,64 css)</strong></li> 
  </ul>

  <h3>Screen Sizes:</h3> 
  
  <ul>
  <li>The width of the desktop-friendly content area is 1240px If undertaking the responsive stretch goal, the width of the tablet-friendly content area is 600px</li>
  </ul> 
  <p><strong>(created a media querry for screens over 600px: Style600Screen.css)</strong></p> 
  
  <h2>Requirements:</h2> 
  <p>To receive a “Complete” for this project, your submission will need to satisfy the following criteria:</p> 
  
  <p>Development Workflow Requirements Your project must:</p>
  
  <ul>

   <li>Demonstrate effective organization of the project’s root directory <strong>(done)</strong></li>
   <li> Have a Git repository initialized in its root directory which is pushed to GitHub <strong>(done)</strong></li>
   <li> Use a .gitignore to exclude unnecessary files/folders, and ensure that no unnecessary files/folders are erroneously committed to the repository <strong>(done)</strong> </li>
   <li>Contain an appropriate number of commits for the scope of the project <strong>(done)</strong></li>
   <li> Contain a README.md file describing the project (e.g. technologies used, personal learnings, installation instructions, etc.) and is appropriately formatted with Markdown (done - Is this one!)</li>
   <li>Remove extraneous code and comments from files <strong>(done)</strong> </li>
   <li>Resolve all errors and warnings that appear in the browser console <strong>(done)</strong></li>

   </ul> 
   
   
   <h2>HTML Requirements Your project must:</h2> 
   <ul>
   <li>Contain syntactically-valid HTML5 code <strong>(done)</strong></li>
   
   <li>Include all essential elements in the of the document (e.g. doctype, title, charset, etc.) <strong>(done)</strong> </li>
   <li>Use semantically-appropriate HTML elements <strong>(done)</strong> Use an icon font <strong>(done)</strong></li> 
</ul>

   <h2>CSS Requirements Your project must:</h2> 
   <ul>
   <li>Translate the designer’s overall vision for the website into code.</li>
   <li>Use appropriate CSS selectors (e.g. classes instead of IDs, no overly-specific selectors, etc.) <strong>(done)</strong> </li>
   <li>Use a CSS reset (done separated file)</li>
   <li> Demonstrate effective use of box model properties and values. </li>
   <li>Demonstrate effective use of typographic properties and values (e.g. font-family, font-style, text-transform, etc.)</li>
   <li>Demonstrate effective use of flexbox properties and values for layout Incorporate custom fonts using @font-face<strong>(done)</strong></li>
   <li> Implement a mobile-first responsive layout <strong>(done)</strong></li>
   <li> Optimize layout for all required breakpoints <strong>(done)</strong></li> 
   </ul>
   <h2>JavaScript Requirements Your project must:</h2> <li>Define variables where needed with let and const </li>
   <li>Use functions to effectively organize code Use consistent, descriptive variable and function names</li>
   <li>Check for strict equality with comparison operators Demonstrate effective use of control flow (loops, conditionals, etc.)</li> 
   </ul>

   <h2>jQuery Requirements Your project must:</h2> 
   
   <ul>
   <li>Wrap jQuery code in document-ready (use short-hand)</li>
   <li> Use variables to store references to DOM elements wrapped in the jQuery object that are accessed more than once</li> 
   <li>Add event listeners with jQuery and respond to events appropriately in callbacks</li>
   </ul>

   <h2>Functional Requirements Your project must:</h2>
   <ul> 
   <li>Contain a single .html file and an external .css file (CSS reset may be included in a separate file) <strong>(done)</strong></li> 
   <li>Incorporate a list-based navigation menu <strong>(done)</strong> </li>
   <li>Incorporate “smooth scrolling” into the menu so that it navigates to specific sub-headings within the page <strong>(done)</strong> </li> 
   <li>Incorporate an image slider using jQuery for the featured product area (Flickity is a good choice) <strong>(done)</strong> </li>
   <li>Display an alert box that says “Thanks for subscribing!” whenever a user successfully submits the newsletter form with a valid email address, otherwise they should see a message in the alert box that asks them to enter a valid email address <strong>(done)</strong></li>
   </ul>

   <h2>Stretch Goals Want to challenge yourself? Your project could also:</h2> 
   <ul>
   <li>Update the cart icon in the top-right corner of the header every time the user clicks the “Add to Cart” button for a product <strong>(done)</strong></li>
   
   <li> Incorporate a fixed header at the top of the page so that the navigation menu is always invisible when the user scrolls down the page <strong>(done)</strong></li>
   </ul>