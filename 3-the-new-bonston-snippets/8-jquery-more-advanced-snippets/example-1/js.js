$(function () {

    $(":text").focusin(function () {

        $(this).css("background-color", "yellow");

    });

    $(":text").focusout(function () {

        $(this).css("background-color", "white");

    });


    $(":button").click(function () {

        $(this).attr("value", "Please Wait..");
        $(this).attr("disabled", "true");



    });

});


//We've selected buttons using :button and we've selected text using :text.
//this is current element.
//$(":text") instead of $(this) that will selected all text elements.
//But $(this) will only select the current element.