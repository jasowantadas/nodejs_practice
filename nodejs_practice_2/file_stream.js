const { createReadStream } = require("fs");
const http = require("http");

const app = http.createServer((req, res) => {
  const fileStream = createReadStream("./content/big.txt", "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res); //inplace of res.end()
  });
  fileStream.on("error", (err) => {
    console.log(err);
  });
});
app.listen(5000);

/////////////////////////////////////////////////////////////////
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
}); //highWaterMarkis the size of the buffer

stream.on("data", (res) => {
  //data keyword matters we cant name it anything
  console.log(res);
});

stream.on("error", (err) => {
  console.log(err);
});
