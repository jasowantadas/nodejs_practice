const { readFile, writeFile } = require("fs");

//no need to use try catch block

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  try {
    const first = result;
    readFile("./content/subfolder/second.txt", "utf8", (er, resul) => {
      try {
        const second = resul;
        writeFile(
          "./content/result-Async.txt",
          `${first},${second}`,
          (error) => {
            if (error) console.log(error);
          }
        );
      } catch (er) {
        console.log(er);
      }
    });
  } catch (e) {
    console.log(e);
  }
});
