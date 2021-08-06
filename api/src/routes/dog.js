
const express = require('express')
const axios = require('axios')
const router = express.Router()
const { uuid } = require('uuidv4');
const {Dog} = require('../db');
router.post('/', async(req,res,next)=>{
    try{
        const {name, weight, height, age_span} = req.body
        const createdDog = await Dog.create({
            id:uuid(),
            name,
            height,
            weight,
            age_span
        })
        res.json(createdDog)
        }
        catch(err){
            next(err)
        }
    

})
router.get('/', async(req,res,next)=>{
    try{
        dogsCreated = await Dog.findAll()
        res.json(dogsCreated)
        }
        catch(err){
            next(err)
        }
    

})

module.exports = router;