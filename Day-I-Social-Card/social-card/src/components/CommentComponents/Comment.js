import React from 'react';
import './Comment.css';

const Comment = (props) => {
  
  return (
    <div className="commentBlock">
      <p>{props.value}</p>
    </div>
  )
}

export default Comment;