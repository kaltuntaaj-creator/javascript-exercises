
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulating a 2-second delay using setTimeout
    setTimeout(() => {
      resolve("Success: Data fetched successfully!");
    }, 2000);
  });
}

// Handle the Promise using .then() to log the success message, and .catch() for errors
fetchUserData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });