import { GET_DOGS, GET_DOGS_BY_ID,GET_DOG_CREATED,GET_TEMPERAMENTS,POST_DOG, POST_DOG_CREATED } from "./constantes";
import axios from 'axios'

export function getDogs (name){
    return async function(dispatch){
        try{
            if(name){
              
                var getDogsResByName
                getDogsResByName = await axios.get('https://app-dogs-franco.herokuapp.com/dogs?name='+name)
                dispatch({
                type:GET_DOGS,
                payload:getDogsResByName
    
                    })
            }else{

                var getDogsRes
                getDogsRes = await axios.get('https://app-dogs-franco.herokuapp.com/dogs')
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
            var TempsRes = await axios.get('https://app-dogs-franco.herokuapp.com/temperament')
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
            var dogDetailRes = await axios.get('https://app-dogs-franco.herokuapp.com/dogs/'+id)
            dispatch({
                type:GET_DOGS_BY_ID,
                payload:dogDetailRes
            })
        }catch(e){
            console.log(e)
        }
    }
}

export function postDogCreated(json){

    var jsonPost = JSON.stringify(json)
    return async function(dispatch){
        try{
            var dogCreatedRes = await axios({
                method: "post",
                url: "https://app-dogs-franco.herokuapp.com/dog",
                data: jsonPost,
                headers: { "Content-Type": "application/json" },
              })
            dispatch({
                type:POST_DOG,
                payload:dogCreatedRes
            })
        }catch(e){
            console.log(e)
        }
    }
}
export function getDogsCreated(){
    return async function(dispatch){
        try{
            var dogCreatedRes = await axios.get("https://app-dogs-franco.herokuapp.com/dog")
            dispatch({
                type:GET_DOG_CREATED,
                payload:dogCreatedRes
            })
        }catch(e){
            console.log(e)
        }
    }
}