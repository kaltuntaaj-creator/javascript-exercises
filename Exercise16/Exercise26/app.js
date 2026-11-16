// 1. Blocking Example (Simulating a delay using synchronous logic / loops)
function delayBlocking() {
  const start = Date.now();
  // Loop for 2 seconds (blocks the main thread)
  while (Date.now() - start < 2000) {
    // doing nothing, just waiting
  }
  console.log("Blocking function finished after 2 seconds.");
}

console.log("Start blocking task...");
delayBlocking();
console.log("This logs AFTER the blocking function completes.");


// 2. Non-Blocking Example (Using setTimeout)
function delayNonBlocking(callback) {
  setTimeout(() => {
    console.log("Non-blocking function finished after 2 seconds.");
    if (callback) callback();
  }, 2000);
}

console.log("Start non-blocking task...");
delayNonBlocking(() => {
  console.log("Callback executed!");
});
console.log("This logs IMMEDIATELY while the non-blocking task runs in the background.");