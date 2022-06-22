$(document).ready(function () {

    $("#checked").click(function () {

        $(this).attr("disabled", "disabled");
        $("#conBtn").removeAttr("disabled");


    });


    $("#conBtn").click(function () {

        window.open("http://www.google.lk", "_self");
    });

});

//removeAttr() is used to remove attributes.
