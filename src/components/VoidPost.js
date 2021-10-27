import axios from 'axios'
import cutup from 'cut-up-method-js'
// import { useState } from 'react'

const API_URL = `https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

const AbyssPost = ({ voidCloud, setVoidCloud, toggleFetch, setToggleFetch, setVoidCounter }) => {
  


  const handleVoidSubmit =  async (ev) => {
    ev.preventDefault()
    console.log(voidCloud)
    // var cutupmethod = require('cut-up-method-js')
    let voidBody = cutup(voidCloud)

    const newVoidPost = {
      records: [
        {
          fields: {
            title: 'void',
            body: voidBody,
            author: 'void',
          }
        }
      ]
    }

    await axios.post(API_URL, newVoidPost);

    setVoidCloud('')
    setVoidCounter(0)
    
    setToggleFetch(!toggleFetch);
  }

  return (
    <div>
      <button onClick={(ev) => handleVoidSubmit(ev)}>Void Post</button>
    </div>
  )
}

export default AbyssPost