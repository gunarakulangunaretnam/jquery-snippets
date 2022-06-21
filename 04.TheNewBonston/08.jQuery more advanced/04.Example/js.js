$(document).ready(function () {

    var maxLength = document.getElementById("txtArea").getAttribute("maxlength");//we got the max length

    $("#txtRemaining").text("You have " + maxLength + " charaters");

    $("#txtArea").keyup(function () {// when the keyup event fires

        var userValue = $(this).val().length;//This is the user charaters length.

        var remainingCha = maxLength - userValue;


        document.getElementById("txtRemaining").innerHTML = "You have " + remainingCha + " charaters"


    });

});

//in this example i used javascript and jquery together.
