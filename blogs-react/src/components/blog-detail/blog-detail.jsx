import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../services/posts";
import { BlogComponent } from "../blog/Blog";

export const BlogDetail = () => {
  const [blog, setBlog] = React.useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchPostById(id)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return <BlogComponent blog={blog} />;
};
