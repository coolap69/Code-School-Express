var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded ({ extended: false});

var cities = {
 'Providence': 'Rhode Island',
 'Boston': 'Massachusetts',
 'Houston': 'Texas',
 'Phoenix': 'Arizona',
 'Foxboro': 'Massachusetts'
};

router.route('/')
.get(function(request, response) {
if (request.query.limit >= 0) {
 response.json(cities.slice(0, request.query.limit));
}
else {
 response.json(Object.keys(cities));
};
})

.post(parseUrlencoded, function(request, response) {
 if(request.body.city.length >= 4 && request.body.state.length > 2) {
  // var newCity = request.body;
  console.log(request.body.city, request.body.state);
  var newCity = createCity(request.body.city, request.body.state);
  // console.log("newcity object")
  // console.log(newCity);
  // cities[newCity.city]= newCity.state;
  
  response.status(201).json(newCity);
 } else {
    console.log("Enter a valid City and State")
response.status(404).json("Enter a valid City and State");

 }
});

router.route('/:name')
// app.param change to all
.all(function(request, respond, next) {
 var name = request.params.name;
 //lower case
 var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
 request.cityName = city;
 next();
})

.get(function(request, response) {
 var state = cities[request.cityName]

 if (!state) {
  response.status(404).json('Not description found for ' + request.params.name);
 }
 else {
  response.json(state);
 }
});


var createCity = function(name, state){
 cities[name] = state;
 return name;
}

.delete(function(request, response) {
 delete cities[request.cityName];
 response.sendStatus(200);
});







module.export = router;