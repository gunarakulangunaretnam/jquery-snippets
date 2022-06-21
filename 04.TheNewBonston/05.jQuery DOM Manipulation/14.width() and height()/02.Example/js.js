$(function () {

    $("#getHeightAndWidth").click(function () {

        var width =parseInt($("#box").css("width"))
        var height=parseInt($("#box").css("height"));

        $("#dis").text("Width:" + width + " Height:" + height + "");


    });

});

//We can also get width and height by using css properties like above.
//why did i use parseInt() because if we don't put that the result will be like with px sign.
//But parseInt() will convert it into integer.
//But this will only return if that has css properties for width and height.
//If there is an image without an css we need to use the old method.

