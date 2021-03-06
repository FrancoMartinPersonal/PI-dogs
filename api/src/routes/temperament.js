const express = require('express')
const axios = require('axios')
const router = express.Router()
const { Temperament,Dog } = require('../db');
const { uuid } = require('uuidv4');
require('dotenv').config();
const   {API_KEY} = process.env;
var id = 0
router.get('/' ,async (req,res,next)=>{
    try{
    var allTemperaments = [];
    var noRepeatedTemps = []
    var dogsDataRes = await axios.get('https://api.thedogapi.com/v1/breeds?api_key='+API_KEY)
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


var temperamentsSortFranco = noRepeatedTemps.sort()
TempsWithIdFranco = temperamentsSortFranco.map(element =>{
    return {
      id:uuid(),
        name:element
      }
})


 var DBNoRepeated = await TempsWithIdFranco.forEach(element =>{
               Temperament.findOrCreate({
                where:{name:element.name},
                defaults:{
                  id:element.id,
                  name:element.name
                }
              })

 })
const DBTemperaments = await Temperament.findAll()
return     res.send(DBTemperaments)

}catch(e){
  console.log(e)
}
})

//       const temperamentesArr = 
//       dogsData.map(el => {
  //         if (el) {
    //             return el
    //         }
//     }).map(el => {
  //         if (el) {
    //             const strings = el.split(', ')
//             return strings
//         }
//     })
// const temperamentsNoRepeat = []

// for (let arrayList of temperamentesArr) {
//     if (arrayList) {
//         for (let temperaments of arrayList) {
  //             if (temperamentsNoRepeat.indexOf(temperaments) === -1) {
    //                 temperamentsNoRepeat.push(temperaments)
//             }
//         }
//     }
// }
// var temperamentsSortCesar = temperamentsNoRepeat.sort()
// TempsWithIdCesar = temperamentsSortCesar.map(element =>{
//     return {
//         id:uuid(),
//         name:element
//       }
// })
module.exports = router