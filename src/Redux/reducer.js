import { DISHES } from "../Shared/dishes";
import {PROMOTIONS} from '../Shared/promotions';
import {LEADERS} from '../Shared/leaders';
import {COMMENTS} from '../Shared/comments';




//Reducer function : pure function

export const initialState={
    dishes: DISHES,
    promotions : PROMOTIONS,
    leaders : LEADERS,
    comments:COMMENTS,
    selectedDish: null,
};


export const Reducer = (state = initialState,action)=>{ // takes state and action and return new state , initiale state defined
    return state; 
};