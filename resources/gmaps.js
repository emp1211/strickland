// Initialize and add the map
function initMap() {
    // The location of fictional Arlen, TX
    const arlen = { lat: 29.841720774726667, lng: -95.2557901 }; 
    // The map, centered at Arlen
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: arlen,
    });
    // The marker, positioned at Arlen
    const marker = new google.maps.Marker({
      position: arlen,
      map: map,
    });
  }
  
  window.initMap = initMap;