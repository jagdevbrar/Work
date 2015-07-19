$(document).ready(function(){
  $("#wider").keydown(function(event){
	if(event.keyCode == 13){
	myFunction();
	}																							
  });
  $(".form").submit(function(e){
	  console.log("submit function called");
	  e.preventDefault();
  })
});	
var myFunction =function(){
	 q = $("#query").val();
	$('#results').html('');	
$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				var buttons = getButtons(prevPageToken,nextPageToken);
				$("#buttons").append(buttons);
			}
	);
}
// Next Page Function
function nextPage(){
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				// Display Buttons
				$('#buttons').append(buttons);
			}
	);
}


// Prev Page Function
function prevPage(){
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				// Display Buttons
				$('#buttons').append(buttons);
			}
	);
}
//Build output
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;
	
//Build output String
	var output = '<li>' +
	'<div class="list-left">' +
	'<img src="'+thumb+'">' +
	'</div>' +
	'<div class="list-right">' +
	'<h5><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h5>' +
	'<h5>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</h5>' +
	'<h6>'+description+'</h6>' +
	'</div>' +
	'</li>' +
	'<div class="clearfix"></div>' +
	'';
		return output;
}

function getButtons(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class="button-container">'+'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next</button></div>';
	} else {
		var btnoutput = '<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
		'onclick="prevPage();">Prev</button>' +
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next</button></div>';
	}
	
	return btnoutput;
}