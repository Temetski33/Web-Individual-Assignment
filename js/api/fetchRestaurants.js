const fetchRestaurants = async () => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
    );
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const restaurants = await resp.json();
    console.log('first name:', restaurants[0]?.name);
    return restaurants;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {fetchRestaurants};
