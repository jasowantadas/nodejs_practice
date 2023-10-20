const { readFileSync, writeFileSync } = require("fs");

//syncronous way
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
console.log(first, second);

writeFileSync(
  "./content/result_sync.txt",
  `here is the results : ${first} , ${second}`,
  { flag: "a" } //to append the file and manny more flags available
);
