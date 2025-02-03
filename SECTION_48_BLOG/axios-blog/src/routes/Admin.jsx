import React from "react";

import "./Admin.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  //array de depencias vazio -> executa uma vez
  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`)

    const filteredPost = posts.filter((post) => post.id != id)

  setPosts(filteredPost)
  }

  return (
    <div className="admin">
      <h1>Manage posts</h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">
                Edit!
              </Link>
              <button className="btn delete-btn" onClick={() => deletePost(post.id)}>
                Delete!
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
