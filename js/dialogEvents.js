import {postLogin} from './api/login.js';

const setupDialogEvents = () => {
  const loginDialog = document.getElementById('loginDialog');
  const registerDialog = document.getElementById('registerDialog');
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const registerButton = document.getElementById('registerButton');
  const loginButton = document.getElementById('loginButton');
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
      if (result.message) {
        console.log("kakka")
      }
      loginDialog.close();
      // Handle successful login (e.g. store token, redirect, etc)
    } catch (err) {
      console.error('Login failed:', err);
    }
  });
};

export {setupDialogEvents};
