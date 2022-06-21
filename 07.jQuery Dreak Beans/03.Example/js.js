$(document).ready(function () {


    $("#btn1").click(function () {

        $("table th").css("background-color", "red");

        
    });

    $("#btn2").click(function () {

        $("table").css("background-color","blue")

    });

    $("#btn3").click(function () {

        $("table").css("height", "250px").css("wdith", "250px");
        

    });

    $("#btn4").click(function () {

        $("#p1,#p2,#p3").css("font-weight", "bold");

    });

    $("#btn5").click(function () {

        $("body").css("background-color","yellow");

    });


    $("#btn6").click(function () {

        $("body").css("background-color", "white");
    });


});