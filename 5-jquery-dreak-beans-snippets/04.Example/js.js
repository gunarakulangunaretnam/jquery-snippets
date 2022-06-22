$(document).ready(function () {

    $(window).mousemove(function (event) {

        var width = event.clientX;
        var height = event.clientY;

        $("#cW").text(width);
        $("#cH").text(height);

    });

    $("")

});