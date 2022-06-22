$(document).ready(function () {

    $("input[type='file']").change(function () {//not click we basicly give change for form elements.

        $(this).parent().submit();

    });

});

//parent() means the form element.
//submit() is used to submit something to the server.