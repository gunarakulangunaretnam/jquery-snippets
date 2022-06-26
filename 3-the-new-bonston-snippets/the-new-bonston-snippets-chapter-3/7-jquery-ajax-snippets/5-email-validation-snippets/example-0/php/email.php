<?php

   if(isset($_POST['email'])){

     $emaildata=$_POST['email'];

    if (!empty($emaildata)) {
    	
    	if (filter_var($emaildata,FILTER_VALIDATE_EMAIL)===false) {
    		
    		echo "The email address is not seen to be a valid email adress";

    	}else {
    		
    		echo "The Email has been validated";

    		}
    }

   }
    


?>

