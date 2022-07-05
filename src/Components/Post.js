import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Comments from "./Comments";

function Post({ post }) {
  const [selected, setSelected] = useState(false);

  const { postId } = post;

  return (
    <div>
      <li className="p-2 font-semibold text-lg flex flex-col items-start justify-center cursor-pointer">
        <div
          className="flex items-center"
          onClick={() => setSelected((prev) => !prev)}
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
