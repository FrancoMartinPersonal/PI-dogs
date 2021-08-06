const express = require('express')
const axios = require('axios')
const router = express.Router()
const { Temperament,Dog } = require('../db');
const { uuid } = require('uuidv4');

var id = 0
router.get('/' ,async (req,res,next)=>{
    try{
    var allTemperaments = [];
    var noRepeatedTemps = []
    var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds')
    dogsDataRes = dogsDataRes.data
    dogsData = dogsDataRes.map(e =>{
        return e.temperament
    }) 
    for(i=0;i<dogsData.length;i++){
  if(dogsData[i] !== undefined){
    testString = dogsData[i].split(",");
  testString.forEach(e => {
    allTemperaments.push(e.trim())

  })
 }else{
    allTemperaments.push("undefined")
  }
}
 allTemperaments.forEach(element => {
  if(!noRepeatedTemps.includes(element))
  noRepeatedTemps.push(element)
}) 
TempsWithId = noRepeatedTemps.map(element =>{
    return {
        id:uuid(),
        name:element
    }
})


    const TemperamentAwaited = await Temperament.bulkCreate(TempsWithId)
return     res.send(TemperamentAwaited)
    
}catch(e){
console.log(e)
}
})

module.exports = router