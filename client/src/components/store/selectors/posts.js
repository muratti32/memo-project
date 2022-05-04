import { createSelector } from '@reduxjs/toolkit';

export const posts = {
  postList: createSelector(
    (state) => state.postsSlice.posts,
    (value) => value
  ),
};
