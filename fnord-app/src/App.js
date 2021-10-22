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



import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import How from './components/How.js'
import Post from './components.Post.js'
import Why from './components.Why.js'
import Tools from './components.Tools.js'
import RenderPost from './components.Tools.js'

function App() {



  return (
    <div className="App">
      <Link to='/' exact>
        <div>
            <h1>Fnord</h1>
          <nav>
            <Post />
            <Tools />
            <How />
            <Why />
          </nav>
        </div>
      </Link>

      <main>
        <RenderPost />
        
      </main>

    </div>
  );
}

export default App;
