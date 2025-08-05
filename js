
document.getElementById('contactForm').addEventListener('submit', function (e) {
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (message.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  if (!valid) e.preventDefault();
});
