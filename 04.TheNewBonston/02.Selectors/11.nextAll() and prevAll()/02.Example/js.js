$(document).ready(function () {


    window.addEventListener("click", function () {


        $("ul").find("li").last().prevAll().addClass("bold");

    });

});

//find() is used to find elements in an element.
//prevAll() selects all elements thats are before the selected elements.
//I have add some raw javacipt code.