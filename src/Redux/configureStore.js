import { createStore } from "redux";
import { Reducer,initialState } from "./reducer";


// import {configureStore} from 'redux';



export const ConfigureStore= ()=>{   //? create and configure the store
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}