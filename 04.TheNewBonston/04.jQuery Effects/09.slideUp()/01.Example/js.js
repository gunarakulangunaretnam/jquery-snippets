$(function () {

    var speed = 500;

    $("#loginPage").slideDown(speed, "linear", function () {

        $("#loginPage h3").text("You need to login first if you want to access the website");

    });



    $("#hideMsg").click(function () {

        $("#loginPage").slideUp(speed, "linear", function () {

            alert("Sorry You can't access the website untill you login");

            window.open("www.google.lk", "_self");
        });

    });


});


//The slideUp() is oppasite to slideDown().
//It takes 3 parameters like speed animation type(effects) and callback.
//speed slow fast milliseconds 1000 = 1 second.
//Animation type linear and others
//It has callback function.
