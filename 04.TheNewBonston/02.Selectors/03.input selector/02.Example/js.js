$(document).ready(function () {

    var dText = "Enter the Email";


    $("input[type='email']").attr("value", dText).focus(function () {


        if ($(this).val() == dText) {

            $(this).attr("value", "");

        }

    }).blur(function () {

        if ($(this).val() == "") {

            $(this).attr("value", dText);
        }



    });



});


//We can select all input elements input[type='text'],input[type='password'] and all.
//We can also use like this a[href='www.google.lk'].

//algorithm

//when we focus on the email  if it is default text we need to make blank.
//when we blur form the email if it is empty we need to give the default text back.

