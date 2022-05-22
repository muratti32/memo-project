import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setLoading } from 'components/store/commonSlice';
import { setPosts, updatePost as updatePostReducer } from './PostsSlice';
import * as api from 'components/api';

export const getPosts = createAsyncThunk('getPosts', async (data, thunkAPI) => {
  try {
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
      thunkAPI.dispatch(getPosts());
      thunkAPI.dispatch(setLoading(false));
      return null;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
      return Promise.reject();
    }
  },
);

export const updatePost = createAsyncThunk(
  'updatePost',
  async (post, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await api.updatePost(post);
      if (data) {
        thunkAPI.dispatch(updatePostReducer(data));
      }
      thunkAPI.dispatch(setLoading(false));
      return null;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
      return Promise.reject();
    }
  },
);

export const deletePost = createAsyncThunk(
  'deletePost',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const result = await api.deletePost(id);
      thunkAPI.dispatch(getPosts());
      thunkAPI.dispatch(setLoading(false));
      return null;
    } catch (error) {
      thunkAPI.dispatch(setError(error));
      return Promise.reject();
    }
  },
);
