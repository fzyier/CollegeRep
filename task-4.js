const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { elements } = event.target;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in.');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.target.reset();
});

