// Select HTML elements to display countdown
const daysElement = document.getElementById('days'); // Days element
const hoursElement = document.getElementById('hours'); // Hours element
const minutesElement = document.getElementById('minutes'); // Minutes element
const secondsElement = document.getElementById('seconds'); // Seconds element
const buttonsElement = document.getElementById('button'); // Button element

// Prompt user for launch date in YYYY-MM-DDTHH:MM:SS format
const launchDateInput = prompt('Enter launch date (YYYY-MMTHH:MM:SS):');

// Convert user input to Date object
const launchDate = new Date(launchDateInput);

// Validate launch date
if (isNaN(launchDate.getTime())) { 
  // Check if date is invalid (NaN = Not a Number)
  alert('Invalid date format. Please use YYYY-MMTHH:MM:SS.');
} else if (launchDate <= new Date()) { 
  // Check if launch date is in the past or present
  alert('Launch date must be in the future.');
} else {
  // Define countdown function
  function countdown() {
    // Get current date and time
    const now = new Date();
    
    // Calculate difference between launch date and current date
    const difference = launchDate - now;

    // Check if launch date has been reached
    if (difference <= 0) { 
      // Hide countdown container if launch date reached
      document.querySelector('.countdown-container').style.display = 'none';
      return; // Exit function
    }

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor((difference / 1000 / 60 / 60)%24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Update HTML elements with countdown values
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }

  // Call countdown function initially
  countdown();

  // Call countdown function every 1000ms (1 second)
  setInterval(countdown, 1000);
}

// Define button click event handler
// function buttonClick(){
  // Add event listener to button element
  // buttonsElement.addEventListener('click', buttonClick);
  
  // Recursive call (not necessary, remove this line)
  // buttonClick();
// }

