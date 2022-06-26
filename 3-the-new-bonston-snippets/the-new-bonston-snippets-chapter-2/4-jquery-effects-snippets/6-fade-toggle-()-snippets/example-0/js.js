$(function () {

    $("#inout").click(function () {

        $("#img1").fadeToggle(1000, "linear", function () {

            alert("Animation has been completed");
        });

    });

});


//This fade Toggle
//It takes parameter values like fadeIn() and fadeOut().
//speed slow fast milliseconds 1000 = 1 second.
//Animation type (effects) linear and all.
//callback function.
