$(document).ready(function () {

    $("#sendData").click(function () {

        var str = $("#string").val();
        var k="joker"
        $.get('php/reverse.php', { inp: str,inp2:k }, function (data) {//data is the rerutn value form the php

            $("#foo").text(data);
        })

    });


});

//We can use jQuery instead of $.
//$.get() is use to send a data to Specified php file.
//$("php/reverse.php") This means for what php file do we want to send it.
//inp is a variable that we are sending that variable contains string value.,we can send more by ,

//php

//strrev is reverse the string.
//$_GET[] is used to get the value.