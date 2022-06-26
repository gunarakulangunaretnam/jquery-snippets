$(document).ready(function () {


    $(".btn").click(function () {



        $("#list").append("<option>" + $(this).text() + "<option>");

    });

});