$(document).ready(function () {

    $("input[type='file']").change(function () {

        $(this).next().removeAttr("disabled");


    }).next().attr("disabled", true);

});

//removeAttr() is used to remove attributes.
//We can also select input family like above input[type='The Type'];
//we have disabled the submit button in jquery.
//if the file change then the submit button will be visible.
//prev() is used to find previous elements.


