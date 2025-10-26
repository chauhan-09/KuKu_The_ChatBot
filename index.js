const express = require('express');
const app = express();

app.listen(3000,(req,res) => {
    // res.write("Sever is running:");
    console.log("server started:");
})

app.get('/',(req,res) => {
    res.send('This is the homepage');
})

app.get('/student', (req,res) => {
    res.send('this is the student page');
})

