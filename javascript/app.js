var axios = require("axios");

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(function(response){
    var res = response.data;

    var title = res.Title;
    var releaseDate = res.Released;
    var RTrating = JSON.stringify(res.Ratings[1].Value);
    var producer = res.Production;
    var language = res.Language;
    var plot = res.Plot;
    var cast = res.Actors;

console.log("Title: "+title);
console.log("Release Date: "+releaseDate);
console.log("Rotten Tomatoes Rating: "+RTrating);
console.log("Producer: "+producer);
console.log("Language: "+language);
console.log("Plot: "+plot);
console.log("Actors: "+cast);

});
