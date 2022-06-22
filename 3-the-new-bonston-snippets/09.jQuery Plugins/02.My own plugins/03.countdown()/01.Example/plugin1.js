(function ($) {

    $.fn.countDown = function (options,callback) {



        var settings = {

            form: null,


        }

        if (options) {

            $.extend(settings, options)


            /*
            $.extend(settings, options) means if options are avaliable just overwirte the settings with avaliable options.

             */

        }

        var current = settings.form;
        var display = this;//We need to make the this keyword as globel variable.


        function countExu() {

            current = current - 1;
            display.text(current);

            if (current == 0) {//if it is == 0.

                clearInterval(interVal);
                callback();//we call the function.
            }
        }




        var interVal = setInterval(countExu, 1000);

    };

})(jQuery);