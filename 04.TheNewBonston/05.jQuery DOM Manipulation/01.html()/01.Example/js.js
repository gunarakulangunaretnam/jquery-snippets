$(document).ready(function () {

    $("#copy_btn").click(function () {

        var text = $("#copyText").html();
        $("#pastePlace").html(text);


    });


});

//The html() function is used to get the html data and change the html data.
//It is almost like innerHTML.
