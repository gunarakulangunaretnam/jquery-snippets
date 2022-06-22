$(function () {

    $("#text_sele").select(function () {

        $(this).css("color", "red").css("background-color","green");
        $("#feed").text("Something has been selected");

    });



});