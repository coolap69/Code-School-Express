$(function() {
    $.get('/cities', appendToList);
    
    function appendToList(cities) {
        var list =[];
        for(var i in cities) {
            list.push($('<form>', {text: cities[i] }));
        }
        $('display').append(list);
    }

});