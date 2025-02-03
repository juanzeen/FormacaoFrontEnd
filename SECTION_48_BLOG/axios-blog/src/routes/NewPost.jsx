import React from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import blogFetch from "../axios/config.js"

import "./NewPost.css";

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const createPost = async  (e) => {
    e.preventDefault()

    console.log(title);
    console.log(body);

    const post = {
      title,
      body,
      userId: 1
    }

    await blogFetch.post("/posts", {
      body: post
    })

    navigate("/")

  }

  return (
    <div className="new-post">
      <h2>Create New Post!</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Put the title of your post..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Content:</label>
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Put the content of your post..."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
          <input type="submit" value="Submit!" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
