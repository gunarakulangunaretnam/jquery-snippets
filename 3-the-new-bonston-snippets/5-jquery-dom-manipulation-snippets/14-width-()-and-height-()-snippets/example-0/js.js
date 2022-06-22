$(document).ready(function () {

    $("#getHeightAndWidth").click(function () {


        var widthVal = $("#box").width();
        var heightval = $("#box").height();

        $("#dis").text("The width is " + widthVal + " and the height  is " +heightval);

    });

});

//width() keyword is used to get the width of an element.
//height() keyword is used to get the height of an element