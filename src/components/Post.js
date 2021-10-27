import axios from 'axios'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


const Post = ({ toggleFetch, setToggleFetch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const API_URL = `https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

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
      <h3>Express Yourself</h3>

      <form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: '170px' }}
            onChange={(ev) => setBody(ev.target.value)}
          />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="author"
            onChange={(ev) => setAuthor(ev.target.value)}
          />
          <Form.Text className="text-muted">Who goes there</Form.Text>
        </Form.Group>

        <input type="submit" />

        </form>
      
    </div>
  )
}


export default Post