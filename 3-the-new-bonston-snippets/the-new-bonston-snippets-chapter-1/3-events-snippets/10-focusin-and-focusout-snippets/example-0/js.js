$(document).ready(function () {


    $("#enter_name").focusin(function () {

        $("#name_span").text("Enter your name");
    });

    $("#enter_name").focusout(function () {

        $("#name_span").text("");


    });

    $("#enter_age").focusin(function () {

        $("#age_span").text("Enter your age");

    });

    $("#enter_age").focusout(function () {

        $("#age_span").text("");

    });

});


//The focusin is totally diffrent form click.
//for example if the user press the tap key then it will move to the next fild that is not click that is focusin.
