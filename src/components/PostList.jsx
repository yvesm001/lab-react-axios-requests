import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
    
  return <div>
    <h3>Posts list:</h3>
    
        
    {posts ? (
        posts.map((element) => (
          <div key={element.id}>
            <Link to={`/posts/${element.id}`}>
              <h1>{element.title}</h1>
            </Link>
            <p>{element.body}</p>
          </div>
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </div>
}
