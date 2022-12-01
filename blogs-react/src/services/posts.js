import axios from "./api";

export const fetchAllPosts = async () => {
  try {
    const res = await axios.get('/posts');
    return res;
  } catch (error) {
    throw error;
  }
}

export const createPost = async ({ title, desc }, cb) => {
  try {
    // fetch(`http://localhost:4000/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({ title, desc }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }).then((res) => res.json())
    //   .then((data) => cb(null, data))
    //   .catch((error) => cb(error, null))
    const res = await axios.post('/posts', { title, desc });
    return res;
  } catch (error) {
    throw error;
  }
}
