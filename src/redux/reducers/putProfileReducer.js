import { EDIT_PROFILE } from "../actions"

const initialState = {
    currentState: [],
}

const putProfileReducer = (state=initialState, action) => {
    switch(action.type) {
        case EDIT_PROFILE : 
        return {
            ...state,
            currentState: action.payload
        };

        default:
        return state
    }
}

export default putProfileReducer;

