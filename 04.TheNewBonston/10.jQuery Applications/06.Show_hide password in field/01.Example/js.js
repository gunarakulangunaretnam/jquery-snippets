$(document).ready(function () {

    $("input[type='password']").after('<input type="checkbox" class="sp_checkbox">Show Password');

    $(".sp_checkbox").change(function () {//We use change for checkboxes radio and all not click.

        var prevEle = $(this).prev();

        var value = prevEle.val();
        var type = prevEle.attr("type");

        var classes = prevEle.attr("class");
        var id = prevEle.attr("id");
        var name = prevEle.attr("name");
        var maxL = prevEle.attr("maxlength");

       

        var newType = (type == "password") ? "text" : "password";//the same code is bellow but in diffrent maner.

        /*/
        if (type == "password") {

            var newType = "text";

        } else if (type = "text") {


            var newType = "password";

        }

        */
        prevEle.remove();

        $(this).before("<input type='"+newType+"' id='"+id+"' class='"+classes+"' name='"+name+"' maxlength='"+maxL+"' value='"+value+"' >")


    });

});