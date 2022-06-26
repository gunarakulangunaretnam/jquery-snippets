$(document).ready(function () {

    $("ul").find("li").first().append(" (First element)");//This selects the first element and append some text.
    $("ul").find("li").last().prepend("(Last Element )");//This selects the last element and prepend some text.
    $("ul").find("li").first().next().append(" (Second Element)");//This selects a element that is next to the first element.
    $("ul").find("li").last().prev().prepend("(Before the last element) ");//This selects a element that is behind the last element.

});

//find() is used to find elements thats are in an element.
//first() is used as a function in this example.This selects the first element.
//last() is also a function format.This selects the last element.
//next() selects a element that is next to the selected element.
//prev() selects a element that is behind the selected element.
//appned() adds some elements after the element.
//prepend() adds some elements before the element.