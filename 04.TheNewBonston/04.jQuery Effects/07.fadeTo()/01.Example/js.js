$(document).ready(function () {

    $(".imgs").click(function () {

        $(this).fadeTo("slow", 0.5, function () {//$(this) means current element.

            $(this).css("border", "5px solid red");

        });

    });

});

//The fadeTo() is use to fade an image to a certain opacity.
//It takes 3 parameters speed opacity value callback.
