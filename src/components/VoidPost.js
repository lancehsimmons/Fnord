import axios from 'axios'
import cutup from 'cut-up-method-js'
import { Button } from 'react-bootstrap'

const API_URL = `https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

const AbyssPost = ({ voidCloud, setVoidCloud, toggleFetch, setToggleFetch, setVoidCounter }) => {
  
/* voidCloud passes a string from App
That string is processed using the cutup method imported above
The newly arranged string is then set to the body a new Void Post
The title and author of all Void Posts are default set to 'void'
*/
  const handleVoidSubmit =  async (ev) => {
    ev.preventDefault()
    let voidBody = cutup(voidCloud)
// Alert notice in case void post has no content
    if (voidBody === '') {
      alert('select something to add to the Void Cloud')
    } else {

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
  }
/* The element that renders from this component is a button labeled "Void Emit"
Clicking that button triggers creating a new Void Post
The content of that new post is set by clicking the void button on up to 3 preexisting posts.
*/
  return (
    <div>
      <Button variant="dark" onClick={(ev) => handleVoidSubmit(ev)}>Void Emit</Button>
    </div>
  )
}

export default AbyssPost