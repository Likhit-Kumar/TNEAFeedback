import { ADD_COMMENT, FETCH_USER } from '../constants/actionTypes';

const INITIAL_STATE = {
	users: [ {education : {}, }],
};

const user = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				users: [...action.payload],
			};
		case ADD_COMMENT:
			return {
				...state,
				users: { ...state.post, comments: action.payload },
			}
		default:
			return state;
	}
};



export default user;