$(document).ready(function () {

    $("#textArea").keyup(function () {


        var valuesOfText = $("#textArea").val();
        $("#place").text(valuesOfText);


    });

});


//val() is used to get value of a input filed or any element.
//val() does not get the text.
//it only returns the text.