import { log } from 'console';
import fs from 'fs'

// console.log(fs);

fs.writeFile("createFile.txt","This is a Gowtham Monisha I Love You",(err)=>{
    if(err){
        console.log('this is a error file');
        return
    }
    console.log("file is created");
    
})


fs.readFile("createFile.txt","utf-8",(err,data)=>{
    if(err){
        console.log(`This File Read Is Failed`);
        
    }
    console.log(data);
    
})


fs.appendFile("createFile.txt","This is My Chellam",(err,data)=>{
    if(err){
        console.log('this update is failed');
        
    }
    console.log('this update is success');
    
})

fs.unlink("createFile.txt",(err)=>{
    if(err){
        console.log("This file is not deleted");
    }
    console.log("succesfully delete");
    
})


