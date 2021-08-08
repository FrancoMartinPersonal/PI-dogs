import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/reducer'
import thunk from "redux-thunk";

//primero seteamos el store
//haciendo nuestro reducer(anda a ../reducer/index.js)
var store = createStore(reducer, applyMiddleware(thunk))
//ahora tenemos que hacer nuestra primer action!
//vamos a actions
export default store;