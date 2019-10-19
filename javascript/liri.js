
//Variables
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id:"4f223dd648564d609a7c63ac1937d2e4",
    secret:"3e2874ddeeb14c208c9042df22de349a"
})
var userBand = "";
var inquirer = require("inquirer")
var filteredSearch = process.argv.splice(3).join("+");
var searchCriteria = process.argv[2];



// This is where the spotify api is accessed.
function spotifyAPI(){
spotify.search({type:"track", query:"I want it that way"},function(err,data){
if (err){
    console.log("Error occurred" + err)
}
console.log(data);
});
}

// if (searchCriteria === "movie-this"){
//     movieSearch (filteredSearch)
// }else if (searchCriteria === "do-what-it-says"){}

// if (searchCriteria === "do-what-it-says"){

// }




// This will take what is output to the terminal and saves to the log.txt file.
function logdata (data){
fs.appendFile("log.txt", "\n"+data, function(err){
    
    if(err){
        console.log(err);
    }
})
}




// Movie search function that takes in user input to work with OMDB API.
function movieSearch (movieTitle){
    
    if (movieTitle){
    axios.get("http://www.omdbapi.com/?t="+movieTitle+"&y=&plot=short&apikey=trilogy").then(function(response){
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
}else if(!movieTitle){
    movieTitle = "Mr. Nobody"
    axios.get("http://www.omdbapi.com/?t="+movieTitle+"&y=&plot=short&apikey=trilogy").then(function(response){
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
}
    }


    function inquirePrompt (){
        inquirer.prompt([
            {
                type: "input",
                message: "What movie would you like to search?",
                name: "movie"
        
            },
        
        ]).then(function(inquirerResponse){
            var userSearch = inquirerResponse.movie;
            
            if(userSearch){
                movieSearch (userSearch)
            }
            else{
                movieSearch("Mr. Nobody");
            }
           
        })
    };


function Inquirer(){
    // Setting up a prompt for the user.
    // inquirer.prompt([
    //     {
    //         type: "list",
    //         message: "Which would you prefer to search?",
    //         choices: ["Movies", "Bands", "Music"],
    //         name: "search"
    
    //     },
    
    // ]).then(function(inquirerResponse){
    //     console.log(inquirerResponse.search)
    //     if (inquirerResponse.search === "Movies"){
    //         inquirePrompt ()
    //     }
    // })
    
    
    }

