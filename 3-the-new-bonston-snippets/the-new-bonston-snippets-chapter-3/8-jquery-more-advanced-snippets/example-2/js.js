function fontSizeSystem(ele,size) {

    var curele = parseInt(ele.css("font-size")); //parseInt removes the px form the size then we can easliy increse or decrese the value.
    var sizeNew = 0;

    if (size == "small") {

        sizeNew = curele - 1;

    } else if (size == "big") {

        sizeNew = curele + 1;
    }

    ele.css("font-size", sizeNew + "px");
}



$("#small").click(function () {

    fontSizeSystem($("p"), "small");

});

$("#big").click(function () {

    fontSizeSystem($("p"), "big");

});


