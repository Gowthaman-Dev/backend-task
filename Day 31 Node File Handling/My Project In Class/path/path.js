import path from 'path'

console.log(path);

//join 
//path.join(path1,path2)

//absolute path
//path.resolve(path)

//Take the File Extension
//path.extname(filename)

//Take the Filename
//path.basename(filename)


const foldername = 'update/anotherfile'
const filename = 'server.js'

const filepath = path.join(foldername,filename)

console.log(filepath);


const absolutepath = path.resolve("server.js")

console.log("ini nammathan",absolutepath);
