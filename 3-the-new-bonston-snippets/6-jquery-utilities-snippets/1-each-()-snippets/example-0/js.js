$(document).ready(function () {

    $("#combine").click(function () {
        var values='';

        $("input[type='text']").each(function () {


            values+= $(this).val()+" ";//+= means add everything together.

            $("#dis").text(values);



        });


    });

});

//The each() method runs all elements in order.
//It is like forEach() method in javascript.
