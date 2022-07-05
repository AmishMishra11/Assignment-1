import "./App.css";
import { useComment } from "./Context/CommentContext";

import Post from "./Components/Post";

function App() {
  const { allComments } = useComment();

  const posts = allComments?.filter((item, index) => index % 5 === 0);

  return (
    <div className="App p-5">
      <h1 className="font-bold text-3xl">Manage Comments</h1>

      <div className="flex justify-start items-center py-3">
        <h3 className="p-2 text-lg">Active Comments</h3>
        <h3 className="p-2 text-lg">Deleted Comments</h3>
      </div>
      {posts ? (
        <ul>
          {posts?.map((post) => (
            <Post post={post} key={post.postId} />
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
