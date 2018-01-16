$(document).ready(function(){
	
	var returnedQuote, returnedAuthor;
	
    function getRaQuote(){
		$.ajax({
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
			headers: {
				"X-Mashape-Key" : "kZ1GUaTuxYmsh7fx5pDbMCzxECC4p1rPnObjsnsYPNuylyDlbk",
			},
			success: function(resp){
				
				if (typeof resp === 'string') {
				resp = JSON.parse(resp);
				}
				
				console.log(resp);
				
				returnedQuote = encodeURIComponent("\""+resp.quote+"\"");
				returnedAuthor = encodeURIComponent("-"+resp.author);
				returnedCategory = encodeURIComponent(resp.category);
				
				$("#theQuote").html("\""+resp.quote+"\""); 	//or $("#theQuote").text(); 
				$("#theAuthor").html("-"+resp.author); 		//or $("#theAuthor").text();
				$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + returnedQuote + returnedAuthor + "&hashtags=" + returnedCategory);
				}
		});
	}
	
	$('#newRaQuote').on('click', getRaQuote);
	
});