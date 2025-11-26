import getRestaurants from "./restaurants.js";

// Open dialog on button click
loginRegisterButton.addEventListener("click", () => {
  loginDialog.showModal();
});

registerButton.addEventListener("click", () => {
  loginDialog.close();
  registerDialog.showModal();
});

loginButton.addEventListener("click", () => {
  registerDialog.close();
  loginDialog.showModal();
});

const restaurants = getRestaurants();

// Render restaurants
const listEl = document.getElementById("restaurantList");
restaurants.forEach((r) => {
  const item = document.createElement("div");
  item.className = "restaurant";
  item.textContent = r.name;
  // Show restaurant on map
  item.addEventListener("click", () => {
    map.setView([r.lat, r.lng], 14);
    if (r._marker) r._marker.openPopup();
  });
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
