import axios from 'axios';

const axioInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "x-product": "blog-post"
  }
})

export default axioInstance;
