const mapboxgl = require('mapbox-gl');

console.log("index.js file here");

mapboxgl.accessToken = "pk.eyJ1IjoicHRlcnJ5bCIsImEiOiJjamdvNG9vdWExYmdlMnhybTk0bXkwODFwIn0.AbUpojBeB3WzX6j9dwQpCQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
