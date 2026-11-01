const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "Builderland" },
  { name: "Charlie", age: 35, city: "Chocolate Factory" }
];

// Iteration over array & object properties
for (const person of people) {
  console.log("Properties and values of each person:");
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  console.log("---");
}