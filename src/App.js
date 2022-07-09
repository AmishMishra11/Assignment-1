import "./App.css";
import { useComment } from "./Context/CommentContext";

import Post from "./Components/Post";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { stateComment } = useComment();
  const { allComments } = stateComment;

  const posts = allComments?.filter((item, index) => index % 5 === 0);

  const [display, setDisplay] = useState("active");

  return (
    <div className="App p-5 bg-slate-100">
      <h1 className="font-bold text-3xl ">Manage Comments</h1>

      <div className="flex justify-start items-center py-3">
        <h3
          style={
            display === "active" ? { color: "#A084CF" } : { color: "#9DD6DF" }
          }
          className="p-2 m-2 text-2xl cursor-pointer rounded-lg font-bold"
          onClick={() => setDisplay("active")}
        >
          Active Comments
        </h3>
        <h3
          style={
            display === "delete" ? { color: "#A084CF" } : { color: "#9DD6DF" }
          }
          className="p-2 m-2 text-2xl cursor-pointer rounded-lg font-bold "
          onClick={() => setDisplay("delete")}
        >
          Deleted Comments
        </h3>
      </div>
      {display === "active" && (
        <div>
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
      )}

      {display === "delete" && <div>This is Deleted Comment page</div>}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default App;
