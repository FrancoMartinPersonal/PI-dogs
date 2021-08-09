import {
    GET_DOGS,GET_TEMPERAMENTS
} from '../actions/constantes'

var initialState = {
    dogsLoaded:[],
    tempsLoaded:[]
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
       default: return {...state}
}

}