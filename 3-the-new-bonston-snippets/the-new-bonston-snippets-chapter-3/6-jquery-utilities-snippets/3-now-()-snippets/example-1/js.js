$(document).ready(function () {


    var eventTime = Date.parse('17 june 2017')/1000;//normally it is in milliseconds.we deivied by 1000 now it is changed into secounds.
    var currentTime = Math.floor(jQuery.now() / 1000)//Math.floor() is floor it like 5.4=5 5.6=6.We also divide by 1000.//We can use $ for jQuery.
    var seconds = eventTime - currentTime;//by subtracting eventTime by currentTime we got the remaining time.
    var days = Math.floor(seconds / (60 * 60 * 24));//This the concept of getting the days.
    $("#time").html(days);



});

//Date.parse() method is the javascript method.It parses the date into milliseconds.
//jQuery.now() is returns the current time.

