// Timer functionality
const timer = document.querySelector(".timer");
let seconds = sessionStorage.getItem("timer") || 0; // Retrieve previous timer value from sessionStorage or set to 0
let intervalId;
function autoClickButton() {
  document.getElementById("myButton").click();
}

// function redirectToPage() {
//   window.open("./guide.pdf", "_blank");
// }

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    const time = new Date(1000 * seconds).toISOString().substr(11, 8);
    timer.textContent = time;
    sessionStorage.setItem("timer", seconds); // Store updated timer value in sessionStorage
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  localStorage.setItem("timer", seconds); // Store updated timer value in sessionStorage
}

function checkSquare() {
  // Get all input values
  var r1c1 = Number(document.getElementsByName("r1c1")[0].value);
  var r1c2 = Number(document.getElementsByName("r1c2")[0].value);
  var r1c3 = Number(document.getElementsByName("r1c3")[0].value);
  var r2c1 = Number(document.getElementsByName("r2c1")[0].value);

  // Check if all sums are equal to 15
  if (r1c1 === 8 && r1c2 === 2 && r1c3 === 9 && r2c1 === 6) {
    alert("Congratulations! You have unlocked the Treasure Box!");
    stopTimer();
    window.location.href = "score.html";
  } else {
    alert("Sorry, that is not the correct password.");
  }

  // Reset the form
  document.getElementById("magic-square-form").reset();
}

function goBack() {
  window.location.href = "treasurebox.html";
}
function goBack2() {
  window.history.back();
}

startTimer(); // Start the timer when the page loads
