import { GET_DOGS } from "./constantes";
import axios from 'axios'

export function getDogs (){
    return async function(dispatch){
        try{
            var getDogsRes
            getDogsRes = await axios.get('http://localhost:3001/dogs')
            dispatch({
            type:GET_DOGS,
            payload:getDogsRes

                })
        }catch(e){
            console.log(e)
        }
    }
}