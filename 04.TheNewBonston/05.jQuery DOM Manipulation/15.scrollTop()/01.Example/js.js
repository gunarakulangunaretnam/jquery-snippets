$(document).ready(function () {

    $("#top").click(function () {



        $("body").animate({


            scrollTop:0

        }, "slow")

    });

});


//We have to get body and assign this animate() function than give scrollTop.
//The second parameter of the animate() function is it's speed."slow fast milliseconds".