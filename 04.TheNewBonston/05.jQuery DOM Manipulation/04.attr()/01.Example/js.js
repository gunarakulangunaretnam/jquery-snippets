$(function () {

    $("#btn").click(function () {

        var hrefVal = $("#alink").attr("href");
        $("#dis").text(hrefVal);


    });


});


//This is the way to get the attributes form an element.
//if you want to change the href you the give the value in this second parameter.
//attr("href", "www.facebook.com");
