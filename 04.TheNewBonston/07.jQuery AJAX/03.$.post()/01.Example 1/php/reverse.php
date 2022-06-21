<?php 

if(isset($_POST['name'], $_POST["text"])){
	
	$name= $_POST["name"];
	$text= $_POST["text"];
	
	echo '<strong>', $name, '</strong> says <i>',$text,'</i>';
	
	
}


?>