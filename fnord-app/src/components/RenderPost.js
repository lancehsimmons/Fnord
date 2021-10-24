import axios from 'axios'

const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

const DisplayPost = ({ postData, toggleFetch, setToggleFetch, voidCloud, setVoidCloud, voidCounter, setVoidCounter, counterCheck }) => {

  const deleteBlogPost = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);

    setToggleFetch(!toggleFetch);
  }
  
  const addVoid = () => {
    console.log(`add void ${postData.id} was clicked`)
    setVoidCloud(voidCloud + ` ${postData.fields.body}`)
    setVoidCounter(voidCounter + 1)

    counterCheck()
    console.log(voidCloud)
  }

  return (
    <div id={postData.id}>
      <hr/>
      <h4>{postData.fields.title}</h4>
      <p>{postData.fields.body}</p>
      <h5>{postData.fields.author}</h5>

      <button
        id={postData.id}
        onClick={() => addVoid()}
      >void</button>

      <button onClick={deleteBlogPost}>Delete</button>
      <hr/>
    </div>
  )
}

export default DisplayPost