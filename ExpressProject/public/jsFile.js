/*global $*/
$(function() {
    $.get('/cities', appendToList);
    
    function appendToList(cities) {
        var list =[];
        for(var i in cities) {
            list.push($('<option>', {text: cities[i] }));
        }
        $('#optionTags').append(list);
    }
});



$('#addNewCity').on('submit', function(event) {
    event.preventDefault();
    var form = $(this)
    var cityinfo =form.serialize();
    
    $.ajax ({
        Type: 'POST',
        url: '/cities', 
        data: cityinfo
    }).done(function(addedCity) {
        appendToList([addedCity]);
        form.trigger('reset');
    }).fail(function(addedCity) {
        console.log('failed')
    });
});