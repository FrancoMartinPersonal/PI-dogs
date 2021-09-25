const express = require('express')
const axios = require('axios')
const router = express.Router()
const {Dog} = require('../db');
require('dotenv').config();
const   {API_KEY} = process.env;


router.get('/', async(req,res,next)=> {
    //console.log(res)
    if(req.query.name){
        try{
            console.log(req.query.name)
            console.log("↑↑↑req.query.name")
            var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds?api_key='+API_KEY)
            dogsDataRes = dogsDataRes.data
            var  dogsFindAll = await axios.get('http://localhost:3001/dog')
              dogsFindAll = dogsFindAll.data
            var dogData = dogsDataRes.filter(element =>{
                return element.name == req.query.name
                
            }) 
                dogData = dogData.map(dog => {
                    return {
                        id: dog.id,
                        name: dog.name, 
                        temperament: dog.temperament,
                        weight: dog.weight.metric,
                        image:{ 
                            url: dog.image.url,
                            id: dog.image.id
                        }
                    }
    
                })
            var dogFindAllFilter = dogsFindAll.filter( element =>{
                return element.name == req.query.name
            })
            
            dogFindAllFilter = dogFindAllFilter.map( data => {
                var DogTemperaments = []
                data.Temperaments.forEach(temperament =>{
                        DogTemperaments.push(temperament.name)
                    })
                return {
                    id: data.id,
                    name: data.name, 
                    temperament:DogTemperaments.join(", "),  
                    weight: data.weight,
                    height: data.height,
                    life_span: data.age_span
                }})
               var allDogs = dogData.concat(dogFindAllFilter)
              
               var allDogsFilter = allDogs.filter( element =>{
                return element.name == req.query.name
            })
            
            if(allDogsFilter[0].name){
                res.send(allDogsFilter)

               
               
            }
        }catch(error){
            res.status(404).send("there's no dog with that name")
            next(error)
 }        
}else{
    try {
        var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds?api_key='+API_KEY)
        dogsDataRes = dogsDataRes.data
        var  dogsFindAll = await axios.get('http://localhost:3001/dog')
              dogsFindAll = dogsFindAll.data
           
            var dogData = dogsDataRes.map( data => {
                return {
                    id: data.id,
                    name: data.name, 
                    temperament: data.temperament,
                    weight: data.weight.metric,
                    image:{ 
                        url: data.image.url,
                        id: data.image.id
                    }
                }

            })
            dogsFindAll = dogsFindAll.map( data => {
                var DogTemperaments = []
                data.Temperaments.forEach(temperament =>{
                        DogTemperaments.push(temperament.name)
                    })
                return {
                    id: data.id,
                    name: data.name, 
                    weight: data.weight,
                    temperament:DogTemperaments.join(", "),  
                   
                }})
               var allDogs = dogData.concat(dogsFindAll)
               
             
            
        res.send(allDogs)}
        catch(error){
            console.log("error get dog disparado")
            next({msg:error,status:500 })   
}}})

router.get('/:idRaza', async(req,res,next)=> {
 try{
     var idRaza = req.params.idRaza
     console.log(idRaza)
     console.log("↑↑↑ idRaza")
     var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds?api_key='+API_KEY)
     dogsDataRes = dogsDataRes.data
   var  dogsFindAll = await axios.get('http://localhost:3001/dog')
   dogsFindAll = dogsFindAll.data

   dogData = dogsDataRes.filter(id => {
       return id.id == idRaza
    })
    var dogFindAllFilter = dogsFindAll.filter( id =>{
         return id.id == idRaza
     })

      dogData = dogData.map( data => {
          return {
            id:parseInt(data.id),
            name: data.name, 
            temperament: data.temperament,
            image:{ 
                url: data.image.url,
                id: data.image.id
            },  
            weight: data.weight.metric,
            height: data.height.metric,
            life_span: data.life_span
        }
    })
    dogFindAllFilter = dogFindAllFilter.map( data => {
        var DogTemperaments = []
        data.Temperaments.forEach(temperament =>{
                DogTemperaments.push(temperament.name)
            })
        return {
            id: data.id,
            name: data.name, 
            temperament:DogTemperaments.join(", "),  
            weight: data.weight,
            height: data.height,
            life_span: data.age_span
        }})
       var allDogs = dogData.concat(dogFindAllFilter)
      
       var allDogsFilter = allDogs.filter( id =>{
        return id.id = idRaza
    })
        //  console.log(dogFindAllFilter)
        //  console.log("↑↑↑ dogfindallfilter --- filter")
         if (  allDogsFilter[0].name  ){
            
           
             res.send(allDogsFilter)
             allDogsFilter = []
             dogsFindAll = []
             dogsDataRes = []
    }
    // else if(dogFindAllFilter[0].name){
    //     console.log(dogFindAllFilter)
    //     console.log("↑↑↑ dogfindallfilter --- send")
    //     res.send(dogFindAllFilter)
    // }
 }catch(err){
    res.status(404).send("there's no id with that description")
    next(err)
 }
})



module.exports =  router 
