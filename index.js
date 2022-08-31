var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 5000;
var app = express();

// deliver index.html if no file is requested
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT);
