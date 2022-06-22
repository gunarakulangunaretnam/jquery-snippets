$(document).ready(function () {

    $("#btn").click(function () {


        var box = $("#box");
        box.animate({

            width: "500px",
            opacity: 0.5,
        });
        box.animate({

            width: "250px",
            opacity: 1,
            height:"500px"


        });

        box.animate({

            width: "500px",
            opacity: 1,

        });

    });
});
