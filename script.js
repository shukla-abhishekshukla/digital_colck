// Prompt the user for their name
let userName = prompt("Please enter your name:");

// If no name is provided, default to "Guest"
if (!userName) {
  userName = "Guest";
}

// Display a custom greeting message above the clock
document.getElementById('greeting').textContent = `Hello, ${userName}! Welcome to your "Me Time".`;

// Create an Audio object for the tick sound
const tickSound = new Audio('tick1.mp3');
// Optionally, preload the sound to reduce delay when playing
tickSound.preload = 'auto';

// Function to update the clock, date, and play tick sound
function updateClock() {
  const now = new Date();

  // Retrieve hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format numbers with leading zeros if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the time
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Display the full date in a friendly format
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString(undefined, options);
  document.getElementById('date').textContent = currentDate;

  // Play the tick sound every second
  // Reset the sound to start from the beginning if it's still playing
  tickSound.currentTime = 0;
  tickSound.play().catch(error => {
    // Handle the error if autoplay is blocked or any other issue occurs
    console.error("Audio play error:", error);
  });
}

// Update the clock every second
setInterval(updateClock, 1000);
// Call once to display immediately on page load
updateClock();
