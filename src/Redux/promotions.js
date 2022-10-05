import {PROMOTIONS} from '../Shared/promotions';
import * as ActionTypes from './ActionTypes';

// export const Promotions=(state = PROMOTIONS,action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }

export const Promotions=(state = {
    //! defining the state structure 
    isLoading:true, //DISHES STILL NOT LOADED
    errMess: null, // non error message
    promotions:[]      //the data
},action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state,isLoading:false, errMess:null,promotions:action.payload}
        case ActionTypes.PROMOS_LOADING:  //When we start loading the dishes from the server
            return {...state,isLoading:true, errMess:null,promotions:[]}
        case ActionTypes.PROMOS_FAILED:
            return {...state,isLoading:false, errMess:action.payload,promotions:[]}
        default:
            return state;
    }
}