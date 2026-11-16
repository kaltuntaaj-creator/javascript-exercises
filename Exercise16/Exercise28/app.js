async function displayUserData() {
  try {
  
    const data = await fetchUserData();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 2. Call the async function
displayUserData();

console.log("This message runs immediately and is not blocked.");