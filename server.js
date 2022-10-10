const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express()


const Router = express.Router();

 mongoose.connect(process.env.MONGOOSE_URL,{useNewUrlParser:true,useCreateIndex:true},()=>{
   console.log('user connected to the db');
})


app.use('/',(req,res)=> {
    res.send('you are not visiting this port');
})





const PORT = 5000;




app.listen(PORT,() => {
    console.log(`listening on  number ${PORT} number`)
})