$(document).ready(function () {

    var btn = $("#hideAndShow");
    var txt = $("#txt");

    btn.click(function () {


        if (btn.attr("value") == "Hide") {


            txt.hide("slow");
            btn.attr("value", "Show");

        } else {


            txt.show("slow");
            btn.attr("value", "Hide");


        }

    });
});


//by using jquery we can write web application easliy without the raw javascript.
//jquery is write less and do more framework.
//jquery is used almost everywhere.
//This is a small example of what can jquery do.
