$(document).ready(function () {

    $("#load").click(function () {

        var textVal = $("#texts").val();

        $.ajax({

            type:"POST",//This is the type GET or POST
            url: "php/rephp.php",
            data: "text=" + textVal,//text is the attribute that will be used in php like variable.
            success: function (data) {//data is the return value form the server.

                $("#content").html(data);

            }

        }).fail(function () { alert("failed")});//This will execute if it is failed.

    });


});

//ajax is same as load but it has more features.
//POST is more secure than GET.