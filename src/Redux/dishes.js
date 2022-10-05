import { DISHES } from "../Shared/dishes";
import * as ActionTypes from './ActionTypes';


//?This the reducer that will manage the state dishes
export const Dishes=(state = {
    isLoading:true, //DISHES STILL NOT LOADED
    errMess: null, // non error message
    dishes:[]      //the data
},action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading:false, errMess:null,dishes:action.payload}
        case ActionTypes.DISHES_LOADING:  //When we start loading the dishes from the server
            return {...state,isLoading:true, errMess:null,dishes:[]}
        case ActionTypes.DISHES_FAILED:
            return {...state,isLoading:false, errMess:action.payload,dishes:[]}
        default:
            return state;
    }
}