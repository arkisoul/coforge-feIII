import React from 'react';
import "./Blog.css";

// react hooks introduced in 16.8

export const BlogComponent = ({ blog }) => {
  return (
    <div className="blog">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
}

export const BlogDetailComponent = () => {
  return (
    <div>
      <h3>I am blog detail component</h3>
    </div>
  )
}

export default BlogDetailComponent;
export const PI = Math.PI;
