var os = require("os");

console.log("OS Platform", os.platform());

console.log(os.cpus());

/*console.log("Total Memory", bytesToSize(os.totalmem()));

console.log("Used Memory", bytesToSize(os.freemem()));

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}*/
