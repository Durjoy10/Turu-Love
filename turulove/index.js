
const loginForm = document.getElementById("loginsec");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
 
  if (username === "admin" && password === "password") {
    alert("Login successful");

  } else {
    alert("Invalid username or password");
  }
  

  loginForm.reset();
});


const signupForm = document.getElementById("signupsec");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {

    alert("Signup successful");
    signupForm.reset();
  }
});
