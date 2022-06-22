$(document).ready(function () {


    $("ul").find("li").first().addClass("bold").hover(function () {

        $(this).nextAll().toggle("fast");//in this example $(this) means  $("ul").find("li").first().addClass("bold").hover().

    }).nextAll().hide("fast");


});

//addClass() is used to give classes to an element.
//nextAll()  means select all elements thats are after the selected element.
//There is another keyword that is prevAll().
//prevAll()  means select all elements thats are before the selected element.
//toggle() means toggle
//hide is an effect.
//hide and toggle take paramters like fast and slow millisconds 1000 milliseconds is 1 second.