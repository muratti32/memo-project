import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: 'PostsSlice',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { increment, decrement, setPosts } = PostsSlice.actions;
export default PostsSlice.reducer;
