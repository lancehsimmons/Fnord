import axios from 'axios'

const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

const DisplayPost = ({ postData, toggleFetch, setToggleFetch, voidCloud, setVoidCloud, voidCounter, setVoidCounter, catchTheVoid }) => {

  const deleteBlogPost = async (ev) => {
    ev.preventDefault()
    await axios.delete(API_URL + `&records[]=${postData.id}`);

    setToggleFetch(!toggleFetch);
  }
  
  const addVoid = (ev) => {
    ev.preventDefault()
    setVoidCounter(voidCounter + 1)
    setVoidCloud(voidCloud + ` ${postData.fields.body}`)
    catchTheVoid()
    console.log(voidCloud)
    if (voidCounter > 2) {
      setVoidCloud('')
      setVoidCounter(0)
      console.log('toggleVoidFetch')
    } 
      console.log(`add void ${postData.id} was clicked`)
  }

  return (
    <div id={postData.id}>
      <hr/>
      <h4>{postData.fields.title}</h4>
      <p>{postData.fields.body}</p>
      <h5>{postData.fields.author}</h5>

      <button
        id={postData.id}
        onClick={(ev) => addVoid(ev)}
      >void</button>

      <button onClick={(ev) => deleteBlogPost(ev)}>Delete</button>
      <hr/>
    </div>
  )
}

export default DisplayPost

