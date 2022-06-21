$(document).ready(function () {

    $("#btn").click(function () {

        $.get("kuna.html", function (data) {

            $("#con").html(data);
        })
    });

});



//This is the get method in JQ
//XAAMP is required.