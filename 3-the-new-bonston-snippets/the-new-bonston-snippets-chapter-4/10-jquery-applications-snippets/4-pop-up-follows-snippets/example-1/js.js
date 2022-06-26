$(document).ready(function () {

    var speed = 1000;//I have stored the milliscounds in this variable.
    var defaultTop = parseInt($("#popUpBox").css("top"));//I have got the top form css and removed the px by using parseInt().
    

    $("#popUpBox").fadeIn(speed).click(function () {

        $(this).fadeOut(speed);//If the user clicks the box this will fade out.

    });

    $(window).scroll(function () {//This will run while scrolling.

        var WindowTop = $(window).scrollTop();//We got the window scrollTop while scrolling and stored in this variable.
        $("#popUpBox").css("top", WindowTop + defaultTop);

    });

});