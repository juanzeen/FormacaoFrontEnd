import React, { useEffect } from 'react'

import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import blogFetch from "../axios/config.js"

import "./NewPost.css";

const EditPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { id } = useParams()

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;


      setTitle(data.title);
      setBody(data.body);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost()
  }, [])

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId }

    await blogFetch.put(`/posts/${id}`, {
      body: post
    })
  }

  return (
    <div className='new-post'>
      <h2>Editing { title || ""}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Put the title of your post..."
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
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
            value={body || ""}
          ></textarea>
        </div>
          <input type="submit" value="Edit post!" className="btn" />
      </form>
    </div>
  )
}

export default EditPost
