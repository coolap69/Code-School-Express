var express = require('express')
var app = express();

app.use(express.static('public'))

app.get('/cities', function(request, response) {

            var cities = ['Providence', 'Boston', 'Houston', 'Phoenix'];
            response.json(cities);
    });


            //listen for incoming signals on this port.
            app.listen(process.env.PORT);