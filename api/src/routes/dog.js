const express = require('express')
const axios = require('axios')
const router = express.Router()


router.get('/', async(req,res,next)=> {
    //console.log(res)
    if(req.query.name){
        try{
            var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds')
            dogsDataRes = dogsDataRes.data
            var dogData = dogsDataRes.filter(element =>{
                return element.name == req.query.name
                
            })
            if(dogData[0].name){
                res.send(dogData)
               
            }
        }catch(error){
            res.status(404).send("there's no dog with that name")
            next(error)
 }        
}else{
    try {
        var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds')
        dogsDataRes = dogsDataRes.data
            var dogData = dogsDataRes.map( data => {
                return {
                    id: data.id,
                    name: data.name, 
                    temperament: data.temperament,
                    
                    image:{ 
                        url: data.image.url,
                        id: data.image.id
                    }
                }
            })
        res.send(dogData)}
        catch(error){
            console.log("error get dog disparado")
            next({msg:error,status:500 })   
}}})

router.get('/:idRaza', async(req,res,next)=> {
 try{
     var idRaza = req.params.idRaza
     var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds')
     dogsDataRes = dogsDataRes.data
     dogData = dogsDataRes.filter(id => {
         return id.id == idRaza
     })
      dogData = dogData.map( data => {
        return {
            id: data.id,
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
    if ( dogData[0].name){
        
        res.send(dogData)
    }
 }catch(err){
    res.status(404).send("there's no id with that description")
    next(err)
 }
})



module.exports =  router 
