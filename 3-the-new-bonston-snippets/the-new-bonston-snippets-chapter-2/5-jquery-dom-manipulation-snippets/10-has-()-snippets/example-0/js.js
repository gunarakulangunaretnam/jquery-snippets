$(document).ready(function () {

    $("#menu").each(function () {//We loop the #menu 


        var this_val = $(this) //in Jquery We must put the $() sign before the this keyword.In here this means ul element.

        if (this_val.has("li").length == 0) {

            this_val.append("Empty element")
        }


    });

});

//this_val.has('li').length==0 means is ul element has no li element run the block of code.
//each() is like loop.It runs all elements in order.
