$(function () {

    $("#appendTo").click(function () {

        $("#name").clone().appendTo("#name_place");


    });

});

//clone() is used to clone(copy) an element then appendTo it.
//The appendTo() takes an element and put into another element.
//In this example #name_place is the buket.


