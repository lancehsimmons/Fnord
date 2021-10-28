import axios from 'axios'
import { Button } from 'react-bootstrap'

const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

const DisplayPost = ({ postData, toggleFetch, setToggleFetch, voidCloud, setVoidCloud, voidCounter, setVoidCounter }) => {

  const deletePost = async (ev) => {
    ev.preventDefault()
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    setToggleFetch(!toggleFetch);
  }
  
  const addVoid = (ev) => {
    ev.preventDefault()
    setVoidCounter(voidCounter + 1)
    setVoidCloud(voidCloud + ` ${postData.fields.body}`)
    console.log(voidCloud)
    // You can't add more then three existing posts to the "Void Cloud"
    if (voidCounter > 3) {
      setVoidCloud('')
      setVoidCounter(0)
    } 
  }

  return (
    <div className='post'>
      <h6><span className={postData.fields.author === 'void' ? '' : 'redacted'}>{postData.fields.title}</span></h6>
      <h6><span className={postData.fields.author === 'void' ? '' : 'redacted'}>{postData.fields.body}</span></h6>
      <h6>{`-${postData.fields.author}`}</h6>

      <div className='feed-buttons'>
        <div>
          {/* This "void" button adds the conents of the post to the "Void Cloud" */}
          <Button
            variant="warning"
            id={postData.id}
            onClick={(ev) => addVoid(ev)}
          >void</Button>
        </div>
        <div>
          <Button className='delete-button' variant='secondary' onClick={(ev) => deletePost(ev)}>Delete</Button>
        </div>
      </div>

      <hr/>
    </div>
  )
}

export default DisplayPost

