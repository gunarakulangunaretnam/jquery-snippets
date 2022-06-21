$(document).ready(function () {


    function validtaion_email(email) {

        $.post("php/email.php", { email: email }, function (data) {//data is the value that will be return by the email.php
                                                                   // The first email is the attribute or variable that we are sending to the php.

            $("#email_feedback").text(data);

        })

    }

    $("#email").focusin(function () {

        if ($("#email").val() == "") {

            $("#email_feedback").text("Enter your Email");

        } else {

           validtaion_email($("#email").val());
        }

    }).focusout(function () {

        $("#email_feedback").text("");

    }).keyup(function () {

        validtaion_email($("#email").val());

    });


});