// Get the counter element
const counterElement = document.getElementById('counter');

// Get the buttons
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize the counter value
let counter = 0;

// Function to update the counter element with the current counter value
function updateCounter() {
    counterElement.textContent = counter;
}

// Function to increment the counter by 1
function incrementCounter() {
    counter++;
    updateCounter();
}

// Function to decrement the counter by 1
function decrementCounter() {
    counter--;
    updateCounter();
}

// Function to reset the counter to 0
function resetCounter() {
    counter = 0;
    updateCounter();
}

// Add event listeners to the buttons
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);

// Initial update of the counter element
updateCounter();