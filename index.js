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