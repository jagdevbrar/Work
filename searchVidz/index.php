<!DOCTYPE html>
<html lang="en">
  <head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Search vidz</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="css/jquery.fancybox.css">
		<link rel="stylesheet" href="css/style.css">
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
		<script src="js/jquery.fancybox.pack.js"></script>
		<script>
			$(document).ready(function(){
				$(".fancybox").fancybox();
			});
		</script>
  </head>
  <body>
    <div class="navbar navbar-default">
		<a class="navbar-brand" id="fontwide" href="#">Search<span>Vidz</span></a>
	</div>	
	<div class="container">
	  <section>
		<form class="form-inline" onsubmit="return myFunction()" >
		   <div class="form-group">
			<input type="search" class="form-control input-lg" id="query" placeholder="Search Youtube">
		   </div>
			<input type="submit" class="btn btn-success btn-lg" value="Submit">
		</form>	
	  </seection>
		<footer>
			<ul id="results"></ul>
			<div id="buttons"></div>
		</footer> 	
  </body>
</html>