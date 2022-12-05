import { fetchAllPosts, createPost } from "../../services/posts";

export const FETCH_ALL_BLOGS_START = "FETCH_ALL_BLOGS_START";
export const FETCH_ALL_BLOGS_SUCCESSFUL = "FETCH_ALL_BLOGS_SUCCESSFUL";
export const FETCH_ALL_BLOGS_FAILED = "FETCH_ALL_BLOGS_FAILED";
export const CREATE_BLOG_START = "CREATE_BLOG_START";
export const CREATE_BLOG_SUCCESSFUL = "CREATE_BLOG_SUCCESSFUL";
export const CREATE_BLOG_FAILED = "CREATE_BLOG_FAILED";

// action creator => action object
export const fetchAllBlogsSuccessful = (blogs) => ({ type: FETCH_ALL_BLOGS_SUCCESSFUL, payload: { blogs } })
export const fetchAllBlogsStart = () => ({ type: FETCH_ALL_BLOGS_START })
export const fetchAllBlogsFailed = (error) => ({ type: FETCH_ALL_BLOGS_FAILED, payload: { error: error } })

// thunk function
export const fetchAllBlogs = async (dispatch, getState) => {
  try {
    dispatch(fetchAllBlogsStart());
    const res = await fetchAllPosts();
    dispatch(fetchAllBlogsSuccessful(res.data));
  } catch (error) {
    dispatch(fetchAllBlogsFailed(error));
  }
}

// thunk function creator
export const createABlog = ({ title, desc }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_BLOG_START });
      const res = await createPost({ title, desc });
      dispatch({ type: CREATE_BLOG_SUCCESSFUL, payload: { blog: res.data } });
    } catch (error) {
      dispatch({ type: CREATE_BLOG_FAILED, payload: { error } });
    }
  }
}
