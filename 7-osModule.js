
let os = require("os")   //built-in module

// get user info
let userInfo = os.userInfo()
// console.log(userInfo);

//get system uptime (i.e, how long the system has been running)
// console.log(os.uptime());

let curr = {
    name: os.platform(),
    release: os.release(),
    version: os.version(),
    freeMem: os.freemem(),
    totMem: os.totalmem()
    
}

// console.log(curr);