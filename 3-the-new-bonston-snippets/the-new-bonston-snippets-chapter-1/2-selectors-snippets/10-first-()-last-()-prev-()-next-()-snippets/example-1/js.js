$(document).ready(function () {


    $("#items li:first").append(" (First Element)");//This selects the first element and append some value
    $("#items li:last").prepend("(Last Element) ");//This selects the last elemen prepand sone value
    $("ul li:first").next().append(" (After the first element)")//This selects a element that is next to the first element.
    $("ul li:last").prev().prepend("Before the last element ")//This selects a element that is behind the last element.


});

//:first selects the first element in the collation.
//:last selects the last element in the collation.
//append() means add some elements after the element.
//prepend() means add some elements before the element.
//next() selects a element that is next to the selected element.
//prev() selects a element that is behind the selected element.

