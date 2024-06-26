import *  as ActionTypes from './ActionTypes';

import { DISHES } from "../Shared/dishes";
import { baseURL } from '../Shared/baseURL';


//? This are the action creators to invoked when dispatched

export const addComment = (comment) => {
    return (
        {
            type:ActionTypes.ADD_COMMENT,
            payload: comment
        }
    )
    };


export const postComment = (dishId,rating,author,comment)=>(dispatch)=>{
    const newComment= {
        dishId,rating,author,comment,
    }
    newComment.date= new Date().toISOString();
    return fetch(baseURL+'comments',{
        method:'POST',
        body: JSON.stringify(newComment),
        headers : {
            'Content-Type':'application/json'
        },
        credentials: 'same-origin' //!same origin or cross origin 
    }).then(response=>{
            if (response.ok){
                return response;
            }else{ //! case error from the server
                var error = new Error('Error '+response.status+ ' Message :'+response.statusText);
                error.response = response;
                throw error; 
            }
        },
        error=>{ //! case the server didn't return any answer
            var errmess= new Error(error.message);
            throw errmess;
        })
    .then(response=>response.json())
    .then(response=>dispatch(addComment(response))) //* contains the updated comment with it's id
    .catch(error=>{console.log('POST COMMENT : ',error.message); alert("Comment couldn't be posted")});
}
//? Dishes actioncreators 

export const fetchDishes = () => (dispatch)=> {
    dispatch(dishesLoading(true));

    return fetch(baseURL+'dishes')
        .then(response=>{
            if (response.ok){
                return response;
            }else{ //! case error from the server
                var error = new Error('Error '+response.status+ ' Message :'+response.statusText);
                error.response = response;
                throw error; 
            }
        },
            error=>{ //! case the server didn't return any answer
                var errmess= new Error(error.message);
                throw errmess;
            }
        )
        .then(response=>response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
        .catch(error=>dispatch(dishesFailed(error.message)));

    //?Simulating access to a server
    // setTimeout(()=>{
    //     dispatch(addDishes(DISHES))
    // },2000); //replace by async call to server
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload : errmess
})

export const addDishes= (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


//? Action creators for comments
export const fetchComments = () => (dispatch)=> {

    return fetch(baseURL+'comments')
        .then(response=>{
            if (response.ok){
                return response;
            }else{ //! case error from the server
                var error = new Error('Error '+response.status+ ' Message :'+response.statusText);
                error.response = response;
                throw error; 
            }
        },
            error=>{ //! case the server didn't return any answer
                var errmess= new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload : errmess
})

export const addComments= (comments)=>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})


//? Action creators for promotions


export const fetchPromos = () => (dispatch)=> {
    dispatch(promosLoading(true));
    return fetch(baseURL+'promotions')
        .then(response=>{
            if (response.ok){
                return response;
            }else{ //! case error from the server
                var error = new Error('Error '+response.status+ ' Message :'+response.statusText);
                error.response = response;
                throw error; 
            }
        },
            error=>{ //! case the server didn't return any answer
                var errmess= new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(promos=>dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error.message)));
}

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload : errmess
})

export const addPromos= (dishes)=>({
    type: ActionTypes.ADD_PROMOS,
    payload: dishes
})