import {
    GET_DOGS
} from '../actions/constantes'

var initialState = {
    dogsLoaded:[]
}

export default function reducer (state= initialState,action){

switch(action.type){
    case GET_DOGS:
        return {
            ...state,
            dogsLoaded: action.payload
        }
       default: return state
}

}