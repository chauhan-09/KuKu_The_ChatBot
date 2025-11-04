// const express = require('express');
// const app = express();


// app.get('/',(req,res) => {
//     res.send('this is homepage');
// })

// app.get('/student', (req,res) => {
//     res.send('this is the student page');
// })

// app.listen(3000, () => {
//     console.log("Server is running");
// })


const http = require('http');
const server = http.createServer((req,res) =>{
    res.write('Server is running...\n');

    if(req.url === '/home') {
        res.write('this is the homepage');
    }
    else {
        res.write('sorry request cant be fullfilled');
    }

    res.end();   //this is mandotory in http to close the connection otherwise user will wait for endtime
});



server.listen(3002,()=>{
    console.log('Server Started');
})

