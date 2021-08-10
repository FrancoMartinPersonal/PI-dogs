import { GET_DOGS, GET_DOGS_BY_ID,GET_TEMPERAMENTS } from "./constantes";
import axios from 'axios'

export function getDogs (name){
    return async function(dispatch){
        try{
            if(name){
              
                var getDogsResByName
                getDogsResByName = await axios.get('http://localhost:3001/dogs?name='+name)
                dispatch({
                type:GET_DOGS,
                payload:getDogsResByName
    
                    })
            }else{

                var getDogsRes
                getDogsRes = await axios.get('http://localhost:3001/dogs')
                dispatch({
                type:GET_DOGS,
                payload:getDogsRes
    
                    })
            }
        }catch(e){
            console.log(e)
        }
    }
}
export function getTemperaments(){
    return async function(dispatch){
        try{
            var TempsRes = await axios.get('http://localhost:3001/temperament')
            dispatch({
                type:GET_TEMPERAMENTS,
                payload:TempsRes
            })
        }catch(e){
            console.log(e)
        }

    }

}

export function getDogDetails(id){
    return async function(dispatch){
        try{
            var dogDetailRes = await axios.get('http://localhost:3001/dogs/'+id)
            dispatch({
                type:GET_DOGS_BY_ID,
                payload:dogDetailRes
            })
        }catch(e){
            console.log(e)
        }
    }
}