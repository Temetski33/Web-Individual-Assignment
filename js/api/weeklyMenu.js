const getWeeklyMenu = async (id) => {
  try {
    const lang = 'en';
    const resp = await fetch(
      `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${id}/${lang}`
    );
    const menu = await resp.json();
    return menu;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {getWeeklyMenu};
