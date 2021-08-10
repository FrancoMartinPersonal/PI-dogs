import {
    GET_DOGS,GET_DOGS_BY_ID,GET_TEMPERAMENTS
} from '../actions/constantes'

var initialState = {
    dogsLoaded:[],
    tempsLoaded:[],
    dogDetailLoaded:[]
}

export default function reducer (state= initialState,action){

switch(action.type){
    case GET_DOGS:
        return {
            ...state,
            dogsLoaded: action.payload
        }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                tempsLoaded: action.payload
            }
             case GET_DOGS_BY_ID:
                return {
                    ...state,
                    dogDetailLoaded: action.payload
                }      
       default: return {...state}
}

}