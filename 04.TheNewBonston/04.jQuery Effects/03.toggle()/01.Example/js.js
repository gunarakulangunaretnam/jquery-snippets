$(document).ready(function () {


    $("#toggle").click(function () {

        $("#box1").toggle("slow", "linear", function () {

            alert("Toggle has been finished");
        });
    });
});

//It is almost like hide() and show().
//It does toggle the element form hide to show.
//It takes parameters like hide() and show() speed , effects , callback.
//speed slow, fast milliseconds 1000 = 1 second
//linear
//callback function.