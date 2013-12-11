var map;
function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-33.896, 151.266),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);