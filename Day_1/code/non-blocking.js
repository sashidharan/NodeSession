const fs = require("fs");

console.log("Start");
fs.readFile("./file.md", (err, data) => {
  if (err) throw err;
  console.log("File read completed");
});
console.log("Done");
