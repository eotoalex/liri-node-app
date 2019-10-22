# liri-node-app
This the Liri app. It is a Language Interpretation and Recognition Interface that works off of the command line. 


Liri will allow users working on the command line to access data on music from Spotify, concerts from  Bands in Town, and movies from OMDB, without having to use a search engine or leave the command line. This will prevent the openning of new windows for searches that can be done simply and easily from the comfort of the command line.

2. Give a high-level overview of how the app is organized
The app is organized with variables that require the modules necessary to gain access to the API used (BandInTown, Spotify API, OMDB). Each call to the API's are wrapped in functions that can be invoked after the user invokes the respective if statment that corresponds to the 3rd argument of the command line (concert-this, spotify-this-song, movie-this). Axios is used to access the BandsInTown API and OMDB API; the 
MomentJS is used to log the time of user searches as well as converting time that might not be recognizable to the user, into more readable time.

3. Give start-to-finish instructions on how to run the app
By simply typing; 
"node [file-name] movie-this [the-song-you-want-to-search]", will output movie information for the respective movie typed,
"node [file-name] concert-this [the-artist-you-want-to-search]", will output concert information for the respective artist typed,
"node [file-name] spotify-this-song [the-song-you-want-to-search] , will output song information for the respective song typed.

4. Include screenshots, gifs or videos of the app functioning

5. Contain a link to a deployed version of the app
Deployed version of Liri on GitHub:
https://github.com/eotoalex/liri-node-app

Technologies Used:
  -Javascript
  -NodeJS
  -Spotify Web API
  -OMDB API
  
7. State your role in the app development


  
