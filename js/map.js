// Initialize map
const map = L.map('map').setView([60.1699, 24.9384], 14);

const getMap = () => {
  return map;
};

// Add openstreemap tiles
const addTiles = () => {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);
};

// Add restaurant markers
const addMarkers = (restaurants) => {
  restaurants.forEach((r) => {
    const popupText = r.name + ' (' + r.company + ')';
    r._marker = L.marker([r.location.coordinates[1], r.location.coordinates[0]])
      .addTo(map)
      .bindPopup(popupText);
  });
};

export {getMap, addTiles, addMarkers};
