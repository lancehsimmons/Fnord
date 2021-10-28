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
    if (voidCounter > 2) {
      setVoidCloud('')
      setVoidCounter(0)
      console.log('toggleVoidFetch')
    } 
      console.log(`add void ${postData.id} was clicked`)
  }

  return (
    <div className='post'>
      <h6><span className={postData.fields.author === 'void' ? '' : 'redacted'}>{postData.fields.title}</span></h6>
      <h6><span className={postData.fields.author === 'void' ? '' : 'redacted'}>{postData.fields.body}</span></h6>
      <h6>{`-${postData.fields.author}`}</h6>

      <div className='feed-buttons'>
        <div>
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

