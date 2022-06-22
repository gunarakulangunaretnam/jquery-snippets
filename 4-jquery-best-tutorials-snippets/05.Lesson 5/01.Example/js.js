$(document).ready(function () {

    $("#m").click(function () {

        $("nav").slideToggle(400, function () {

            $(this).toggleClass("heigh").css("display","");

        });
    });

});