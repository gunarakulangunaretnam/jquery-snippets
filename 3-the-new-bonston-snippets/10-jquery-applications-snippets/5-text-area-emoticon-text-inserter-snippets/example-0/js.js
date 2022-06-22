$(document).ready(function () {

    $(".icon").click(function () {

        var textArea_val =jQuery.trim($("#comment").val());//jQuery.trim() will remove whitespces left and right sides.
        var icon_val = $(this).val();//this means the currently click button.
      
        if (textArea_val == "") {//If the textarea is empty

            var sp = ""
            //inside if block the variable won't be loacl.

        } else {

            var sp=" "

        }
       
        $("#comment").focus().val(textArea_val + sp + icon_val + sp);
        //if the user clicks the button the focus will not be applied so we used focus() to focus the textarea.

    });
});