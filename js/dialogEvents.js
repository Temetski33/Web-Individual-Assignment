import {postLogin} from './api/login.js';
import {showProfileButton, hideProfileButton} from './profile.js';

const setupDialogEvents = () => {
  const loginDialog = document.getElementById('loginDialog');
  const registerDialog = document.getElementById('registerDialog');
  const profileDialog = document.getElementById('profileDialog');
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const registerButton = document.getElementById('registerButton');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const submitLogin = document.getElementById('submitLogin');

  // Open dialog on button click
  loginRegisterButton.addEventListener('click', () => {
    loginDialog.showModal();
  });

  registerButton.addEventListener('click', () => {
    loginDialog.close();
    registerDialog.showModal();
  });

  loginButton.addEventListener('click', () => {
    registerDialog.close();
    loginDialog.showModal();
  });

  logoutButton.addEventListener('click', () => {
    profileDialog.close();
    hideProfileButton();
  });

  // Handle login submit
  submitLogin.addEventListener('click', async (e) => {
    e.preventDefault(); // prevent form submission

    // Get input values from the form
    const username = loginDialog.querySelector('input[name="username"]').value;
    const password = loginDialog.querySelector('input[name="password"]').value;

    // Call postLogin with username and password
    try {
      const result = await postLogin(username, password);
      console.log('Login result:', result.message);
      if (result.message == 'Login successful') {
        localStorage.setItem('username', result.data.username);
        showProfileButton();
        loginDialog.close();
      } else {
        alert('Login failed! Make sure your password is correct.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      alert('Server error, try again later.');
    }
  });
};

export {setupDialogEvents};
