import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
