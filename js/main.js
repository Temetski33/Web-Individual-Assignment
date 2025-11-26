import getRestaurants from "./restaurants.js";

// create dialog element
const loginDialog = document.createElement("dialog");
loginDialog.id = "loginDialog";
loginDialog.innerHTML = `
    <form method="dialog" class="dialog-form" style="display:flex;flex-direction:column;gap:.5rem;">
      <h2>Login</h2>
      <label>Username<br><input name="username" /></label>
      <label>Password<br><input name="password" type="password" /></label>
      <div style="display:flex;gap:.5rem;justify-content:flex-end;">
        <button value="cancel">Cancel</button>
        <button id="submitLogin" value="default">Login</button>
      </div>
    </form>
  `;
document.body.appendChild(loginDialog);

// Open dialog on button click
loginButton.addEventListener("click", () => {
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
