$(document).ready(function () {

    $("#fadeout").click(function () {


        $("#img1").fadeOut(2000, "linear", function () {

            $("#feedback").html("The image has been hidden");
        });

    });


    $("#fadein").click(function () {

        $("#img1").fadeIn("slow", "linear", function () {

            $("#feedback").text("The image has been showen");
        });

    });

});

//fadeOut() is same as fadeIn() but it fade outs the element.
//It takes parameters like fadeIn();
//Speed slow fast milliseconds 1000 = 1 second.
//effects linear and all.
//callback
//html() can change the html but text() can only change the text.
