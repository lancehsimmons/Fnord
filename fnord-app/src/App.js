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
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import How from './components/How.js'
import Post from './components/Post.js'
import Why from './components/Why.js'
import Tools from './components/Tools.js'
import RenderPost from './components/RenderPost.js'

function App() {
  const [posts, setPosts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)

  const API_URL = 'https://api.airtable.com/v0/appMdfGQRBqQW1C0k/Table%201?api_key=keyCVov3VmyQc3bU3'

  useEffect(() => {
    console.log('Getting Posts');

    const getPosts = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setPosts(resp.data.records);
    }
    console.log(posts)

    getPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <div>
        <Link to='/'>
              <h1>Fnord</h1>
        </Link>

          <div>
            <nav>
            <Link to='/post'>
                <em>post</em>
              </Link>
              <Link to='/tools'>
                <em>tools</em>
              </Link>
              <Link to='/how'>
                <em>how</em>
              </Link>
              <Link to='/why'>
                <em>why</em>
              </Link>
            </nav>
          </div>
        </div>

      <main>

        <Route path='/' exact>
          {posts.map((post) => (
            <RenderPost
              postData={post}
              key={post.id}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </Route>

        <Route path='/post'>
          <Post
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}/>
        </Route>

        <Route path='/tools'><Tools /></Route>

        <Route path='/how'><How /></Route>

        <Route path='/why'><Why /></Route>
          
        
      </main>

    </div>
  );
}

export default App;
