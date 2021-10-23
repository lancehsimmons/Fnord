import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

const DisplayPost = ({ postData, toggleFetch, setToggleFetch }) => {

  const deleteBlogPost = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);

    setToggleFetch(!toggleFetch);
}

  return (
    <div id={postData.id}>
      <h4>{postData.fields.title}</h4>
      <p>{postData.fields.body}</p>
      <h5>{postData.fields.author}</h5>

      <button onClick={deleteBlogPost}>Delete</button>
    </div>
  )
}

export default DisplayPost