import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { blogsReducer } from "../app/blogs/blogs.reducer";

const rootReducer = combineReducers({
  blogs: blogsReducer
})

const middlewares = [];

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

export const store = createStore(rootReducer, enhancer);
