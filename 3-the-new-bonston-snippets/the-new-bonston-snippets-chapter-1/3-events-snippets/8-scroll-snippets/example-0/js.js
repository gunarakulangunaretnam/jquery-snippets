$(document).ready(function () {

    var ipsum = "This is Jokerhacker";

    for (a = 0; a < 200; a++) {

        document.getElementById("txt_area").innerHTML += ipsum;
    }

    $("#txt_area").scroll(function () {

        var topS = $("#txt_area").scrollTop();//The scrollTop returns the top position and scrollLeft returns the left position.

        $("#feedback").html("You have scrolled " + topS);

    });

});


//The above javascript raw code create random text and placed inside the text-area.
//+= means adding together if we put only the = it will assign last output.Only one time This is Jokerhacker will be printed.
//scroll funtion for scrolling apps.
