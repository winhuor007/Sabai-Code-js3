const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data);
  });
}

// readFile("input.txt", console.log);
module.exports = readFile;
