(function ($) {


    $.fn.targetLinks = function () {//targetLinks is the name of this plugins.


        var target = $(this).attr("target");

        if (target == undefined ) {

            $(this).attr("target", "_blank");

        }
    };

})(jQuery);


//This is the basic template to create plugins.
