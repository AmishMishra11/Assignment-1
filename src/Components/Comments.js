import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { useComment } from "../Context/CommentContext";
import Order from "./Order";
function Comments(postId) {
  const { stateComment } = useComment();
  const { allComments } = stateComment;

  const comments = allComments.filter((item) => item.postId === postId.postId);

  const [search, setSearch] = useState("");

  const showComments = comments.filter((item) =>
    item.body.includes(search.toLowerCase())
  );

  const [tempPassedComments, setTempPassedComments] = useState([]);

  const handleCheckboxInput = (e) => {
    const commentToInsert = comments.filter(
      // eslint-disable-next-line
      (item) => item.id == e.target.value
    );
    if (
      !tempPassedComments.find(
        (element) => element.id === commentToInsert[0].id
      )
    ) {
      setTempPassedComments((preComments) => [
        ...preComments,
        ...commentToInsert,
      ]);
    } else {
      setTempPassedComments((preComments) =>
        // eslint-disable-next-line
        preComments.filter((item) => item.id != commentToInsert[0].id)
      );
    }
  };

  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-start gap-4 ">
        <div className="flex items-center gap-6">
          <h2 className="text-lg">Comments</h2>
          <div className="flex items-center justify-start p-2 border-2 rounded-l-full rounded-r-full border-black text-sm ">
            <BiSearch className="text-xl" />
            <input
              className="pl-2 outline-none"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="  rounded-xl   border-2 border-gray-400 flex ">
          <div className="flex flex-col items-start  ">
            <div className="flex items-center w-full border-b-2 border-gray-600">
              <h3 className="border-r-2 w-40 p-2 border-gray-600 ">Name</h3>
              <h3 className=" w-96 p-2 ">Comments</h3>
            </div>
            <div className="">
              {showComments.length ? (
                showComments.map((item) => (
                  <div key={item.id} className="flex items-start  ">
                    <div className="w-40 p-2 text-ellipsis overflow-hidden whitespace-nowrap border-r-2 border-gray-600">
                      {item.name}
                    </div>

                    <div className=" flex items-center justify-between p-2   ">
                      <label
                        className="w-80 text-ellipsis overflow-hidden whitespace-nowrap pr-8"
                        htmlFor={item.id}
                      >
                        {item.body}
                      </label>
                      <input
                        className="bg-red"
                        type="checkbox"
                        id={item.id}
                        value={item.id}
                        onChange={handleCheckboxInput}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No Comments</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Order
        tempPassedComments={tempPassedComments}
        setTempPassedComments={setTempPassedComments}
      />
    </div>
  );
}

export default Comments;
