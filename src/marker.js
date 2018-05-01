const mapboxgl = require('mapbox-gl');
const map = require('./index');

let buildMarker = function(type, coord) {

  // let newdom = document.createElement("P");
  // new mapboxgl.Marker(newdom).setLngLat([-74.009151, 40.705086]).addTo(map);

  let newdom = document.createElement("P");
  newdom.className = 'marker';
  newdom.style.width = "32px";
  newdom.style.height = "39px";

  if (type==='hotel') {
    newdom.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png/)';
  } else if (type==='restaurant') {
    newdom.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  } else if (type==='activity') {
    newdom.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }
  return new mapboxgl.Marker(newdom).setLngLat(coord);
}

module.exports = buildMarker;
