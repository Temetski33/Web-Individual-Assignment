// Create login button
const headerContainer = document.querySelector(".container--header");
if (headerContainer) {
  const loginButton = document.createElement("div");
  loginButton.id = "loginButton";
  loginButton.className = "item";
  loginButton.textContent = "Login/Register";
  headerContainer.appendChild(loginButton);
}

// Example restaurants
const restaurants = [
  { name: "SODEXO Turbogood", lat: 60.1699, lng: 24.9384 },
  { name: "Unicafe Steissipaikka", lat: 60.17, lng: 24.94 },
  { name: "Sodexo At Home", lat: 60.171, lng: 24.935 },
  { name: "Sodexo Turku", lat: 60.4, lng: 22.24 },
  { name: "Unicafe Kiuruvesi", lat: 63.6, lng: 26.6 },
  { name: "Sodexo Jyväskylä 1", lat: 62.25, lng: 25.74 },
  { name: "Sodexo Jyväskylä 2", lat: 62.25, lng: 25.745 },
  { name: "Sodexo Jyväskylä 3", lat: 62.25, lng: 25.75 },
  { name: "Sodexo Jyväskylä 4", lat: 62.25, lng: 25.755 },
  { name: "Sodexo Jyväskylä 5", lat: 62.25, lng: 25.76 },
  { name: "Unicafe Rovaniemi", lat: 66.5, lng: 25.7 },
  { name: "Unicafe Rollo El Pollo", lat: 66.52, lng: 25.7 },
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
