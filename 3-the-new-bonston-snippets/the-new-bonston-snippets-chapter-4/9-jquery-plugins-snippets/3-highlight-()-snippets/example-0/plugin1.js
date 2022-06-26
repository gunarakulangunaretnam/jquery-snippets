(function ($) {

    $.fn.highlight = function (options) {

        var settings = {

            'color': null,
            'foreground':null

    }


        if (options) {


            $.extend(settings, options);

		   //$.extend(settings, options) means if options are avaliable just overwirte the settings with avaliable options.
            //This code means we join options(parameters) with settings object.
            //We need to give paramter's values like color:red,foreground:"black".
            // $.extend keyword join them together.
            //if the programmer provides anything thats will be change in the settings object.
            //The programmer will provide an object as a parameter value.
        }

        this.css("background-color", settings.color).css("color", settings.foreground);


    }

})(jQuery);