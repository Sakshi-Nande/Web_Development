const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const googleSignInBtn = document.getElementById('googleSignIn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  if (!email || !password) {
    loginMessage.textContent = 'Please enter both email and password.';
    loginMessage.className = 'mt-4 p-3 rounded-lg text-center bg-red-100 text-red-700';
    loginMessage.classList.remove('hidden');
    return;
  }

  loginMessage.textContent = 'Login successful! Redirecting...';
  loginMessage.className = 'mt-4 p-3 rounded-lg text-center bg-green-100 text-green-700';
  loginMessage.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'mentor-dashboard.html';
  }, 1500);
});

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const isDarkMode = document.body.classList.contains('dark');
  themeIcon.classList.toggle('fa-moon', !isDarkMode);
  themeIcon.classList.toggle('fa-sun', isDarkMode);
});

function handleCredentialResponse(response) {
  const responsePayload = parseJwt(response.credential);
  loginMessage.textContent = `Google Sign-In successful! Welcome, ${responsePayload.name}`;
  loginMessage.className = 'mt-4 p-3 rounded-lg text-center bg-green-100 text-green-700';
  loginMessage.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'mentor-dashboard.html';
  }, 1500);
}

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID',
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(googleSignInBtn, {
    theme: 'outline',
    size: 'large',
    width: '100%',
  });
  google.accounts.id.prompt();
};
