import React from 'react';

import './styles.css';

function Comment({ data }) {
  return (
    <li className="CommentList">
      <img src={data.author.avatar} alt=""/>
      <strong>{data.author.name} <span>{data.content}</span>
      </strong>
    </li>   
  );
}

export default Comment;