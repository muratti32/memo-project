import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

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
    updatePost: (state, action) => {
      const { id, ...rest } = action.payload;
      const post = state.posts.find((post) => post._id === action.payload._id);
      if (post) {
        post.title = action.payload.title;
        post.message = action.payload.message;
        post.tags = action.payload.tags;
        post.selectedFile = action.payload.selectedFile;
        post.creator = action.payload.creator;
      }
    },
  },
});

export const { increment, decrement, setPosts, updatePost } =
  PostsSlice.actions;
export default PostsSlice.reducer;
