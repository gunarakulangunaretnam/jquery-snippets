(function ($) {

    $.fn.toolTip = function () {

        $(this).after("<div id='hoverText'></div>");//We placed a div element after the current a element.



        $(this).mouseover(function () {//When the user mouse is over the element run bellow codes.

            title = $(this).attr("title");//title is a globel variable.It has the title value.
            $(this).attr("title", "");//then we sat it to blank because by default it has a tooltip.We remove that by using this Technique.



        }).mousemove(function (e) {//When the mouse is moving

            var top = e.clientY + 10;//We got the position Dynamically we add 10 to looks nice.
            var left = e.clientX + 10;

            $("#hoverText").css("top", top).css("left", left).text(title).show();


        }).mouseout(function () {

            $(this).attr("title", title);//We need to give the title value back
            $("#hoverText").hide();

        });


    };

})(jQuery);