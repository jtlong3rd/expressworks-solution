// GOOD OLD FORM

// PROMPT: Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.argv[2];

app.post('/form', 
        function(request, response) {
            var urlencodedParser = bodyparser.urlencoded({extended: false});
            urlencodedParser(request, response, function(err) {if (err) 
                                                                throw err;
                                                                
                                                               response.send(request.body.str.split('').reverse().join(''));
                                                              }
                            );
        }
       );
       
app.listen(port);