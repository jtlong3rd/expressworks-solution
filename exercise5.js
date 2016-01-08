// STYLISH CSS

// PROMPT: Style your HTML from previous example with some Stylus middleware.

// Your solution must listen on the port number supplied by process.argv[2].

// The path containing the HTML and Stylus files is provided in process.argv[3]
// (they are in the same directory). You can create your own folder and use these:

// The main.styl file:

//     p
//       color red

// The index.html file:

//     <html>
//       <head>
//         <title>expressworks</title>
//         <link rel="stylesheet" type="text/css" href="/main.css"/>
//       </head>
//       <body>
//         <p>I am red!</p>
//       </body>
//     </html>

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.argv[2];
var directory = process.argv[3];

app.use(require('stylus').middleware(directory));
app.use(express.static(directory));

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