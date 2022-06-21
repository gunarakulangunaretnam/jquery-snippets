$(document).ready(function () {

    $("#load").click(function () {

        $.ajax({

            url: 'page.html',//i have put a wrong page
            statusCode:{

                404: function () {

                    $("#content").text("404 Error occured");

                },
                //We can write code for other statusCode by followed by ,

            },

            success: function (data) {

                $("#content").html(data);
            }
        });

    });

});