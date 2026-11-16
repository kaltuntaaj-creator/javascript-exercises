function calculateArea(width = 10, height = 5) {
    return width * height;
}

console.log(calculateArea(5, 4)); // Output: 20 (uses provided arguments)
console.log(calculateArea());    // Output: 50 (uses default values 10 * 5)