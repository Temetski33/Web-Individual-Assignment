const setupDialogEvents = () => {
  // Open dialog on button click
  loginRegisterButton.addEventListener("click", () => {
    loginDialog.showModal();
  });

  registerButton.addEventListener("click", () => {
    loginDialog.close();
    registerDialog.showModal();
  });

  loginButton.addEventListener("click", () => {
    registerDialog.close();
    loginDialog.showModal();
  });
};

export { setupDialogEvents };
