# React Axios Requests Lab

In this exercise, you'll create a React application using Vite and Axios to make requests to the JSONPlaceholder API. You'll set up state to handle the API response data and display it across different pages using React Router.

## Initial Setup

### 1. Create a React Application Using Vite

1. Open your terminal.
2. Run the following command to create a new Vite project:
   ```bash
   npm create vite@latest react-axios-requests -- --template react
   ```
3. Navigate to your project directory:
   ```bash
   cd react-axios-requests
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### 2. Install Packages

1. Install Axios and React Router DOM:
   ```bash
   npm install axios react-router-dom
   ```

### 3. Clear Initial Structure

1. Open `src/App.jsx` and clear its content. Replace it with a basic functional component:

   ```jsx
   import React from "react";

   function App() {
     return (
       <div>
         <h1>React Axios Requests</h1>
       </div>
     );
   }

   export default App;
   ```

2. Delete `src/index.css` and remove its import from `src/main.jsx`:

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import App from "./App";
   // import './index.css'; // Remove this line

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

### 4. Create Components and Pages Folder

1. Create `components` and `pages` folders inside `src`:
   ```bash
   mkdir src/components src/pages
   ```

## Application Setup

### 5. Configure React Router

1. Open `src/main.jsx` and set up BrowserRouter:

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import { BrowserRouter } from "react-router-dom";
   import App from "./App";

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

### 6. Define Routes and Create Page Components

1. Create `src/pages/Homepage.jsx`:

   ```jsx
   import React from "react";
   import PostList from "../components/PostList";

   function Homepage({ posts }) {
     return (
       <div>
         <h1>Homepage</h1>
         <PostList posts={posts} />
       </div>
     );
   }

   export default Homepage;
   ```

2. Create `src/pages/PostDetails.jsx`:

   ```jsx
   import React, { useEffect, useState } from "react";
   import { useParams } from "react-router-dom";
   import axios from "axios";

   function PostDetails() {
     const { postId } = useParams();
     const [post, setPost] = useState(null);

     useEffect(() => {
       const fetchPost = async () => {
         try {
           const response = await axios.get(
             `https://jsonplaceholder.typicode.com/posts/${postId}`
           );
           setPost(response.data);
         } catch (error) {
           console.error("Error fetching post:", error);
         }
       };

       fetchPost();
     }, [postId]);

     return (
       <div>
         {post ? (
           <div>
             <h1>{post.title}</h1>
             <p>{post.body}</p>
           </div>
         ) : (
           <p>Loading...</p>
         )}
       </div>
     );
   }

   export default PostDetails;
   ```

### 7. Create PostList Component

1. Create `src/components/PostList.jsx`:

   ```jsx
   import React from "react";
   import { Link } from "react-router-dom";

   function PostList({ posts }) {
     return (
       <div>
         {posts.map((post) => (
           <div key={post.id}>
             <Link to={`/posts/${post.id}`}>
               <h2>{post.title}</h2>
             </Link>
           </div>
         ))}
       </div>
     );
   }

   export default PostList;
   ```

### 8. Set Up State and Fetch Data in App.jsx

1. Open `src/App.jsx` and modify it to fetch data and pass it as props:

   ```jsx
   import React, { useEffect, useState } from "react";
   import { Routes, Route } from "react-router-dom";
   import axios from "axios";
   import Homepage from "./pages/Homepage";
   import PostDetails from "./pages/PostDetails";

   function App() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
       const fetchPosts = async () => {
         try {
           const response = await axios.get(
             "https://jsonplaceholder.typicode.com/posts"
           );
           setPosts(response.data);
         } catch (error) {
           console.error("Error fetching posts:", error);
         }
       };

       fetchPosts();
     }, []);

     return (
       <Routes>
         <Route path="/" element={<Homepage posts={posts} />} />
         <Route path="/posts/:postId" element={<PostDetails />} />
       </Routes>
     );
   }

   export default App;
   ```

### 9. Start the Application

1. Run the application:
   ```bash
   npm run dev
   ```

## Optional Styling

- You can add your personal styling to the components and pages. Create CSS files as needed and import them into your components.

This completes the lab exercise for creating a React application using Vite and Axios to make requests to the JSONPlaceholder API and display the data using React Router.
