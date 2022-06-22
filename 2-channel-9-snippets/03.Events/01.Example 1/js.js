$(document).ready(function () {

    var score = 0;

    var st = $("#st").hide();

    $("img").click(function () {

        score += 1;
        $("#dis").text(score);
        st.show("slow");

    });

    $("#start").mouseover(function () {

        score = 0;
        $("#dis").text(score);
    });

});