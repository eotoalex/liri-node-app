# liri-node-app
>This the __Liri-node-app__. It is a Language Interpretation and Recognition Interface that works off of the command line. 

>Liri will allow users working on the command line to access data on movies, music and upcoming concerts without having to leave the command line. Essentially, the Liri-node-app is a one stop shop for information on movies, music and concerts from the comfort of your command line.
---
## How is the app organized?

The app is organized with variables that require the modules necessary to gain access to the API used __(BandInTown, Spotify API, OMDB)__, as well as variables that filter the node arguments to be put into the API to get the appropriate responses from the API's. Each call to the API's are wrapped in functions that can be invoked after the user inputs the respective statments that correspond to the 3rd argument of the command line __(concert-this, spotify-this-song, movie-this)__ followed by the search terms they are looking for. Axios is used to access the BandsInTown API and OMDB API, while
MomentJS is used to log the time of user searches as well as converting time that might not be recognizable to the user, into more readable time in the outputs to both the terminal and the log.txt file which saves user output data.
---
## How does the Liri-node-app work?

"node _file-name_ __movie-this__ _the-song-you-want-to-search_", will output movie information for the respective movie typed,
"node _file-name_ __concert-this__ _the-artist-you-want-to-search_", will output concert information for the respective artist typed,
"node _file-name_ __spotify-this-song__ _the-song-you-want-to-search_ , will output song information for the respective song typed.
___ 

## Include screenshots, gifs or videos of the app functioning

___
## Link to the deployed version of Liri on GitHub:
   https://github.com/eotoalex/liri-node-app

    Technologies Used:
      *Javascript
      *NodeJS
      *Axios package manager
      *MomentJS
      *Spotify Web API
      *OMDB API
      *Bands in Town API

___
## What was your role in the development of this application?
Building Liri was primarily an API centered project. I spent most of my time around the Spotify API documentation, fiddling with the response the API gave and working through traversing the object returned appropriatly to extract the information that would be the most useful for the user's search output after they press enter. The modules used, like Axios for example, were very simple to install and use for the OMDB and BandsInTown API, cutting my time I thought I would spend on acquiring API information from these sources in half, allowing me to organize and clean up my code by wrapping all API's and other fun API tricks in functions that I then call within if/else if statements when the 3rd argument in the node array read either concert-this, spotify-this-song or movie-this. 
All in all this was my first nodeJS project, and it felt great to get my hands dirty, get frustrated and work with modules for the first time as well.




  
