$(document).ready(function () {

    function div_center() {

        var window_height = $(window).height();
        var window_width = $(window).width();


        var obj_height = $("#veryCenter").height();
        var obj_width = $("#veryCenter").width();


        $("#veryCenter").css('top', (window_height / 2) - (obj_height / 2)).css("left", (window_width / 2) - (obj_width / 2));//We got death center of the object by dividing by 2.


    }

     div_center();

     $(window).resize(function () {

         div_center();
     })
});

//We need to subtract the window height and width by object window height and width.
//before this want to divide window height and width and object height and width by 2.
//The resize() events runs everytime when the user resize the page.
//in a nutshall we need get the death center of the objects and window than we subtract them.