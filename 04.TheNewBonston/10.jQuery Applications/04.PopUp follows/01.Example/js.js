$(document).ready(function () {

    $("#popUpBox").fadeIn(1000).click(function () {//By default the popUpBox is hidden.You need to fadeIn() it.

      $(this).fadeOut(1000)//If the user clicks the box the box will be disappered.

    });

    $(window).scroll(function () {//This event run while scrolling.

        var top=$(window).scrollTop();//We got the window scrollTop in this variable.

        $("#popUpBox").css("top", top + 10);//This will change while we are scrolling.

    });

});