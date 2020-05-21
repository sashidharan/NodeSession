const fs = require("fs");

console.log("Start");

//fs.writeFileSync("file.txt", "Welcome to the session Day1");

fs.writeFile("file.txt", "Testing Async", err => {
  if (err) throw err;
  console.log("The file has been saved!");
});

console.log("Debug line 2");
