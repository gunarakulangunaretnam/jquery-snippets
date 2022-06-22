$(document).ready(function () {


    $("#options").change(function () {//not click we basicly give change for form elements.

        var value = $(this).val();//current element value.
        
        if (value != "default") {

            $(this).parent().submit();

        }

    });

});

//parent() means the form.
//submit() is used for submiting forms.