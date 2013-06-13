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

    var boxText = document.createElement("div");
    boxText.style.cssText = "border: 1px solid blakc; margin-top: 5px; background: tomato; padding: 5px";
    boxText.innerHTML = "<p>This is a test...</p>";

    var customOptions = {
        content: boxText,
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
            background: "red",
            opacity: 0.75,
            width: "280px"
        },
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };

    google.maps.event.addListener(marker, "click", function() {
        ib.open(map, this)
    });

    var ib = new InfoBox(customOptions);
};

google.maps.event.addDomListener(window, 'load', initialize);