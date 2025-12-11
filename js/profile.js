const showProfileButton = () => {
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const profileDialog = document.getElementById('profileDialog');
  const loggedUserEl = document.getElementById('loggedUser');
  const username = localStorage.getItem('username') || '';

  if (!loginRegisterButton) return;

  // Hide login/register button
  loginRegisterButton.style.display = 'none';

  // Create profile button
  const profileButton = document.createElement('div');
  profileButton.id = 'profileButton';
  profileButton.className = 'item';
  profileButton.textContent = 'Profile/Logout';
  profileButton.style.cursor = 'pointer';

  // Set logged user as text
  if (loggedUserEl) loggedUserEl.textContent = 'Logged in as ' + username;

  // Open profile dialog on click
  profileButton.addEventListener('click', () => {
    profileDialog.showModal();
  });

  // Insert profile button after the login button
  loginRegisterButton.parentNode.appendChild(profileButton);
};

const hideProfileButton = () => {
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const profileButton = document.getElementById('profileButton');
  const loggedUserEl = document.getElementById('loggedUser');

  // Show login button again
  if (loginRegisterButton) {
    loginRegisterButton.style.display = '';
  }

  // Remove profile button
  if (profileButton) {
    profileButton.remove();
  }
  // clear logged user text
  if (loggedUserEl) loggedUserEl.textContent = '';
};

export {showProfileButton, hideProfileButton};
