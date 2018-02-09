//express library

var express = require('express')
var app = express();

app.use(express.static('public'));

var cities = require('./routes/cities');

app.use('/cities', cities);

//listen for incoming signals on this port.
app.listen(process.env.PORT);
