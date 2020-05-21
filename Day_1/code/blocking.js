const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("./file.md"); // blocks here until file is read

console.log("Done");
 