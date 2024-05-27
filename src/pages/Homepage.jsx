import PostList from "../components/PostList";

export default function Homepage({ posts }) {
    return (
    <div>
      <PostList posts={posts}/>
    </div>
  );
}
