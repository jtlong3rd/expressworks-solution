// WHAT'S IN QUERY

// PROMPT: Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/search', (request, response) => response.send(request.query));

app.listen(port);
