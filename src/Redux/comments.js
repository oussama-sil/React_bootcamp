import {COMMENTS} from '../Shared/comments';
import *  as ActionTypes from './ActionTypes';


//? Adding comment 
/**
 * 1-call submit function postComment (passed from Main to the component)
 * 2-it post and pull an action ADD_COMMENT
 * 3-
 * 4-
 */



export const Comments=(state = {
    errMess:null,
    comments:[]
},action) => {
    switch(action.type){
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess:action.payload,comments:[]}
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess:null,comments:action.payload}
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            //* comment.id = state.comments.length;   //?id generated in the backend
            //* comment.date= new Date().toISOString();
            return {...state,comments:state.comments.concat(comment)}; //! creating a new copy of the state not modifying it 
        default:
            return state;
    }
}