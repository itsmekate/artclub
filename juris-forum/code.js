"use strict";


var key = 'f4ba3bbb92e14f5a8dc4fe27742c4f5b';
var q = 'права';
var url = 'https://newsapi.org/v2/everything?q='+ q + '&apiKey=f4ba3bbb92e14f5a8dc4fe27742c4f5b'
// var url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f4ba3bbb92e14f5a8dc4fe27742c4f5b';
var recievedNews = function recievedNews(newsdata) {
   var articlesDiv = document.querySelector(".articles");
   var i = 0;
   newsdata.articles.forEach(function (article) {
   	if (i == 6)
   		return (0);
      //Here we create and add html elements to our html file
      var div = document.createElement("div");
      div.className = "news";
      div.className = "card col s3 m3 l3";
      div.style.margin = "20px";
      div.style.height = "200px";
      div.innerHTML = "<p>" + article.title + ' <hr> <a href="'+ article.url+'" target="_blank">Посмотреть новость</a>' + "</p>";
      // div.innerHTML =  '<a href="'+ article.title+'></a>';
      articlesDiv.appendChild(div);
      i++;
   });
};

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url).then(function (response) {
   return response.json();
}).then(recievedNews);

// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(52.525595,13.393085);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}