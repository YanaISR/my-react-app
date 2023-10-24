import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post)=>{
        return (<div>
            <Link to={`${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
        </div>)
      })}

    </div>
  );
};

export default Posts;
