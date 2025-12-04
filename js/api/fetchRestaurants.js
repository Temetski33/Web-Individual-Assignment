const fetchRestaurants = async () => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
    );
    const restaurants = await resp.json();
    console.log('first name:', restaurants[0]?.name);
    console.log('lat:', restaurants[0]?.location.coordinates[1]);
    console.log('lng:', restaurants[0]?.location.coordinates[0]);
    return restaurants;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {fetchRestaurants};
