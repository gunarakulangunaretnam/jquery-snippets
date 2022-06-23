
function otherName() {

    $("#container").html("<span style='color:green';>Guna</span>"+"<span>Hai How are u?..</span>");

}

$(document).ready(function () {

    otherName();

    $("#textArea").keypress(function (event) {//event is the event.

  
        if (event.which == 13) {//The Key Number charCode or keyCode.

            if ($("#checkbox").prop("checked")) {//prop is properties.properies of checkbox.

                
                $("#send").click();
                event.preventDefault();

            }
        }


    });


    var username = "<span style='color:red'>You:</span>"
   


    $("#send").click(function () {


        var newMsg = $("#textArea").val();
        
        var prevMsg = $("#container").html();

    

        $("#container").html(prevMsg +"<br />"+username + newMsg);
        $("#textArea").val("");
    });

});