import React from 'react';

import ReactDOM from "react-dom";
import { Router } from "react-router";
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
const Home = () => {
  const [posts ,setPost]=useState([]);
  useEffect(()=>{
    const url ='https://jsonplaceholder.typicode.com/posts';
    fetch (url)
    .then(res=>res.json())
    .then(data=>setPost(data))
  },[])
  return (
    <div>
       <h1>setPost:{posts.length}</h1>

{
  posts.map(post=><Post post={post}></Post>)
}
    </div>
  );
};

export default Home;