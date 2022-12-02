export const FETCH_ALL_BLOGS_START = "FETCH_ALL_BLOGS_START";
export const FETCH_ALL_BLOGS_SUCCESSFUL = "FETCH_ALL_BLOGS_SUCCESSFUL";
export const FETCH_ALL_BLOGS_FAILED = "FETCH_ALL_BLOGS_FAILED";

// action creator => action object
export const fetchAllBlogs = (blogs) => ({ type: FETCH_ALL_BLOGS_SUCCESSFUL, payload: { blogs } })
export const fetchAllBlogsStart = () => ({ type: FETCH_ALL_BLOGS_START })
export const fetchAllBlogsFailed = (error) => ({ type: FETCH_ALL_BLOGS_FAILED, payload: { error: error } })
