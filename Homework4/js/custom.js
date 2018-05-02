    window.onload = getLocation;

     navigator.geolocation.getCurrentPosition(function(position) {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude)
    }, function(e) {
        console.log(e)
    })

    /*
    Here we will check the browser supports the Geolocation API; if exists, then we will display the location
    */
    var geo = navigator.geolocation;

    function getLocation() {
        if (geo) {
            geo.getCurrentPosition(displayLocation);
        } else {
            alert("Oops, Geolocation API is not supported");
        }
    }

    /*
    This function displays the latitude and longitude when the browser has a location.
    */
    function displayLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var div = document.getElementById('location');
        div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

        displayMap(position.coords);
    }

    var map;

    function displayMap(coords) {
        var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

        var mapOptions = {
            zoom: 10,
            center: googleLatAndLong,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, mapOptions);

        var title = 'Your Location';
        var content = 'You are here: ' + coords.latitude + ', ' + coords.longitude;
        addMarker(map, googleLatAndLong, title, content);
    }

    /*
    This function takes a map, a google-stlye latitude and longitude, a title for the marker, and some content for the info window.
    */
    function addMarker(map, latlong, title, content) {
        var markerOptions = {
            position: latlong,
            map: map,
            title: title,
            clickable: true
        };

        var marker = new google.maps.Marker(markerOptions);

        var infoWindowOptions = {
            content: content,
            position: latlong
        };

        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map);
        });
    }



    var lat = localStorage.latitude;
    var lon = localStorage.longitude;
