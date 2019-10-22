# liri-node-app
>This is the __Liri-node-app__. It is a Language Interpretation and Recognition Interface that works off of the command line. 
Liri will allow users working on the command line to access data on movies, music and upcoming concerts without having to leave the command line. Essentially, the Liri-node-app is a one stop shop for information on movies, music and concerts from the comfort of your command line.
---
## How is the app organized?

The app is organized with variables that require the modules necessary to gain access to the API used __(BandInTown, Spotify API, OMDB)__, as well as variables that filter the node arguments to be put into the API to get the appropriate responses from the API's. Each call to the API's are wrapped in functions that can be invoked after the user inputs the respective statments that correspond to the 3rd argument of the command line __(concert-this, spotify-this-song, movie-this)__ followed by the search terms they are looking for. Axios is used to access the BandsInTown API and OMDB API, while
MomentJS is used to log the time of user searches as well as converting time that might not be recognizable to the user, into more readable time in the outputs to both the terminal and the log.txt file which saves user output data.
---
## How does the Liri-node-app work?

>User input, in the terminal, will be within the quotes.
>Words in italics refer to the file you are currently using and, the other, the search you choose to initiate.
>The words in bold are the key words which will initiate the search for a given category. For example, movie-this will search movies, concert-this will search concert events and spotify-this-song will search music info.

*"node  _file-name_  __movie-this__  _the-movie-you-want-to-search_", will output movie information for the respective movie typed,

*"node  _file-name_  __concert-this__  _the-artist-you-want-to-search_", will output concert information for the respective artist typed,

*"node  _file-name_  __spotify-this-song__  _the-song-you-want-to-search_ , will output song information for the respective song typed.

*"node  _file-name_  __do-what-it-says__  ~~_the-song-you-want-to-search_~~ , will open a new window in the browser, access the the song I want it that way by the Backstreet Boys.
___ 

## If you still need help using the app;

[Demo Video](https://youtu.be/Tdmc4VwTPE0)

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
Building Liri was primarily an API centered project. I spent most of my time around the Spotify API documentation, fiddling with the response the API gave and working through traversing the objects returned, to extract the information that would be the most beneficial to the user. The modules used, like Axios for example, were very simple to install and use for the OMDB and BandsInTown API, cutting my time I thought I would spend on acquiring API information from these sources in half, allowing me to organize and clean up my code by wrapping all API's and other fun API tricks in functions, which I then call within if/else statements when the 3rd argument in the node array read either __concert-this__, __spotify-this-song__ or __movie-this__. 
All in all this was my first nodeJS project, and it felt great to get my hands dirty working with modules for the first time.




  
