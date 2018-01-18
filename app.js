console.log('Connected')
console.log(navigator.geolocation.getCurrentPosition(
    function(position){
        return position.coords
    }
));

var lat = '33.7763931';
var long = '-84.38837740000001'

var WGobj = 
    {
        "apiKey": "4n8VgBaIAcwfqcxWAQSreiniwZAGXltd",
        "affId": "storesapi",
        "lat": lat,
        "lng": long,
        "requestType": "locator",
        "act": "fndStore",
        "view": "fndStoreJSON",
    }


function WGAPI(){

    $.ajax({
        type: "POST",
        url: "https://services-qa.walgreens.com/api/stores/search",
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify(WGobj),
    }).done(function(response){
        console.log(response)
    })
}