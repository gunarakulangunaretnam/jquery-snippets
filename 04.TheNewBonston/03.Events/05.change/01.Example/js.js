$("#listOfStrems").change(function () {

    var textValue = $(this).val();

    $("#list_feedback").text(textValue);

});


//The change event occur when text or anything changes.
//The text() is same as innerHTML.
