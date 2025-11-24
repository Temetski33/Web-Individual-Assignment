// Example restaurants
const restaurants = [
  { name: "Pizza Pajatso", lat: 60.1699, lng: 24.9384 },
  { name: "Sushi Maailma", lat: 60.17, lng: 24.94 },
  { name: "Burgers of Burg", lat: 60.171, lng: 24.935 },
];

// Render restaurants
const listEl = document.getElementById("restaurantList");
restaurants.forEach((r) => {
  const item = document.createElement("div");
  item.className = "restaurant";
  item.textContent = r.name;
  item.onclick = () => {
    // Center map on restaurant
    map.setView([r.lat, r.lng], 15);
    if (r._marker) r._marker.openPopup();
  };
  listEl.appendChild(item);
});

// Initialize map
const map = L.map("map").setView([60.1699, 24.9384], 14);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add markers
restaurants.forEach((r) => {
  r._marker = L.marker([r.lat, r.lng]).addTo(map).bindPopup(r.name);
});
