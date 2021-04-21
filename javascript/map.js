// Map js

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const PtBase = {
        lat: 53.40825,
        lng: -2.99275
    };
    // The map, centered at PtBase
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: PtBase,
    });
    // The marker, positioned at PtBase
    const marker = new google.maps.Marker({
        position: PtBase,
        map: map,
    });
}