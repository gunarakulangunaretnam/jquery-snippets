$("#txt").keydown(function (event) {

    var keyCodeValue = event.keyCode;
    var realValue = String.fromCharCode(keyCodeValue);
    $("#display").html(realValue);

});

//The keydown event occurs when the user presses the key inside.
//The html() function is used to change html datas.