import * as ActionTypes from "./blogs.action.types";

const initialState = {
  blogs: [],
  isFetching: false,
  error: null
}

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_BLOGS_START:
      return { ...state, isFetching: true, error: null }

    case ActionTypes.FETCH_ALL_BLOGS_SUCCESSFUL:
      // const updatedState = { ...state };
      // updatedState.blogs = action.payload.blogs;
      // return updatedState;
      return { ...state, blogs: action.payload.blogs, isFetching: false };

    case ActionTypes.FETCH_ALL_BLOGS_FAILED:
      return { ...state, isFetching: false, error: action.payload.error }

    case ActionTypes.CREATE_BLOG_START:
      return { ...state, isFetching: true, error: null }

    case ActionTypes.CREATE_BLOG_SUCCESSFUL:
      return { ...state, blogs: [...state.blogs, action.payload.blog], isFetching: false };

    case ActionTypes.CREATE_BLOG_FAILED:
      return { ...state, isFetching: false, error: action.payload.error }

    default:
      return state;
  }
}
