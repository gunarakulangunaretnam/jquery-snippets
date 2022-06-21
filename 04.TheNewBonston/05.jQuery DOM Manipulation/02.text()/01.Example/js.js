$(document).ready(function () {

    $("#copy_btn").click(function () {

        var text = $("#copyText").text();
        $("#pastePlace").text(text);


    });


});

//in this example text() copied the text data.
//It is quite same as html() but html() copies html() data also but this copies only the text.

