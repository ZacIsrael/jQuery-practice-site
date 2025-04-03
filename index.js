// jQuery

// checks if the jQuery library is ready (only necessary if the jQuery 
// script is not at the end of the body section of the HTML file )
// $(document).ready(function (){
    
// })

// selects the h1 element(s) and changes their color.
// $("h1").css("color", "green");

// returns the color (in rgb format) of the h1 element(s)
// $("h1").css("color");

// adds a class to the h1 element(s)
// $("h1").addClass("big-title");

// adds multiple classes to the h1 element(s)
// $("h1").addClass("big-title margin-50");

// removes a class from the h1 element(s)
// $("h1").removeClass("big-title");

// returns a boolean that determines whether or not the 
// h1 elements have the specified class(es)
$("h1").hasClass("margin-50");

// selects all of the html buttons
$("button");

// Changes the text of the h1 element(s)
$("h1").text("Bye");

// changes the text on all of the html buttons
// $("button").text("Don't Click Me.");

// changes & italicizes the text on all of the html buttons 
$("button").html("<em>Hey</em>");

// retrieves the links stored in the a element(s)
$("a").attr("href");

// sets the values of the links stored in the a elements(s)
$("a").attr("href", "https://www.linkedin.com/feed/");

// retrieves all of the h1 elements' classes 
$("h1").attr("class")

// Event Listeners 
$("h1").on("click", function(){
    // changes an h1 element's color once it has been clicked 
    $("h1").css("color", "purple")
});

$("button").on("click", function() {
    // changes the color of the h1 elements once a button has been clicked
    $("h1").css("color", "green")
})

$("input").on("keydown", function(event){
    // execute the following code when the end user types in any of the input elements
    console.log('event.key = ', event.key);
})

// whenever a key is pressed
$(document).on("keydown", function(event) {

    // set the h1 element's/elements' text to the key that was pressed
    $("h1").text(`${event.key}`);
});

// Adding & removing elements with jQuery
// before, after, prepend, & append

/*
.animate() Function in jQuery:
- The .animate() function in jQuery allows you to create custom animations 
by modifying CSS properties over a period of time.

$(selector).animate({ properties }, duration, easing, complete);
selector – The element to animate

- properties – The CSS properties to animate (e.g., width, height, opacity)
- duration (optional) – Time in milliseconds (default: 400ms) or keywords like "slow", "fast"
- easing (optional) – Controls animation speed ("swing" or "linear")
- complete (optional) – A callback function that runs after the animation finishes

 This increases the width of .box to 300px and reduces opacity to 50% over 1 second.
$(".box").animate({
    width: "300px",
    opacity: 0.5
}, 1000);



*/