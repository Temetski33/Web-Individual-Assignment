import {getDailyMenu} from './api/dailyMenu.js';
import {getWeeklyMenu} from './api/weeklyMenu.js';

const renderRestaurants = (map, restaurants) => {
  const listEl = document.getElementById('restaurantList');
  listEl.innerHTML = '';

  restaurants.forEach((r) => {
    const details = document.createElement('details');
    details.className = 'restaurant';

    const summary = document.createElement('summary');
    summary.textContent = r.name + ' (' + r.company + ')';

    const restaurantId = r._id;

    const menu = document.createElement('div');
    menu.className = 'menu';

    // Button to switch menus
    const switcher = document.createElement('div');
    switcher.className = 'menu-switch';

    const dailyBtn = document.createElement('button');
    dailyBtn.type = 'button';
    dailyBtn.textContent = 'Daily';
    dailyBtn.className = 'active';

    const weeklyBtn = document.createElement('button');
    weeklyBtn.type = 'button';
    weeklyBtn.textContent = 'Weekly';

    switcher.appendChild(dailyBtn);
    switcher.appendChild(weeklyBtn);

    // Create two placeholder menu lists
    const dailyList = document.createElement('ul');
    dailyList.className = 'menu-list menu-list--daily active';

    const weeklyList = document.createElement('ul');
    weeklyList.className = 'menu-list menu-list--weekly';

    // Helper to switch visible menu
    const showMenu = (which) => {
      if (which === 'daily') {
        dailyList.classList.add('active');
        weeklyList.classList.remove('active');
        dailyBtn.classList.add('active');
        weeklyBtn.classList.remove('active');
      } else {
        dailyList.classList.remove('active');
        weeklyList.classList.add('active');
        dailyBtn.classList.remove('active');
        weeklyBtn.classList.add('active');
      }
    };

    dailyBtn.addEventListener('click', () => showMenu('daily'));
    weeklyBtn.addEventListener('click', () => showMenu('weekly'));

    // Center map on restaurant and load daily menu
    details.addEventListener('toggle', async () => {
      if (!details.open) return;

      // Close other open menus
      document.querySelectorAll('.restaurant').forEach((d) => {
        if (d !== details && d.open) d.open = false;
      });

      showMenu('daily');

      // Center map on this restaurant
      if (map && typeof map.setView === 'function') {
        map.setView([r.location.coordinates[1], r.location.coordinates[0]], 14);
      }
      // Open popup
      if (r._marker && typeof r._marker.openPopup === 'function') {
        r._marker.openPopup();
      }

      // Add data to daily menu
      try {
        const dailyMenuData = await getDailyMenu(restaurantId);
        // Clear old items and add fetched menu items
        dailyList.innerHTML = '';

        // Access list item from menu data
        const courses = dailyMenuData?.courses || [];

        if (courses.length > 0) {
          courses.forEach((item) => {
            const li = document.createElement('li');
            let priceText = item.price;
            if (!item.price) {
              priceText = '';
            }
            li.innerHTML = `${item.name}<br><small>(${item.diets}) ${priceText}</small>`;
            dailyList.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'No menu available';
          dailyList.appendChild(li);
        }
      } catch (err) {
        console.error('Failed to load daily menu:', err);
        dailyList.innerHTML = '<li>Error loading menu</li>';
      }

      // Add data to weekly menu
      try {
        const weeklyMenuData = await getWeeklyMenu(restaurantId);
        // Clear old items and add fetched menu items
        weeklyList.innerHTML = '';

        // Access list item from menu data
        const days = weeklyMenuData?.days || [];

        if (days.length > 0) {
          days.forEach((day) => {
            // Add day heading once
            const dayHeading = document.createElement('li');
            dayHeading.innerHTML = `<strong>${day.date}</strong>`;
            dayHeading.style.listStyle = 'none';
            dayHeading.style.marginTop = '0.5rem';
            weeklyList.appendChild(dayHeading);

            const courses = day.courses || [];
            if (courses.length === 0) {
              const li = document.createElement('li');
              li.innerHTML = `<small>No courses available</small>`;
              weeklyList.appendChild(li);
              return;
            }
            // Loop over courses array for each day
            courses.forEach((course) => {
              const li = document.createElement('li');
              let priceText = course.price || '';
              li.innerHTML = `${course.name}<br><small>(${course.diets}) ${priceText}</small>`;
              weeklyList.appendChild(li);
            });
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'No menu available';
          weeklyList.appendChild(li);
        }
      } catch (err) {
        console.error('Failed to load daily menu:', err);
        weeklyList.innerHTML = '<li>Error loading menu</li>';
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

export {renderRestaurants};
