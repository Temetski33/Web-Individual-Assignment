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
    map.setCenter({ lat: r.lat, lng: r.lng });
  };
  listEl.appendChild(item);
});


