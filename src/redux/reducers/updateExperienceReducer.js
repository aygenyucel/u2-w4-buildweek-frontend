import { UPDATE_EXPERIENCE, DELETE_EXPERIENCE } from "../actions";

const initialState = {
    experience: [],
    deleteExp: [],
};

const updateExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
      case DELETE_EXPERIENCE:
        return {
          ...state,
          deleteExp: action.payload,
        };
    default:
      return state;
  }
};

export default updateExperienceReducer;