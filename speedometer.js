// Getting HTML elements
const speedElement = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let watchID = null; // Variable to store the watch ID

// Function to handle successful position retrieval
function handleSuccess(position) {
    addPosition(currentRide, position);
    speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1) : 0;
}

// Function to handle errors
function handleError(error) {
    console.log(error.message); // Fix: Use 'message' instead of 'mgs'
}

// Options for geolocation
const options = { enableHighAccuracy: true };

// Event listener for the start button
startBtn.addEventListener("click", () => {
    startBtn.classList.add("d-none");
    stopBtn.classList.remove("d-none");

    // Start watching position
    watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
});

// Event listener for the stop button
stopBtn.addEventListener("click", () => {
    // Check if watchID has a value
    if (!watchID) return;

    stopBtn.classList.add("d-none");
    startBtn.classList.remove("d-none");

    // Stop watching position
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
});
