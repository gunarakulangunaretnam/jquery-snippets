$(document).ready(function () {

    $("#hider").click(function () {


        $("#mass").hide("slow");

    });


});

//jquery uses javascript events.
//So we can easliy use them without the on prefix.for Ex onclick is click onchange is change and onblur is blur
//The click is used to a click event to an element.
//It can be any element like h1-h6,p,a,button or anyting.
//We have used hide() funtion in this example.
//The hide() funtion is used to hide h1-h6 or any elements.
//The hide() element will take some parameters like slow,fast and milliseconds 1000 is 1 second.
