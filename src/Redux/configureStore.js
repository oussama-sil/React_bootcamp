import { createStore,combineReducers } from "redux";
// import { Reducer,initialState } from "./reducer";


import { configureStore } from "@reduxjs/toolkit";


import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Comments } from "./comments";
import { Promotions } from "./promotions";


import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import {createForms} from 'react-redux-form'
import { InitialeFeedback } from "./forms";

// import {configureStore} from 'redux';
const reducer = { // specify how to combine the reducers
    dishes:Dishes,     //this state is managed by dishes
    comments:Comments,
    promotions:Promotions,
    leaders:Leaders
};

export const ConfigureStore2=()=>{
    return  configureStore({reducer});
}


export const ConfigureStore= ()=>{   //? create and configure the store
    const store = createStore(
        combineReducers({ //* specify how to combine the reducers
            dishes:Dishes,     //*this state is managed by the reducer Dishes
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders,
            ...createForms({ //*add reducers information and state actions to the form 
                feedback:InitialeFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}


//? how to update the store 
/**
 * *In the component when we do the change invoke action creators 
 * *the action creaters is passed to the right reducer
 * *the reducer execute the action 
 */