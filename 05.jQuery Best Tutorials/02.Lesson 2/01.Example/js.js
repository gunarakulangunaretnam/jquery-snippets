$(document).ready(function () {


    $("#img1").css("opacity", 0);
    $("#links").css("opacity", 0);
    $("#menuBox").css("opacity", 0);
    $("#img2").hide();
    $("#img3").hide();

    $(window).scroll(function () {

        var windowScrollTopPostion = $(window).scrollTop();



            if (windowScrollTopPostion > 100 ) {

                $("#img1").animate({
                    "opacity": 1
                }, 600);//300 is the time millisconds
               
            }


            if (windowScrollTopPostion > 600) {

                $("#links").animate({
                    "opacity":1
                },1000);
                $("#menuBox").animate({
                    "opacity":1
                },600);


            }
            if (windowScrollTopPostion > 1500) {

                $("#img2").fadeIn("slow");
            }

            if (windowScrollTopPostion > 3200) {

                $("#img3").slideDown("slow");
            }

        
    });

});