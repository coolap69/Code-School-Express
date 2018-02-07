 /* global $ */
$(function() {
    $.get('/cities', appendToList);

 function appendToList(cities) {
     console.log('start append')
        var list =[];
        var content, city;
        for(var i in cities) {
            city = cities[i];
            content = '<a href= "/cities/'+city+'">'+city+'</a>';
            list.push($('<li>', {html: content }));
        }
        console.log("append section");
        $('#cityList').append(list);
    }
    
// debugger
$('form').on("submit", function(event) {
    event.preventDefault();
    var form = $(this);
    // console.log(form);
    var cityInfo = form.serialize();
    console.log(cityInfo);
    
    $.ajax ({
        type: 'POST',
        url: '/cities', 
        data: cityInfo
        
    }).done(function(cityName) {
        
        console.log("inside ajax", cityName);
        appendToList([cityName]);
        form.trigger('reset');
        
    });
    // .fail(function(addedCity) {
    //     console.log('failed');
    
    // });
});

//   function appendToList(cities) {
//         var list =[];
//         var content, city;
//         for(var i in cities) {
//             city = cities[i];
//             content = '<a href= "/cities/'+city+'">'+city+'</a>';
//             list.push($('<option>', {html: content }));
//         }
//         $('#optionTags').append(list);
//     };



});
