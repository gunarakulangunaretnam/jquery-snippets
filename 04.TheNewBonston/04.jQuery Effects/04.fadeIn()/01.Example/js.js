$(function () {

    $("#fadein").click(function () {

        $("#img1").fadeIn(2000, "linear", function () {

            alert("fadeIn() has been completed");
        });

    });

});

//fadeIn() is all most like other effects.
//It takes 3 parameters speed effects callback.
//speed slow , fast milliseconds 1000 =1 second
//effects linear and all/
//callback function.