var express = require('express'),
const PORT = process.env.PORT || 8080 || 5000 || 3000
var startedxd = require('./index.html')


var app = express()
app.enable('trust proxy');
app.use('/start', startedxd)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})
