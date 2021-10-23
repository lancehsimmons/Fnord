import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayPost = ({ postData, toggleFetch, setToggleFetch}) => {
  return (
    <div>
      <h4>{postData.fields.title}</h4>
      <p>{postData.fields.body}</p>
      <h5>{postData.fields.author}</h5>
    </div>
  )
}

export default DisplayPost