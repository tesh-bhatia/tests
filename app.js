console.log('Connected')
console.log(navigator.geolocation.getCurrentPosition(
    function(position){
        return position.coords
    }
));