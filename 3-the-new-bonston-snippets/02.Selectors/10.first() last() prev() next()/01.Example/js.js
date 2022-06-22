$(document).ready(function () {

    $("#file").change(function () {

        $(this).next().removeAttr("disabled");


    });

});


//The next() is used to select an element that is next to one element.
//in this case i have selected the submit button element that is next to the file element.
//prev() is used to select the previous element.
//next() is used to select the next element.