const os = require("os");

//info about current user
console.log(os.userInfo());

//uptime in seconds
console.log(`Minutes: ${os.uptime() / 60} min`);

//system stats
const CurrentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(CurrentOS);
