// JSON ME

// PROMPT: Write a server that reads a file, parses it to JSON and outputs the content
// to the user.

// The port is passed in process.argv[2].  The file name is passed in process.argv[3].

// Respond with:

//     res.json(object)

// Everything should match the '/books' resource path.

var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var filename = process.argv[3];

app.post('/search', 
         function(request, response) {
             response.json(JSON.parse(fs.readFile(filename)));
         }
        );
       
app.listen(port);