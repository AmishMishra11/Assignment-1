import React from "react";

import { BiSearch } from "react-icons/bi";
import { useComment } from "../Context/CommentContext";
function Comments(postId) {
  const { allComments } = useComment();

  const comments = allComments.filter((item) => item.postId === postId.postId);

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-6">
        <h2 className="text-lg">Comments</h2>
        <div className="flex items-center justify-start p-2 border-2 rounded-l-full rounded-r-full border-black text-sm ">
          <BiSearch className="text-xl" />
          <input className="pl-2" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="  rounded-xl   border-2 border-gray-400 flex ">
        <div className="flex flex-col items-start  ">
          <div className="flex items-center w-full border-b-2 border-gray-600">
            <h3 className="border-r-2 w-40 p-2 border-gray-600 ">Name</h3>
            <h3 className=" w-96 p-2   ">Comments</h3>
          </div>
          <div className="w-full">
            {comments.map((item) => (
              <div key={item.id} className="flex items-start  ">
                <div className="w-40 p-2 text-ellipsis overflow-hidden whitespace-nowrap border-r-2 border-gray-600">
                  {item.name}
                </div>

                <div className=" flex items-center justify-between p-2   ">
                  <p className="w-80 text-ellipsis overflow-hidden whitespace-nowrap pr-8">
                    {item.body}
                  </p>
                  <input type="checkbox" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
