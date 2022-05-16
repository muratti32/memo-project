import axios from 'axios';

const url = 'http://localhost:5001/posts';

export const getPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const  updatePost = (post) => axios.patch(`${url}/${post.id}`, post);
