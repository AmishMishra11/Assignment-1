import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useComment } from "../Context/CommentContext";
import Comments from "./Comments";

function Post({ post }) {
  const { stateComment, dispatchComment } = useComment();

  const { selectedPost } = stateComment;

  const { postId } = post;

  const selectedCalc = () => {
    if (selectedPost.includes(postId)) return true;
    return false;
  };

  const [selected, setSelected] = useState(selectedCalc());

  return (
    <div>
      <li className="p-2 font-semibold text-lg flex flex-col items-start justify-center ">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => {
            dispatchComment({ type: "SELECTED_POST", payload: postId });

            setSelected((prev) => !prev);
          }}
        >
          <div className="text-2xl ">
            {selected ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
          Post : {postId}
        </div>
        {selected && (
          <div className="p-2 pl-10">
            <Comments postId={postId} />
          </div>
        )}
      </li>
    </div>
  );
}

export default Post;
