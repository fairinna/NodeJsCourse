const os = require('os');
//info about current user

const user = os.userInfo();
const cpus = os.cpus();
//console.log(cpus);

//metod returns the system uptime in seconds
//console.log(`The system Uptime is ${os.uptime() / 60 / 60 / 24} days`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
