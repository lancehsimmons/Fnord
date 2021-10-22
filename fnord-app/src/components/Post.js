import axios from 'axios'
import { useState, useEffect } from 'react'

const Post = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit =  async (ev) => {
    ev.preventDefault()

    const newPost = {
      records: [
        {
          fields: {
            title,
            body,
            author,
          }
        }
      ]
    }


  }

  return (
    <div>
      <h3>render post</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)} />
        <br/>
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" onChange={(ev) => setBody(ev.target.value)} />
        <br/>
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" onChange={(ev) => setAuthor(ev.target.value)} />
        <br />
        
        <input type="submit" />
      </form>
      
    </div>
  )
}


export default Post