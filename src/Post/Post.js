import { Button } from '@material-ui/core';
import React from 'react';
import { Link,  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const {id,title,body}=props.post;

  const navigate=useNavigate();
   const handleClick=(postId)=>{
          const url=`/post/${postId}`;
          navigate(url);

   }

  const postStyle = { 
    border: '1px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }

  return (
    <div style={postStyle}>
      <p>Title:{title}</p>
      <p>body:{body}</p>
      <Link to={`/post/${id}`}>Show details:{id}</Link>
      <Button variant="contained" color="primary" onClick={()=>handleClick(id)}>
  click me
</Button>
    </div>
  );
};

export default Post;