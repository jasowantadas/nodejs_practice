const path = require("path");

//know the path seperator
console.log(path.sep);

//path join method
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

//basename(base file name) of a path
console.log(path.basename(filePath));

//resolve method returns an an absolte path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
