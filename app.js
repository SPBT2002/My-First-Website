const menu = document.querySelector(".menu");
const pizza = document.querySelector(".pizza_list");
const login = document.querySelector(".login");

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;


          if (username === 'user' && password === 'password') {
              alert('Login successful!');

          } else {
              alert('Invalid username or password.');
          }
      });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const newUsername = document.getElementById('newUsername').value;
          const newPassword = document.getElementById('newPassword').value;
          const confirmPassword = document.getElementById('confirmPassword').value;


          if (newPassword !== confirmPassword) {
              alert('Passwords do not match.');
          } else {
              alert('Sign up successful!');

          }
      });
  }
});


document.addEventListener("click", (e) => {
  if (e.target.matches(".btn_menu")) {
    menu.classList.toggle("menu--show");
    pizza.classList.remove("pizza_list--show");
    login.classList.remove("login--show");
  }
  if (e.target.matches(".btn_pizza")) {
    pizza.classList.toggle("pizza_list--show");
    menu.classList.remove("menu--show");
    login.classList.remove("login--show");
  }

  if (e.target.matches(".btn_login")) {
    login.classList.toggle("login--show");
    pizza.classList.remove("pizza_list--show");
    menu.classList.remove("menu--show");
  }
});
