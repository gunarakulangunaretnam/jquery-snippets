function redirect(time,url) {

    var interval = setInterval(function () {

        $("#time").text(time);

        time = time - 1;//time-- 

        if (time == 0) {//when the time is == 0

            clearInterval(interval);//stop the interval
            window.location = url;//go to the site. same as window.open("www.google.lk","_self")

        }

    }, 1000);//one sec

}


$(document).ready(function () {//When the document is loaded successfully

    redirect(5, "http://www.google.lk");

});