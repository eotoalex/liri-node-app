
//Variables
var axios = require("axios");
var userMovie = "remember the titans";
var userBand = "";
var inquirer = require("inquirer")

// Setting up a prompt for the user.
inquirer.prompt([
    {
        type: "list",
        message: "Which would you prefer to search?",
        choices: ["Movies", "Bands", "Music"],
        name: "search"

    },

]).then(function(inquirerResponse){
    console.log(inquirerResponse.search)
    if (inquirerResponse.search === "Movies"){
        inquirePrompt ()
    }
})















// Movie search function that takes in user input to work with OMDB API.
function movieSearch (movieTitle){
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

