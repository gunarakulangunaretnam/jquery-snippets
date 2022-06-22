$(document).ready(function () {

    var arrs = ["kuna", "joker", "hacker", "maker", "gta"];
    var arrVal = $("#arrs");

    $("#btn1").click(function () {

        if ($.inArray(arrVal.val(),arrs) != "-1") {

            alert("This is in the array");

        } else {

            alert("This is not in the array");
        }

    });


});


//We can use jQuery intead of $.
//inArray is used to check if any element or text exist in the array.
//It is like some() method in Javascipt.
//It returns -1 if it does npt find the value otherwise it returns it's value.