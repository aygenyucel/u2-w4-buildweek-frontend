import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import usersProfileReducer from "./../reducers/usersProfileReducer";
import searchReducer from "../reducers/searchReducer";
import feedPostsReducer from "../reducers/feedPostReducer";
import putProfileReducer from "../reducers/putProfileReducer";
import updateExperienceReducer from "../reducers/updateExperienceReducer"


const bigReducer = combineReducers({
  profile: profileReducer,
  usersProfile: usersProfileReducer,
  listOfProfiles: searchReducer,
  feedPosts: feedPostsReducer,
  edit: putProfileReducer,
  experience: updateExperienceReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
