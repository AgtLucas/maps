function initialize() {
    var qth = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        center: qth,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("maps"),
        myOptions);

    var marker = new google.maps.Marker({
        position: qth,
        map: map
    });
};

google.maps.event.addDomListener(window, 'load', initialize);