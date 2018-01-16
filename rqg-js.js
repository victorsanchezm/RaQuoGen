$(document).ready(function(){
	
	var returnedQuote, returnedAuthor, returnedCategory;
	
    function getRaQuote(){
		$.ajax({
			
			//Do request from:
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
			
			//Api requirements
			headers: {
				"X-Mashape-Key" : "kZ1GUaTuxYmsh7fx5pDbMCzxECC4p1rPnObjsnsYPNuylyDlbk",
			},
			
			//If ok:
			success: function(resp){
				
				//convert the response to json format (it comes as a string) 
				if (typeof resp === 'string') {
				resp = JSON.parse(resp);
				}
				
				//console.log(resp);
				
				//Put the new quote in the html elements
				$("#theQuote").html("\""+resp.quote+"\""); 	//we could use $("#theQuote").text(...); 
				$("#theAuthor").html("-"+resp.author); 		//or $("#theAuthor").text(...);
				
				//Give URL format to share it in twitter
				returnedQuote = encodeURIComponent("\""+resp.quote+"\"");
				returnedAuthor = encodeURIComponent("-"+resp.author);
				returnedCategory = encodeURIComponent(resp.category);
				
				//Replace the link with the current(encoded) quote, author, hashtags...
				$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + returnedQuote + returnedAuthor + "&hashtags=" + returnedCategory);
				}
		});
	}
	
	//Listen to the click event and refresh the quote
	$('#newRaQuote').on('click', getRaQuote);
	
});
