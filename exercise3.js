// JADE

// PROMPT: Create an Express.js app with a home page rendered by Jade template engine.

// The homepage should respond to /home.

// The view should show the current date using toDateString.

var express = require('express');
var jade = require('jade');
var path = require('path');
var app = express();
var port = process.argv[2];
var indexPath = process.argv[3];

app.get('/home', 
        function(request, response) {
            app.set('views', indexPath||path.join(__dirname, 'templates'));
            app.set('view engine', 'jade');
            
            response.render('index', { date: new Date().toDateString() });
        }
       );
       
app.listen(port);