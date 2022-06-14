import axios from 'axios';

const URI='http://localhost:5000';


export const fetchPosts=()=>axios.get(`${URI}/posts`)
export const createPost=(payload)=>axios.post(`${URI}/posts`,payload)
export const updatePost = (payload) =>
  axios.post(`${URI}/posts/update`, payload);