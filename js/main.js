$(document).ready(function(){
	$('#search').click(function(){
		//get search input
		var searchTerm = $('#search').val();
		//API url with search term
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=api" + searchTerm;

		$.ajax({
			type: "GET";
			url: url;
			async: false;
		})
	});
});