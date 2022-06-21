$(document).ready(function () {

    $("#protfilo img").click(function () {

        var imgSrc = $(this).attr("src");
        var imgAlt = $(this).attr("alt");
        
        $("#frame img").attr("src", imgSrc);
        $("#frame img").attr("alt", imgAlt);
        $("#frame").fadeIn();
        $("#overlay").css("display", "block");
        
    });


    $("#overlay").click(function () {

        $(this).fadeOut();
        $("#frame img").fadeOut();
        $("#frame").fadeOut();
    });

    var imgPos = 1;

  
   
    $("#frame img").click(function () {

        imgPos++;
     
        
        if (imgPos > 6) {
            
            imgPos = 1;
        }

        $("#frame img").attr("src", "imgs/k ("+imgPos+").jpg")
    });
   
});