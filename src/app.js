import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const myLocations = [
  {
    name: 'Example Location 1',
    location: [51.505, -0.09],
    description: 'This is an example location'
  },
  {
    name: 'Example Location 2',
    location: [51.51, -0.1],
    description: 'This is another example location'
  }
];

const map = Leaflet.map('map').setView([51.505, -0.09], 13);

Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

myLocations.forEach(location => {
  Leaflet.marker(location.location)
    .addTo(map)
    .bindPopup(location.description);
});

const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);