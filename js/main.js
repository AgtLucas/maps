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
    boxText.innerHTML = "<p class='wt'>This is a test...</p>";

    var customOptions = {
        content: boxText,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(30, -50),
        zIndex: null,
        boxClass: "foo",
        isHidden: false,
        closeBoxMargin: "10px 2px 2px 2px",
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        pane: "floatPane",
        enableEventPropagation: false
    };

    // google.maps.event.addListener(marker, "click", function() {
    //     ib.open(map, this)
    // });

    var ib = new InfoBox(customOptions);
    ib.open(map, marker);
};

google.maps.event.addDomListener(window, 'load', initialize);

$('.foo').hover(function() {
    $(this).hide();
});