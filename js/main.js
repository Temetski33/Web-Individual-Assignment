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
  { name: "Studencafe Jyväskylä 1", lat: 62.245, lng: 25.74 },
  { name: "Studencafe Jyväskylä 2", lat: 62.245, lng: 25.745 },
  { name: "Studencafe Jyväskylä 3", lat: 62.245, lng: 25.75 },
  { name: "Studencafe Jyväskylä 4", lat: 62.245, lng: 25.755 },
  { name: "Studencafe Jyväskylä 5", lat: 62.245, lng: 25.76 },
];

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
