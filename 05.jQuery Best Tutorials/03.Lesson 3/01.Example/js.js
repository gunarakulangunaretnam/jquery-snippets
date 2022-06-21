$(document).ready(function () {


    var navPostion = $("#menu").offset().top;
    
    $("#menu").wrap('<div class="nav_place"></div>');//We make an element with the class of nav_place
    $(".nav_place").height($("#menu").outerHeight());

    $(window).scroll(function () {

        var windowScrollPostion = $(window).scrollTop();
        
        if (windowScrollPostion >= navPostion) {

            $("#menu").addClass("fixed");
        } else {

            $("#menu").removeClass("fixed");

        }
    });

});