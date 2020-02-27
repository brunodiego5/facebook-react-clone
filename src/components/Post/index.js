import React from 'react';
import Comment from '../Comment';

import './styles.css';

function Post({ data }) {
  return (
    <li className="PostList">
      <div className="post">
        <div className="profile">
          <img src={data.author.avatar} alt=""/>
          <div className="info">
            <strong>{data.author.name}</strong>
            <small>{data.date}</small>
          </div>
        </div>

        <p>{data.content}</p>
      </div>
      <ul className="comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}          
      </ul>
    </li>   
  );
}

export default Post;