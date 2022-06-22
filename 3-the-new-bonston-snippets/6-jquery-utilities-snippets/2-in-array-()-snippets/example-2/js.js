$(function () {

    var usernames = ["kuna", "joker", "hacker"];
    var passwords = ["kuna123", "joker123", "hacker123"];

    var theUsername=$("#username");
    var thePassword=$("#password");

    $("#signIn").click(function () {

        if ($.inArray(theUsername.val(), usernames) != "-1" && jQuery.inArray(thePassword.val(),passwords)!="-1") {


            alert("You are loged in");


        } else {

            alert("Something is wrong");

        }

    });


});

//We can use jQuery instead of $
//inArray is used to check if any element or text exist in the array.
//It is like some() method in Javascipt.
//It returns -1 if it does npt find the value otherwise it returns it's value.