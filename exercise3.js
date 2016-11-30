// JADE

// PROMPT: Create an Express.js app with a home page rendered by Jade template engine.

// The homepage should respond to /home.

// The view should show the current date using toDateString.

const express = require('express');
const { join } = require('path');
const app = express();
const port = process.argv[2];
const indexPath = process.argv[3];

app.get('/home', (request, response) => {
  app.set('views', indexPath || join(__dirname, 'templates'));
  app.set('view engine', 'jade');
  response.render('index', { date: new Date().toDateString() });
});

app.listen(port);
