/*
1- i dependencies
2- file structure
3- create components
4- fetch api
5- render api
6- render through post
  - post component writes to api
  - app component renders posts from api to feed on root
7- populate how
8- populate why
9- basic css for all pages 
  - css file structure
  - overall
  - per component
  - 
- add to void button on rendered posts displayed in root feed
  - once 3 posts are acrewed in void a void post is generated 
    - sent to api
- 

*/

import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import How from './components/How.js'
import Post from './components/Post.js'
import AbyssPost from './components/VoidPost.js'
import Why from './components/Why.js'
import Tools from './components/Tools.js'
import RenderPost from './components/RenderPost.js'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  const [voidCounter, setVoidCounter] = useState(0)
  const [voidCloud, setVoidCloud] = useState('')
  const [voidFetch, setVoidFetch] = useState(false)
  const [catchVoid, setCatchVoid] = useState('')

  const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

  useEffect(() => {
    console.log('Getting Posts');

    const getPosts = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setPosts(resp.data.records);
    }
    // console.log(posts)

    getPosts();
  }, [toggleFetch]);

  const catchTheVoid = () => {
    setCatchVoid(voidCloud)
    console.log('void terminal density exceeded')
    console.log(catchVoid)
  }



  return (
    <div className="App">
      <header className="App-header">
        <div id='titlediv'>
          <div id='title'>
          <Link to='/'>
                <h1>Fnord</h1>
          </Link>
          </div>

          <div>
            <DropdownButton id="dropdown-basic-button" title="menu">
              
            <Dropdown.Item href='/post'>
              <h6>post</h6>
            </Dropdown.Item>
              
              <Dropdown.Item href='/tools'>
              <h6>tools</h6>
            </Dropdown.Item>
              
            <Dropdown.Item href='/how'>
              <h6>how</h6>
              </Dropdown.Item>
              
            <Dropdown.Item href='/why'>
              <h6>why</h6>
              </Dropdown.Item>
              
            <Dropdown.Item href='/'>
              <h6>home</h6>
            </Dropdown.Item>
              
          </DropdownButton>
          </div>

        </div>
      </header>

      <main>

        <h3>{voidCounter}</h3>

        <AbyssPost
          voidCloud={voidCloud}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          voidFetch={voidFetch}
          setVoidFetch={setVoidFetch}
        />

        <Route path='/' exact>
          <div >
          {posts.map((post) => (
            <RenderPost
              postData={post}
              key={post.id}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
              voidCloud={voidCloud}
              setVoidCloud={setVoidCloud}
              voidCounter={voidCounter}
              setVoidCounter={setVoidCounter}
              // counterCheck={counterCheck}
              // catchVoid={catchVoid}
              // setCatchVoid={setCatchVoid}
              catchTheVoid={catchTheVoid} 
            />
          ))}
          </div>
        </Route>



        <Route path='/post'>
          <Post
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path='/tools'><Tools /></Route>

        <Route path='/how'><How /></Route>

        <Route path='/why'><Why /></Route>
          
        
      </main>

    </div>
  );
}

export default App;



