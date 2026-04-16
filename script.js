var map = L.map('map').setView([-34.6037, -58.3816], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([-34.6037, -58.3816]).addTo(map)
marker.bindPopup("Hola! Soy un popup 😄")