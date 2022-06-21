$(document).ready(function () {

    $(".hoverSystem").mousemove(function (e) {

        var hoverText = $(this).attr("hoverText");//this returns the current elements atttibutes.

        $("#toolTip").text(hoverText);//put the hoverText 
        $("#toolTip").css("top", e.clientY+10).css("left", e.clientX+10);//+10 is for adjecstment.
        $("#toolTip").show("fast");


    }).mouseout(function () {

        $("#toolTip").hide("fast");

    });

});

