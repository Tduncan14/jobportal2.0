const express = require('express');
const jobDB = require('../schema/Job');

const router = express.Router();




router.get('/getalljobs',  async (req,res)=> {


    try{
        const jobs = await jobDB.find()
        res.send(jobs)
    }

    catch(error){
        return res.status(400).json({error})
    }

 })