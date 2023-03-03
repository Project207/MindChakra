const signInButton = document.querySelector('.sign-in');
const fullNameInput = document.querySelector('.rectangle6');
const ageInput = document.querySelector('.rectangle7');
const genderSelect = document.querySelector('.rectangle8');
const passwordInput = document.querySelector('.rectangle9');

signInButton.addEventListener('click', () => {
  // hide the unnecessary input fields
  ageInput.style.display = 'none';
  genderSelect.style.display = 'none';
  passwordInput.style.display = 'none';
});
