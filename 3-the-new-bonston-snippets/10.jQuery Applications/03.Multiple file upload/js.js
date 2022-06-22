$(document).ready(function () {

    $("#add_more").click(function () {

        var file_lenght=$("input[type='file']").length//I got the length of file element.
        var next_ele = file_lenght + 1;//I add one more with it.
        $("#file_upload").prepend("<p><input type='file' name='file_"+next_ele+"' /></p>")//i prepend this with diffrent numbers dynamically.

    });

});