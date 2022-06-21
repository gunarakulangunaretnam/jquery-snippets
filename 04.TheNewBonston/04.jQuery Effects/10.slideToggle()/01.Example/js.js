$(document).ready(function () {


    $("#slidetoggle").click(function () {

        $("#box1").slideToggle(600, "linear", function () {

            alert("Finished");
        });

    });

});

//The slideToggle() is same as fadeToggle but diffrent animation.
//It takes 3 parameters like speed slow fast milliseconds 1000 = 1 second
//Animation types linear
//It has a callback function.