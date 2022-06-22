$(document).ready(function () {


    $("#hide").click(function () {

        
        $("#box").hide("slow");//slow fast milliseconds.

    });

    $("#show").click(function () {

        $("#box").show("fast");//fast slow milliseconds.

    });

    $("#fadein").click(function () {

        $("#box").fadeIn()//fast slow milliseconds.

    });

    $("#fadeout").click(function () {

        $("#box").fadeOut()//fast slow milliseconds.

    });

    $("#slidedown").click(function () {

        $("#box").slideDown()//fast slow milliseconds.


    });

    $("#slideup").click(function () {


        $("#box").slideUp();//fast slow milliseconds.

    });

    $("#fadeto").click(function () {

        $("#box").fadeTo("slow", 0.5);//fast slow milliseconds.
    });

    $("#toggle").click(function () {

        $("#box").toggle("slow")//fast slow milliseconds.
    });

   
    $("#fadetoggle").click(function () {

        $("#box").fadeToggle("fast");//fast slow milliseconds.
    });

    $("#slidetoggle").click(function () {

        $("#box").slideToggle();

    });

    $("#animate").click(function () {

        $("#box").css("position", "relative");

        $("#box").animate({

            left: "250px",
            top: "250px",

            
        }).animate({

            left: "0px",
            top:"0px"

        });

    });

   
});