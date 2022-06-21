$(document).ready(function () {

    $("#pageLoader").load($(".pages:first").attr("href"));//This will load the first link as default when the page hsa been loaded.

    $(".pages").click(function () {

        var href = $(this).attr("href");//this is the currently clicked link.
        $("#pageLoader").hide().load(href).fadeIn();//First hide then load the contant and fadeIn().

        return false;//This will prevert the page open in another window. 
    });

});


//XAAMP Server wants