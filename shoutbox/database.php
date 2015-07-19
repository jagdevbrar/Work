<?php
$con = mysqli_connect("localhost","root","waheguru123","shoutbox");
	if(mysqli_connect_error()){
		echo"failed to connect :".mysqli_connect_error();
	}

