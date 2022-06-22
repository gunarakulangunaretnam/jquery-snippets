$(document).ready(function () {

    $("#box1").hide();//It automatically  hides when the document is ready.

    $("#show").click(function () {


        $("#box1").show("slow", "linear", function () {

            alert("It has been showed");
        });

    });

});


//show() is oppasite to hide().
//show() takes  parameters like hide() speed effects callback
//speed slow fast millisecond 1000 = 1 second
//then linear
//callback function.