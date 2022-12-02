import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { blogsReducer } from "../app/blogs/blogs.reducer";
import { counterReducer } from "../app/counter/counter.reducer";

const rootReducer = combineReducers({
  blogs: blogsReducer,
  counter: counterReducer
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
