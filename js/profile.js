const showProfileButton = () => {
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const profileDialog = document.getElementById('profileDialog');

  if (!loginRegisterButton) return;

  // Hide login/register button
  loginRegisterButton.style.display = 'none';

  // Create profile button
  const profileButton = document.createElement('div');
  profileButton.id = 'profileButton';
  profileButton.className = 'item';
  profileButton.textContent = 'Profile';
  profileButton.style.cursor = 'pointer';

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

  // Show login button again
  if (loginRegisterButton) {
    loginRegisterButton.style.display = '';
  }

  // Remove profile button
  if (profileButton) {
    profileButton.remove();
  }
};

export {showProfileButton, hideProfileButton};
