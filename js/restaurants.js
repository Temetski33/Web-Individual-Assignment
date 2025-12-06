import {fetchRestaurants} from './api/fetchRestaurants.js';

const restaurants = await fetchRestaurants();

const getRestaurants = () => {
  return restaurants;
};

export {getRestaurants};
