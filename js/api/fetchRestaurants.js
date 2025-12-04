const fetchRestaurants = async () => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
    );
    const restaurants = await resp.json();
    return restaurants;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {fetchRestaurants};
