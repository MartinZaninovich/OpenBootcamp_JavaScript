// Initialize and add the map
function initMap() {
    // The location of San Francisco
    const sanFrancisco = { lat: 37.774, lng: -122.419 };
    // The location of New York
    const newYork = { lat: 40.714, lng: -74.005 };
    // The location of Chicago
    const chicago = { lat: 41.85, lng: -87.65 };


    // The map, centered at
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: chicago,
    });


    // The marker, positioned at San Francisco
    const marker = new google.maps.Marker({
        position: sanFrancisco,
        map: map,
    });
    // The marker 2, positioned at New York
    const marker2 = new google.maps.Marker({
        position: newYork,
        map: map,
    });
    // The marker 3, positioned at Chicago
    const marker3 = new google.maps.Marker({
        position: chicago,
        map: map,
    });
}

window.initMap = initMap;
