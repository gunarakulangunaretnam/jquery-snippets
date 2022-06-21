$(document).ready(function () {


    $("#btn_append").click(function () {

        var name = $("#name").val();

        $("#name_place").append(name+" ");

    });

});


//The append keyword is mainly used to add text or elements to end of an selected element.
