const { readFile, writeFile } = require("fs");
//const { readFile, writeFile } = require("fs").promises; // then we can use it diretly fo rasync await
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/subfolder/first.txt")
//   .then((data) => console.log(data))
//   .catch((er) => console.log(er));

//Async /Await

const start = async () => {
  try {
    const first = await readFilePromise(
      "./content/subfolder/first.txt",
      "utf-8"
    );
    const second = await readFilePromise(
      "./content/subfolder/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "./content/result-promise.txt",
      `${first} ${second}`
    );
    console.log(first, second);
  } catch (er) {
    console.log(er);
  }
};
start();
