import { FETCH_ALL_BLOGS_SUCCESSFUL, FETCH_ALL_BLOGS_START, FETCH_ALL_BLOGS_FAILED } from "./blogs.action.types";

const initialState = {
  blogs: [],
  isFetching: false,
  error: null
}

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS_START:
      return { ...state, isFetching: true, error: null }

    case FETCH_ALL_BLOGS_SUCCESSFUL:
      // const updatedState = { ...state };
      // updatedState.blogs = action.payload.blogs;
      // return updatedState;
      return { ...state, blogs: action.payload.blogs, isFetching: false };

    case FETCH_ALL_BLOGS_FAILED:
      return { ...state, isFetching: false, error: action.payload.error }

    default:
      return state;
  }
}
