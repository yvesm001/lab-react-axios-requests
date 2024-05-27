import { Route, Routes } from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import Homepage from "./pages/Homepage";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>React Axios Requests</h1>

      <Routes>
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="/" element={<Homepage posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
