$(document).ready(function () {

    function display_names() {

        $("#names_list").html("");//This line of code removes div contents.

        $.each(names, function (index, value) {

            $("#names_list").append(value +"<br />");
        });

    }

    var names = ["Kuna", "rakulan", "Joker", "Hacker"];
    display_names();

    $("#insert").click(function () {


        var val = $("#name").val();
        names.push(val);
        display_names();


    });


});



