var map = L.map('map').setView([-34.6037, -58.3816], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([-34.6037, -58.3816]).addTo(map)
marker.bindPopup("Hola! Soy un popup 😄")

var marker1 = L.marker([-37.321823869219806, -59.13110738934614]).addTo(map)
marker1.bindPopup("Plaza de las carretas")

var marker2 = L.marker([-37.328624144157516, -59.136935173456976]).addTo(map)
marker2.bindPopup("Plaza Independencia")

var marker3 = L.marker([-37.32761825314754, -59.15236740327897]).addTo(map)
marker3.bindPopup("Monte Calvario")

var markerG = L.featureGroup().addTo(map)

var markerC

var dibujo = L.featureGroup().addTo(map)

let puntos = [];

map.on('click', function(e) {
    if (markerC != null) {
        markerG.clearLayers()
        markerC = null;
    }

    markerC = L.marker([e.latlng.lat, e.latlng.lng]).addTo(markerG)
    markerC.bindPopup(e.latlng.lat + ", " + e.latlng.lng)

    puntos.push([e.latlng.lat, e.latlng.lng]);

    if (puntos.length === 5) {
        L.polyline(puntos, { color: 'blue' }).addTo(dibujo)
    }
})
