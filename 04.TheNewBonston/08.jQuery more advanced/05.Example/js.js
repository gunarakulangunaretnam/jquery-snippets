window.onload = function () {

    var para = "This is JokerHacker";


    for (s = 0; s < 100; s++) {

        document.getElementById("message").innerHTML += para;
    }

}


//This is the raw Javascipt code;
//This code copy the same paragraph 100 times in message div.
//+= add togethr.
//= assign


$(function () {

    $("#hideAndShow").click(function () {

        var btnTxt = $("#hideAndShow");
        var txtBox = $("#message");


        if (btnTxt.text() == "Hide") {

            btnTxt.text("Show");
            txtBox.hide("slow");


        } else {

            btnTxt.text("Hide");
            txtBox.show("slow");

        }

    });


});

//This is jquery Code
//text() is same as innerHTML
//hide()  hides elements.Parameters values are "slow,fast or milliseconds 1000 = 1 second";
//show() shows  elements.Parameters values are "slow,fast or milliseconds 1000 = 1 second";