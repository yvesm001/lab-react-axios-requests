import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
  const [post, setPosts] = useState(null);
  const { postId } = useParams();

  async function getSinglePost() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div>
      Post Details
      {post ? (
        <div>
          <h1>Title: {post.title}</h1>
          <p> Body: {post.body} </p>
          <p> Id: {post.id} </p>
          <p> userId: {post.userId} </p>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
