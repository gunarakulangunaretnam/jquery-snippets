$(document).ready(function () {


    $("#search_names").keyup(function () {

        var search_value = $(this).val();//this menans the current value."#search_names" value.

        $("#names li").removeClass("heighlited");//This will remove the class when key is up every time. if you do not put this line of code
                                                 //the heightligher will not update.


        if ($.trim(search_value) != "") {//$.trim removes white spces form left and right.

            $("#names li:contains('" + search_value + "')").addClass("heighlited");

        }



    });



});



//in Jquery we use contains selector is to find some data that is in the element.
//if you want to select an element that contains some certian words you need to use this :contains selector.


