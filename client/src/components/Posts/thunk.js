import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setLoading } from 'components/store/commonSlice';
import { setPosts } from './PostsSlice';
import * as api from 'components/api';

export const getPosts = createAsyncThunk('getPosts', async (data, thunkAPI) => {
  try {
    console.log(`halo data:`, data);
    thunkAPI.dispatch(setLoading(true));
    const result = await api.getPosts(data);
    result?.data && thunkAPI.dispatch(setPosts(result.data));
    thunkAPI.dispatch(setLoading(false));
    return null;
  } catch (error) {
    thunkAPI.dispatch(setError(error));
    return Promise.reject();
  }
});

export const createPost = createAsyncThunk(
  'createPost',
  async (post, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const result = await api.createPost(post);
      console.log(`halo post result:`, result);
      thunkAPI.dispatch(setLoading(false));
      return null;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
      return Promise.reject();
    }
  },
);
