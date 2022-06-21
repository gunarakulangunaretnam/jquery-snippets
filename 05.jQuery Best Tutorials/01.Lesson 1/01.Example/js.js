$(document).ready(function () {


    $(".msgBoxes").prepend("<span class='close_x'>X</span>")//I have dynamically added close buttons to all msg boxes.

    $(".close_x").click(function () {//This is click event.

        $(this).parent().fadeOut("slow");//This means the X button.
        //We select the $(this).parent() means the element that contains the x button.

    });


    $(".ans").hide();//i have hidden the answers.


    $(".btns").click(function () {

        $(this).next().slideToggle();//I have selected the element that is next to the btns.and assigned slideToggle() function.

    });

    $("#more").click(function () {

        $("#foot").load("about.html");//load() is used to AJAX Programming. 
       
    });

});

//Xammp is required