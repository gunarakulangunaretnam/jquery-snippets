$(document).ready(function () {


    $("#hide").click(function () {

        $('#box1').hide("slow", "linear", function () {

            alert("The animation has been finished");
        })

    });

});

//The hide() is used to hide any element.
//It takes 3 parameters speed,animation effect type,callback.
//Speeds slow fast millisecond 1000 is 1 second.
//effects linear
//callback function