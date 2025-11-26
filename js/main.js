import { getRestaurants } from "./restaurants.js";
import { renderRestaurants } from "./restaurants.js";
import { getMap } from "./map.js";
import { addTiles } from "./map.js";
import { addMarkers } from "./map.js";

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

// This can be removed later when not needed
const restaurants = getRestaurants();
const map = getMap();

renderRestaurants(map);
addTiles();
addMarkers(restaurants);
