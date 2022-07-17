/*
Set usual consts for node api
*/
const express = require('express');
const app = express();

/*
Set default api endpoint to describe the available endpoints
*/
app.get('/', (req, res) => {
    let apiHelp = "Star Wars Crawl API Endpoints: <br/> \
        /random_crawl - returns the title and crawl from an episode <br/> \
        /random_crawl_reverse - returns the title and crawl from an episode in reverse";
    res.send(apiHelp)
});

/*
Endpoint that calls the star wars api to get the random crawl text
    and returns it as a json object
*/
app.get('/random_crawl', (req, res) => {
    // wrap function in a try/catch in case api fails
    try {
        // set the random value from 1-6 to pass into the api call
        let episode = Math.floor((Math.random() * 6) + 1);
        console.log(episode);
        // use axios to call the SW API
        var axios = require('axios');
        var config = {}
        // call the star wars api with the random value
        axios.get('http://swapi.dev/api/films/'+episode, config)
        .then(function(response) {
            // set the title from the object
            let title = response.data['title'];
            // set the crawl text from the object as an array
            let crawl = response.data['opening_crawl'].split("\r\n");
            // format the response as a json object
            let myResponse = {
                "film_name" : title,
                "opening_crawl" : crawl
            }
            // return the json object
            res.send(myResponse);
        });
    }
    catch(err){
        res.send("An error has occurred");
        console.log(err.message);
    }
});

/*
Endpiont that calls the star wars api to get the random crawl text
    and returns it in reverse order as a json object
*/
app.get('/random_crawl_reverse', (req, res) => {
    // wrap function in a try/catch in case api fails
    try {
        // set the random value from 1-6 to pass into the api call
        let episode = Math.floor((Math.random() * 6) + 1);
        console.log(episode);
        // use axios to call the SW API
        var axios = require('axios');
        var config = {}
        // call the star wars api with the random value
        axios.get('http://swapi.dev/api/films/'+episode, config)
        .then(function(response) {
            // set the title from the object
            let title = response.data['title'];
            // set the crawl text from the object as an array but in reverse
            let crawl = response.data['opening_crawl'].split("\r\n").reverse();
            // format the response as a json object
            let myResponse = {
                "film_name" : title,
                "opening_crawl" : crawl
            }
            // return the json object
            res.send(myResponse);
        });
    }
    catch(err){
        res.send("An error has occurred");
        console.log(err.message);
    }
});

/*
Set the listening port for the api to be 8080
*/
app.listen(8080, () => console.log('Server running on port 8080'));