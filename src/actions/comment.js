import * as api from '../api/index.js';
import { ADD_COMMENT} from "../constants/actionTypes";

// Add comment
export const addCommentUser = (postId, formData) => async (dispatch) => {
    try {
      // console.log(postId, formData)
      const res = await api.postComment(postId, formData)
      console.log(res)
      
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
  
    //   dispatch(alert('Comment Added', 'success'));
    } catch (err) {
      console.log('Add Comment api error ', err);
    //   dispatch({
    //     type: END_LOADING,
    //   });
    }
  };