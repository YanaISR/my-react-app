import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };

    getPost();
  }, [id]);
  return (
    <>
      <h2>Post Page</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
