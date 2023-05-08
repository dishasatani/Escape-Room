// Get the login and signup forms
const loginForm = document.querySelector("#login-form");
// const signupForm = document.querySelector("#signup-form");

// Add event listeners to the forms
loginForm.addEventListener("submit", handleLogin);
// signupForm.addEventListener("submit", handleSignup);

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}


// Handle login form submission
function handleLogin(event) {
  event.preventDefault();

  // Get the username and password inputs
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  // Get the saved user data from local storage
  const savedUserData = localStorage.getItem("user");

  if (usernameInput.value === "dishasatani@gmail.com" && passwordInput.value === "disha123") {
    // Redirect to the admin page
    window.location.href = '/Admin/admin.html';
  }

 else{
  if (savedUserData) {
    // Parse the saved user data into a JavaScript object
    const userData = JSON.parse(savedUserData);

    // Check if the username and password match the saved user data
    if (usernameInput.value === userData.username && passwordInput.value === userData.password) {
      
        // Redirect to the home page or do something else
        // console.log(window.location.pathname)
        window.location.href = '/Home%20Page/Home.html';
        //  alert("Login successful!");
    
    } else {
      // alert("Incorrect username or password.");
      document.getElementById("snackbar").innerText="Incorrect username or password.";
      myFunction();
    }
  } else {
    // alert("No saved user data found. Please sign up first.");
    document.getElementById("snackbar").innerText="No saved user data found. Please sign up first.";
      myFunction();
  }
 }
}
