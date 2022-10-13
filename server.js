const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const JobRoute = require('./routes/Jobroutes');
const cors = require('cors');

const app = express()
dotenv.config()


// const Router = express.Router();

mongoose.connect(process.env.URI)
.then(() => console.log('connected to the database'));


app.use(cors())
app.use(express.json())
app.use('/api/jobs',JobRoute);


// app.use('/',(req,res)=> {
//     res.send('you are not visiting this port');
// })





const PORT = 5000;




app.listen(PORT,() => {
    console.log(`listening on  number ${PORT} number`)
})