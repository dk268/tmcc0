const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

console.log("index.js file here");

mapboxgl.accessToken = "pk.eyJ1IjoicHRlcnJ5bCIsImEiOiJjamdvNG9vdWExYmdlMnhybTk0bXkwODFwIn0.AbUpojBeB3WzX6j9dwQpCQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// let newdom = document.createElement("P");
// new mapboxgl.Marker(newdom).setLngLat([-74.009151, 40.705086]).addTo(map);

marker('hotel', [-74.009151, 40.715086]).addTo(map);
marker('restaurant', [-74.009151, 40.725086]).addTo(map);
marker('activity', [-74.009151, 40.745086]).addTo(map);

module.exports = map;


// const mapboxgl = require("mapbox-gl");
// const marker = require('./marker');

// mapboxgl.accessToken = "pk.eyJ1IjoicHRlcnJ5bCIsImEiOiJjamdvNG9vdWExYmdlMnhybTk0bXkwODFwIn0.AbUpojBeB3WzX6j9dwQpCQ";
// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
// });

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
