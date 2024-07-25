import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const myLocations = [{
    name: 'WBS CODING SCHOOL',
    location: [52.457131, 13.54007],
    description: 'The best coding school in the world'
  },
  {
    name: 'Alexanderplatz',
    location: [52.521918, 13.413215],
    description: 'The most famous square in Berlin'
  },
  {
    name: 'Brandenburg Gate',
    location: [52.516275, 13.377704],
    description: 'The most famous gate in Berlin'
  },
  {
    name: 'Berlin Wall',
    location: [52.507541, 13.39032],
    description: 'The most famous wall in Berlin'
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
