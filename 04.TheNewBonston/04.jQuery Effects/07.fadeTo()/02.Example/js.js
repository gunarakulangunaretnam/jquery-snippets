$(function () {

    var speed = 500;

    $(".imgs").css("opacity", 0.5);

    $(".imgs").mouseover(function () {

        $(this).fadeTo(speed, 1) //$(this) means the current element that the user overs it.

        $(".imgs").not(this).fadeTo(speed, 0.4);//not(this) means not apply to the current element.

    });

});

//The fadeTo() is use to fade an image to a certain opacity.
//It takes 3 parameters speed opacity value callback.
