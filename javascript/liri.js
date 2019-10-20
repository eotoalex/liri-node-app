
//Variables
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
// require("openurl").open("http://" + spotifyURL)
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify)
var userBand = "";
var inquirer = require("inquirer")
var filteredSearch = process.argv.splice(3).join("+");
var searchCriteria = process.argv[2];
var allNodeArgs = process.argv;

// This function takes in all the arguments passed to node and appends in the log.txt.
logAllCommands (allNodeArgs);


// fs.writeFile("log.txt", "Command Log,", function(err){
//     if(err){
//         console.log(err)
//     } 
// })


if (searchCriteria === "movie-this"){
    movieSearch (filteredSearch)
}else if (searchCriteria === "do-what-it-says"){
    var index = 0;
    readFileByIndex(index);
}
   









// This will take what is output to the terminal and saves to the log.txt file.
function logAllCommands (data){
// fs.appendFile("log.txt", "\n"+data, function(err){
    
//     if(err){
//         console.log(err);
//     }
// })
console.log(data)
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

        // This is where the spotify api is accessed.
    function spotifyAPI(songName){
                spotify
                .request('https://api.spotify.com/v1/search?q='+songName+'&type=track,playlist')
                .then(function(data){
                    var spotifyURL = data.tracks.items[0].album.external_urls.spotify;
                    require("openurl").open(spotifyURL)
                    console.log(spotifyURL);
                });
                
        }

        function readFileByIndex(i) {
            fs.readFile("random.txt", "utf8", function (err, data){
                if(err){
                    console.log(err)
                }
                data = data.split(",")[i];
                data = data.split(" ").join("+");
                
                spotifyAPI(data)
            })
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

