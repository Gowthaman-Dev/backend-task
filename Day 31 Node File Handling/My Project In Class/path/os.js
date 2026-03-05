import os from 'os'

const platform = os.platform()
console.log(platform);

const arch = os.arch()
console.log(arch);

const totalmem = os.totalmem()
console.log(totalmem);

const userinfo = os.userInfo()
console.log(userinfo);