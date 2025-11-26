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

const getRestaurants = () => {
  return restaurants;
};

const renderRestaurants = (map) => {
  const listEl = document.getElementById("restaurantList");
  listEl.innerHTML = "";

  restaurants.forEach((r) => {
    const details = document.createElement("details");
    details.className = "restaurant";

    const summary = document.createElement("summary");
    summary.textContent = r.name;

    const menu = document.createElement("div");
    menu.className = "menu";

    // Button to switch menus
    const switcher = document.createElement("div");
    switcher.className = "menu-switch";

    const dailyBtn = document.createElement("button");
    dailyBtn.type = "button";
    dailyBtn.textContent = "Daily";
    dailyBtn.className = "active";

    const weeklyBtn = document.createElement("button");
    weeklyBtn.type = "button";
    weeklyBtn.textContent = "Weekly";

    switcher.appendChild(dailyBtn);
    switcher.appendChild(weeklyBtn);

    // Create two placeholder menu lists
    const dailyList = document.createElement("ul");
    dailyList.className = "menu-list menu-list--daily active";
    ["Food 1", "Food 2", "Food 3", "Food 4"].forEach((food) => {
      const li = document.createElement("li");
      li.textContent = food;
      dailyList.appendChild(li);
    });

    const weeklyList = document.createElement("ul");
    weeklyList.className = "menu-list menu-list--weekly";
    ["Meal 1", "Meal 2", "Meal 3", "Meal 4"].forEach((food) => {
      const li = document.createElement("li");
      li.textContent = food;
      weeklyList.appendChild(li);
    });

    // Helper to switch visible menu
    const showMenu = (which) => {
      if (which === "daily") {
        dailyList.classList.add("active");
        weeklyList.classList.remove("active");
        dailyBtn.classList.add("active");
        weeklyBtn.classList.remove("active");
      } else {
        dailyList.classList.remove("active");
        weeklyList.classList.add("active");
        dailyBtn.classList.remove("active");
        weeklyBtn.classList.add("active");
      }
    };

    dailyBtn.addEventListener("click", () => showMenu("daily"));
    weeklyBtn.addEventListener("click", () => showMenu("weekly"));

    // Center map and open menu
    details.addEventListener("toggle", () => {
      if (!details.open) return;

      // Close other open menus
      document.querySelectorAll(".restaurant").forEach((d) => {
        if (d !== details && d.open) d.open = false;
      });

      showMenu("daily");

      // Center map on this restaurant
      if (map && typeof map.setView === "function") {
        map.setView([r.lat, r.lng], 14);
      }
      // Open popup
      if (r._marker && typeof r._marker.openPopup === "function") {
        r._marker.openPopup();
      }
    });

    menu.appendChild(switcher);
    menu.appendChild(dailyList);
    menu.appendChild(weeklyList);

    details.appendChild(summary);
    details.appendChild(menu);
    listEl.appendChild(details);
  });
};

export { getRestaurants, renderRestaurants };
