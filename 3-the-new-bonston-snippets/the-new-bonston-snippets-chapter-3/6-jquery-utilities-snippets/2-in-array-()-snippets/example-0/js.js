$(document).ready(function () {

    var arrs = ["kuna", "hacker", "joker", "maker"];

    if ($.inArray("kuna", arrs) != "-1") {

        alert("Found");


    } else {

        alert("Not Found");

    }


});

//We can use jQuery instead of $
//inArray is used to check if any element or text exist in the array.
//It is like some() method in Javascipt.
//It returns -1 if it does npt find the value otherwise it returns it's value.