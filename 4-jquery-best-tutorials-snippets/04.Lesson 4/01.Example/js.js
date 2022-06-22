$(document).ready(function () {


    var windowHeight =0;
    var headerHeight = 0;
    var resizeValue = 0;

    resizable();

    function resizable() {//When resizing

        windowHeight = $(window).height();//Window height
        headerHeight = $("header").outerHeight();//header height
        resizeValue = windowHeight - headerHeight;//window height - header height 
        $("#main_Contant").height(resizeValue)//appaly the resizeValue
        $("#leftSidebar").height(resizeValue);//appaly the resizeValue
        $("#rightSideBarContant").height(resizeValue);//appaly the resizeValue

    }

  


    $(window).resize(function () {
       
        resizable();

    });
 

});