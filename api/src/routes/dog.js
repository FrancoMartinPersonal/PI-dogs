
const express = require('express')
const axios = require('axios')
const router = express.Router()
const { uuid } = require('uuidv4');
const {Dog,Temperament} = require('../db');
router.post('/', async(req,res,next)=>{
  
    try{
        const {name, weight, height, age_span,temperament} = req.body
        const createdDog = await Dog.create({
            id:uuid(),
            name,
            height,
            weight,
            age_span,
            
        },
        )
            var setTemperaments = await createdDog.setTemperaments(temperament)

            var DBres = await 
             Dog.findAll({
                include:Temperament
            })

        res.json(DBres)
        }
        catch(err){
            next(err)
        }
    

})
router.get('/', async(req,res,next)=>{
    try{

        //dogsCreated = await Dog.findAll()
        var DBres = await 
        Dog.findAll({
           include:Temperament
       })
        res.json(DBres)
        }
        catch(err){
            next(err)
        }
    

})

module.exports = router;