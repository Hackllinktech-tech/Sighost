document.getElementById('email').addEventListener('input', function () {
  let email = this.value;
  const emailMessageElement = document.getElementById('email-message');
  if (email.length > 0 && validateEmailFormat(email)) {
    fetch('/signup/check_availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.emailExists) {
        emailMessageElement.textContent = 'This email exists!';
        isEmailAvailable = false;
      } else {
        emailMessageElement.textContent = '';
        isEmailAvailable = true;
      }
    });
  } else {
    emailMessageElement.textContent = '';
    isEmailAvailable = false;
  }
});

document.getElementById('username').addEventListener('input', function () {
  let username = this.value;
  const usernameMessageElement = document.getElementById('username-message');
  if (!validateUsernameFormat(username)) {
    usernameMessageElement.textContent = 'Username can only contain letters, numbers, and underscores!';
    isUsernameAvailable = false;
    return;
  }
  if (username.length > 0) {
    fetch('/signup/check_availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    })
    .then(response => response.json())
    .then(data => {
      if (data.usernameExists) {
        usernameMessageElement.textContent = 'This username exists!';
        isUsernameAvailable = false;
      } else {
        usernameMessageElement.textContent = '';
        isUsernameAvailable = true;
      }
    });
  } else {
    usernameMessageElement.textContent = '';
    isUsernameAvailable = false;
  }
});
