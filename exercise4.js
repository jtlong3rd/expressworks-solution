// GOOD OLD FORM

// PROMPT: Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

const express = require('express');
const app = express();
const { urlencoded } = require('body-parser');
const port = process.argv[2];

app.post('/form', (request, response) => {
  urlencoded({ extended: false })(request, response, err => {
    if (err) {
      throw err;
    }

    response.send(request.body.str.split('').reverse().join(''));
  });
});

app.listen(port);
