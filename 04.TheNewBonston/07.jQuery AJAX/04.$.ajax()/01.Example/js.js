$(document).ready(function () {

    $("#load").click(function () {

        $.ajax({

            url: "php1.php",
            success: function (data) {//data is the return value.

                $("#content").html(data);

            }

        });


    });

});


//$.ajax() is same as load() but it has success function.
