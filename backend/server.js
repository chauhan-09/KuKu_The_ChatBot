const express = require('express');
const app = express();

app.listen(3000,()=>{                          //no res or req parameters passed in listen method
    console.log('Server is runnning');         //req --> request object (contains data of incoming requests) 
})                                             //res --> response object (use to send data back to client)

app.get('/',(req,res)=> {
    res.send("This is the homepage");
})