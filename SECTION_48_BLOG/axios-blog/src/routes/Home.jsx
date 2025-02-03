import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "./Home.css";
import blogFetch from "../axios/config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts")

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

  return (
    <div className="home">
      <h1>Last Posts</h1>
      {posts.length === 0 ? (
        <p>Dont have posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">See more!</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
