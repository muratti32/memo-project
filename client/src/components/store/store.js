import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "components/Posts/PostsSlice";
import commonSlice from "./commonSlice";

const rootReducer = {
  postsSlice: PostsSlice,
  commonSlice: commonSlice,
};
export const store = configureStore({
  reducer: rootReducer,
});
