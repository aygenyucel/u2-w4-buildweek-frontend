import { GET_EXPERIENCES, GET_PROFILE, GET_PROFILE_ID } from "../actions";

const initialState = {
  data: [],
  profileId: "",
  experiencesData: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      // return Object.assign({}, state, { data: action.payload });
      return {
        ...state,
        data: action.payload,
      };
    case GET_EXPERIENCES:
      return {
        ...state,
        experiencesData: action.payload,
      };
    case GET_PROFILE_ID:
      return {
        ...state,
        profileId: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
