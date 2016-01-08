// STATIC

// PROMPT: Apply static middleware to serve index.html file without any routes.

// Your solution must listen on the port number supplied by process.argv[2].

// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content:

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
var path = require('path');
var app = express();
var port = process.argv[2];
var indexPath = process.argv[3];

app.use(express.static(indexPath||path.join(__dirname, 'public')));
       
app.listen(port);