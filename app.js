console.log('Connected')
navigator.geolocation.getCurrentPosition(
    function(position){
        console.log(position.coords.latitude);
    }
)

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
        url: "https://cors-anywhere.herokuapp.com/https://services-qa.walgreens.com/api/stores/search",
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

function is_usZipCode(str)
{
	regexpZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
	
	if (regexpZip.test(str))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function is_cityState(str)
{
	regexpCityState = /([^,]+),\s*(\w{2})/;
	if (regexpCityState.test(str))
	{
		return true;
	}
	else
	{
		return false;
	}
}

console.log(is_cityState('Hello'));

console.log(is_cityState('Atlanta'));
console.log(is_cityState('GA'));
console.log(is_cityState('Atlanta,GA'));


console.log(is_cityState("Atlanta, GA"));