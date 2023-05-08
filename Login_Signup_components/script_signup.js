// Get the login and signup forms

const signupForm = document.querySelector("#signup-form");

// Add event listeners to the forms
signupForm.addEventListener("submit", handleSignup);

// Handle signup form submission
function handleSignup(event) {
  event.preventDefault();

  // Get the new username and password inputs
  const newUsernameInput = document.querySelector("#new-username");
  const newPasswordInput = document.querySelector("#new-password");

  // Check for admin
  if (newUsernameInput.value === "dishasatani@gmail.com") {
    document.getElementById("snackbar").innerText =
      "Username already taken. Please choose a different one.";
    myFunction();
    return;
  }

  // Check if the username is already taken
  const savedUserData = localStorage.getItem("user");

  if (savedUserData) {
    const userData = JSON.parse(savedUserData);
    if (newUsernameInput.value === userData.username) {
      // alert("Username already taken. Please choose a different one.");
      document.getElementById("snackbar").innerText =
        "Username already taken. Please choose a different one.";
      myFunction();
      return;
    }
  }

  // Save the new user data to local storage
  const newUser = {
    username: newUsernameInput.value,
    password: newPasswordInput.value,
  };
  localStorage.setItem("user", JSON.stringify(newUser));

  // alert("Sign up successful!");
  document.getElementById("snackbar").innerText =
    "Sign up successful! Redirecting to Room...";
  myFunction();

  // Redirect to the home page or do something else
  setTimeout(() => {
    window.location.href = "https://dishasatani.github.io/Escape-Room/Home%20Page/Home.html";
  }, 3000);
}

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
