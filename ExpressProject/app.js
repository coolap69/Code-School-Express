//express library

var express = require('express')
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded ({ extended: false});

app.use(express.static('public'));

//refers to the http method get.
//This is a get request
//use call back function to load the page

// app.get("/", function(request, response) {
//  //you get the request first, then response
//  response.send("Hello World");
// });

// app.get("/name", function(request, response) {
//  response.send("Louis the Man")
// });

// app.get("/redirect", function(request, response) {
//  response.redirect(301, '/surprise');
// });

// app.get("/surprise", function(request, response) {
//  response.send("Awesome")
// });

// app.get("/currentdate", function(request, response) {
//  response.send(new Date())
// });

// //listen for incoming signals on this port.
// app.listen(process.env.PORT);


// Static routes
// app.use(express.static('public'))
// app.get('/cities', function(request, response) {

//  var cities = ['Providence', 'Boston', 'Houston', 'Phoenix', 'New York City'];
//  if (request.query.limit >= 0) {
//   response.json(cities.slice(0, request.query.limit));
//  }
//  else {
//   response.json(Object.keys(cities));
//  };
// });


//Dynamic routes  //fetch additional information      
var cities = {
 'Providence': 'Rhode Island',
 'Boston': 'Massachusetts',
 'Houston': 'Texas',
 'Phoenix': 'Arizona',
 'New York City': 'New York'
};


app.param('name', function(request, respond, next) {
 var name = request.params.name;
 //lower case
 var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
 request.cityName = city;
 next();
});

// app.use(express.static('public'))
app.get('/cities', function(request, response) {
if (request.query.limit >= 0) {
 response.json(cities.slice(0, request.query.limit));
}
else {
 response.json(Object.keys(cities));
};
});

app.get('/cities/:name', function(request, response) {
 var description = cities[request.cityName]

 if (!description) {
  response.status(404).json('Not description found for ' + request.params.name);
 }
 else {
  response.json(description);
 }
});

add.post('/cities', parseUrlencoded, function)





//listen for incoming signals on this port.
app.listen(process.env.PORT);