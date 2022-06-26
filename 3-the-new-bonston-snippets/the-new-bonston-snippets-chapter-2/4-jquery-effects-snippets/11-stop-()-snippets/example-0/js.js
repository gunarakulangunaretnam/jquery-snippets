$(document).ready(function () {

    $("#start").click(function () {

        $("#img1").slideToggle(3000);
    });

    $("#stop").click(function () {


        $("#img1").stop();

    });

});


//The stop() keyword is used to stop animations.