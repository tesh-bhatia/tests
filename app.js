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
        "srchOpt": '',
        "nxtPrev": '',
        "requestType": "locator",
        "act": "fndStore",
        "view": "fndStoreJSON",
        "devinf": '',
        "appver": '',
    }


function WGAPI(){

    $.ajax({
        type: "POST",
        url: "https://services-qa.walgreens.com/api/stores/search",
        headers: {
            "Access-Control-Allow-Origin": "x-requested-with",
        },
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify(WGobj),
    }).done(function(response){
        console.log(response)
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log('ERROR', errorThrown)
    })
}