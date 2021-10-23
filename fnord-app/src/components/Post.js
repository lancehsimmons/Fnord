import axios from 'axios'
import { useState } from 'react'

const Post = ({ toggleFetch, setToggleFetch, }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

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

    await axios.post(API_URL, newPost);
    
    setToggleFetch(!toggleFetch);
  }

  return (
    <div>
      <h3>submit a post</h3>
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