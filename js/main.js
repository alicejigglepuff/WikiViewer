function bookSearch(){
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType:"json",

		success: function(data) {
			var results = document.getElementById("results")
			for(i = 0; i < data.items.length; i++){

				var jdata = data.items[i].volumeInfo

				// results.innerHTML += "<h2>" + jdata.authors[0] + "</h2>" + jdata.publishedDate + "<img src='" +
				// jdata.imageLinks.thumbnail + "'>"

				var newDiv = document.createElement('DIV')
				newDiv.className = "col-md-4 animated fadeInDownBig"

				var newAuthor = document.createElement('h3')
				var newTitle = document.createElement('h2')
				newTitle.className = "title"
				var author = document.createTextNode('Author: ' + jdata.authors[0])
				var title = document.createTextNode(jdata.title)
				newAuthor.appendChild(author)
				newTitle.appendChild(title)
				
				newDiv.appendChild(newTitle)
				newDiv.appendChild(newAuthor)

				var newImg = document.createElement('IMG')
				newImg.className = "images"
				newImg.setAttribute('src', jdata.imageLinks.thumbnail)
				newDiv.appendChild(newImg)

				document.getElementById('results').appendChild(newDiv)

			}
		},

		type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)



