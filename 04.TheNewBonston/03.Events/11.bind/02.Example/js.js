$(function () {

    $("#jh").mouseenter(function () {

        $(this).addClass("h");

    }).mouseleave(function () {

        $(this).removeClass("h");
    });

});


//This is not bind method.
//in jquery we can chian events together.
