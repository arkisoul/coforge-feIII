import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../../app/counter/counter.action.types";
import "./Blog.css";

// useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect, useReducer, useContext

export const BlogComponent = ({ blog }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // const [count, setCount] = useState(localStorage.getItem('count') || 0); // => [stateValue, stateMutatingFunction]
  const [time, setTime] = useState(new Date());
  const inputElement = React.useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // dependency array/dep array

  return (
    <div className="blog" ref={inputElement} data-testid="blog-item">
      <h3>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </h3>
      <p>{blog.desc}</p>
      <div className="counter">
        <button
          onClick={() => {
            // localStorage.setItem('count', count+1);
            // setCount(count + 1)
            dispatch(increment());
          }}
        >
          Inc
        </button>
        <span> {counter.count} </span>
        <button
          onClick={() => {
            // setCount(count - 1)
            dispatch(decrement());
          }}
        >
          Dec
        </button>
      </div>
    </div>
  );
}
