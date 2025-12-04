import {getRestaurants} from './restaurants.js';
import {renderRestaurants} from './restaurants.js';
import {getMap} from './map.js';
import {addTiles} from './map.js';
import {addMarkers} from './map.js';
import {setupDialogEvents} from './dialogEvents.js';

setupDialogEvents();

const restaurants = getRestaurants();
const map = getMap();

addTiles();
renderRestaurants(map);
addMarkers(restaurants);
