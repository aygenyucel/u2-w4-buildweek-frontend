import { GET_EXPERIENCES_USER, GET_PROFILE_USER } from "../actions";

const initialState = {
  userData: [],
  userExperiencesData: [],
};

const usersProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_EXPERIENCES_USER:
      return {
        ...state,
        userExperiencesData: action.payload,
      };
    default:
      return state;
  }
};

export default usersProfileReducer;
