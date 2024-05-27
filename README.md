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

### 3. Start the Application

1. Run the application:
   ```bash
   npm run dev
   ```

### 4. Clear Initial Structure

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

### 5. Create Components and Pages Folder

1. Create `components` and `pages` folders inside `src`:

- src/components
- src/pages

2. Create Homepage and PostDetails under `pages`

- src/pages/Homepage.jsx
- src/pages/PostDetails.jsx

3. Create PostList under `components`

- src/components/PostList.jsx

## Application Setup

### 6. Configure React Router

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

### 7. Define Routes in App.jsx

1. Create routes to render Homepage.jsx and PostDetails.jsx

| Path               | Element          |
| ------------------ | ---------------- |
| `"/"`              | `<Homepage/>`    |
| `"/posts/:postId"` | `<PostDetails/>` |

### 8. Render `PostList` component in the `Homepage` page

### 9. Set Up State and Fetch Data in App.jsx

1. Create a asynchronous function that makes a `GET` request using `axios` to the JSONPlaceholder api.
   - https://jsonplaceholder.typicode.com/posts
2. Store the response data in a state
3. Send the state as props to the `PostList` component

### 10. In `PostList` component, render the list of posts

1. Make sure to receive the state in the props
2. Use the state to conditionally render (i.e: state ? render posts : loading)
3. Render post title, body and id
4. Each post should be embraced with a link taking to `/posts/postId`

### 11. In `PostDetails` page, render post information

1. Use `useParams()` to get the post id
2. Use that ID to make another request to the JSONPlaceholder API to retrieve a single post
3. Render that post details

## Optional Styling

- You can add your personal styling to the components and pages. Create CSS files as needed and import them into your components.

This completes the lab exercise for creating a React application using Vite and Axios to make requests to the JSONPlaceholder API and display the data using React Router.
