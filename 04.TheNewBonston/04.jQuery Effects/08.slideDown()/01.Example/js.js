$(function () {

    $("#loginPage").slideDown(500, "linear", function () {

        $("#loginPage h3").text("You need to login first if you want to access the website");
    });

});

//The slideDown() almost like fadeIn() but it has a diffrent animation effect.
//It takes 3 parameters values
//Speed slow fast milliseconds 1000 = 1 second
//Animation type linear and all.
//It has a callback function.
