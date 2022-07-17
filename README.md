## Install Node Package Manager

Using yum repository manager:

```bash
$ sudo yum install npm
```

Download the repository from github
```bash
$ git clone git@github.com:McFaddenJC/node-api.git
```

Using NPM, initialize the application as follows:
```bash
$ cd node-api/
$ npm init
```

The api runs on port 8080 and has a default function that provides instructions on what endpoints are provided. Each of the endpoints works as follows:
* /random_crawl - Generates a whole number between 1 and 6, uses that number to call the SWAPI, extracts the values for title and opening_crawl, and returns those values as a JSON object.
* /random_crawl_reverse - Generates a whole number between 1 and 6, uses that number to call the SWAPI, extracts the values for tit and opening_crawl, reverses the array for opening_crawl, and returns those values as a JSON object.