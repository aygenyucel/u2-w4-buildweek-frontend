import { GET_POSTS_LIST } from "../actions";

const initialState = {
  feedPosts: [],
};

const feedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LIST:
      return {
        ...state,
        feedPosts: action.payload,
      };

    default:
      return state;
  }
};

export default feedPostsReducer;
