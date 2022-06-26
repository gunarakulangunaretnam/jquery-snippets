$(document).ready(function () {

    $("#combine").click(function () {

        $("input[type='text']").each(function () {

            var returns = true;

            if ($(this).val() == "") {

                returns = false;
            }


            if (returns == false) {

                $("#dis").text("Fill out all elements");

            } else {

                $("#dis").text("Thanks for filling out")

            }
        });

    });

});

//The each() method takes function
//it runs all elements in order.
//It is like forEach() method in JS.