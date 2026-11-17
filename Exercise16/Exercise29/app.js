async function fetchData() {
    console.log("Start fetching data...");

    const response = await fetch('data.json');
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Fetched Data:", data);
    console.log("Data fetching complete. This message runs after data is fetched.");
}

fetchData();
console.log("This message runs immediately and is not blocked.");