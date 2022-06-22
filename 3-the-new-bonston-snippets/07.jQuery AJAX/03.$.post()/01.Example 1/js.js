$(function () {

    $("#subBtn").click(function () {
		
        var name = $("#text1").val();
        var text = $("#text2").val();


        $.post("php/reverse.php", { name: name, text: text }, function (data) {

            $("#foo").html(data);
        });

    });

});

//The differnce between $.get() and $.post() the $.post() is more secure than the $.get().
