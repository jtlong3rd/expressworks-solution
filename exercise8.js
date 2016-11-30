// JSON ME

// PROMPT: Write a server that reads a file, parses it to JSON and outputs the content
// to the user.

// The port is passed in process.argv[2].  The file name is passed in process.argv[3].

// Respond with:

//     res.json(object)

// Everything should match the '/books' resource path.

const express = require('express');
const { readFile } = require('fs');
const app = express();
const port = process.argv[2];
const filename = process.argv[3];

app.post('/search', (request, response) => response.json(JSON.parse(readFile(filename))));

app.listen(port);
