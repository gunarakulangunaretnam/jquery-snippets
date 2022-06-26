$(document).ready(function () {


    $(":text").focusin(function () {

        $(this).css("background-color", "red");

    });

    $(":text").focusout(function () {

        $(this).css("background-color", "#fff");

    });

});



//The css is used to give css effects to an element.
//The this means the current element.
//we can select all input elements by using this :input.
//If you use :input element all input elements will be selected. 
//The : is used to find elements in input family such as :password,:submit,:text:checkbox and all.
