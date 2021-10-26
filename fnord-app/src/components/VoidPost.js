import axios from 'axios'
import { useState } from 'react'
 
const AbyssPost = ({ voidCloud, toggleFetch, setToggleFetch, voidFetch, setVoidFetch, }) => {

  const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

  const handleVoidSubmit =  async (ev) => {
    ev.preventDefault()

    const newVoidPost = {
      records: [
        {
          fields: {
            title: 'void',
            body: { voidCloud },
            author: 'void',
          }
        }
      ]
    }

    await axios.post(API_URL, newVoidPost);
    
    setToggleFetch(!toggleFetch);
  }

  return (
    <div>
      <button onclick={(ev) => handleVoidSubmit(ev)}>Void Post</button>

    </div>
  )
}

export default AbyssPost