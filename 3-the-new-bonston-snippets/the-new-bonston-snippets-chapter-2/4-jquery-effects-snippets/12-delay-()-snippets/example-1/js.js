$(function () {


    $("#start").click(function () {

        $("#someText").fadeOut().delay(3000).fadeIn();


    });


});

//In this example first the element will be disappeared than after 3 seconds it will appaear
//The delay() function is used to give some certain times to delay the animation.
//delay() takes milliseconds 1000= 1 second.