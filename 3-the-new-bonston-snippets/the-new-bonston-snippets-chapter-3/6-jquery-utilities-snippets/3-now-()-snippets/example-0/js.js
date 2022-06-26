$(document).ready(function () {

    setInterval(function () {

        var timeStamp = $.now();//We can also use jQuery.now().
        $("#time").text(timeStamp);

    }, 1)

});

//now() represents the current time in millisecounds.