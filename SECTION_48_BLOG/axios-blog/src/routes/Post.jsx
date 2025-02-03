import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogFetch from "../axios/config";

import "./Post.css";
const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      console.log(data);

      setPost(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Loading...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
