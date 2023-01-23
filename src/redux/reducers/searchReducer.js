import { GET_PROFILES_LIST } from "../actions";

const initialState = {
  profilesList: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_LIST:
      return {
        ...state,
        profilesList: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
