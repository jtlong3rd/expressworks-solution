// HELLO WORLD!

// PROMPT: Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

// The port number will be provided to you by expressworks as the first argument of
// the application, ie. process.argv[2].

var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/home', 
        function(request, response) {
            response.end('Hello World!');
        }
       );
       
app.listen(port);