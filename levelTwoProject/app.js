//express library

var express = require('express')
var app = express();

//refers to the http method get.
//This is a get request
//use call back function to load the page

app.get("/", function(request, response) {
 //you get the request first, then response
 response.send("Hello World");
});

app.get("/name", function(request, response) {
 response.send("Louis the Man")
});

app.get("/redirect", function(request, response) {
 response.redirect(301, '/surprise');
});

app.get("/surprise", function(request, response) {
 response.send("Awesome")
});

app.get("/currentdate", function(request, response) {
 response.send(new Date())
})

//listen for incoming signals on this port.
app.listen(process.env.PORT);



app.use(express.static('public'))

app.get('/cities', function(request, response) {

            var cities = ['Providence', 'Boston', 'Houston', 'Phoenix'];
            response.json(cities);
    });


            //listen for incoming signals on this port.
            app.listen(process.env.PORT);