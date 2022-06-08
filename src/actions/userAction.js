import * as api from '../api/index.js';
import { END_LOADING, FETCH_USER, START_LOADING } from "../constants/actionTypes";

export const getUserData = id => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        console.log(id);
        const data = await api.fetchData(id)
        console.log(data);

        dispatch({ type: FETCH_USER, payload: data.data.users });
    } catch(err) {
        console.log('getUserData api error ', err);
        dispatch({ type: END_LOADING })

    }
}