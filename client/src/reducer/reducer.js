import {
    GET_DOGS,GET_DOGS_BY_ID,GET_TEMPERAMENTS,POST_DOG
} from '../actions/constantes'

var initialState = {
    dogsLoaded:[],
    tempsLoaded:[],
    dogDetailLoaded:[],
    dogsCreated:[]
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
                case POST_DOG:
                    return {
                        ...state,
                        dogsCreated: action.payload
                    }     
       default: return {...state}
}

}