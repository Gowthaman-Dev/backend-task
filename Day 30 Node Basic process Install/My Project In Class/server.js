import http from 'http'

// console.log(http);

// const a = 10
// const b = 20

// const c  = a+b

// console.log(c);

const app = http.createServer()

const PORT  = 5000

app.listen(PORT,()=>{
    console.log(`this is a Gowtham Server http://localhost:${PORT}`);
    
})