import React, { useState } from "react";
import { useComment } from "../Context/CommentContext";

function Modal({ setModalOpen, editCommentId, setTempPassedComments }) {
  const { stateComment, dispatchComment } = useComment();
  const { allComments } = stateComment;

  const findEditComment = allComments.find((item) => item.id === editCommentId);

  const [editCommentBody, setEditCommentBody] = useState(findEditComment.body);

  const handleSave = () => {
    dispatchComment({
      type: "UPDATE_COMMENTS",
      payload: { editCommentBody, editCommentId },
    });

    setTempPassedComments((prevComments) =>
      prevComments.map((item) =>
        item.id === editCommentId ? { ...item, body: editCommentBody } : item
      )
    );

    setModalOpen(false);
  };

  return (
    <div className=" fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 bg-secondary p-4 rounded-lg flex flex-col items-start justify-between h-56 w-96">
      <h3>Edit Comment</h3>

      <div className="flex items-center justify-between w-full">
        <input
          className="w-full p-2"
          value={editCommentBody}
          onChange={(e) => setEditCommentBody(e.target.value)}
        />
      </div>

      <div className="flex  justify-end w-full">
        <p
          className="p-2 cursor-pointer bg-primary m-2 rounded-md text-background"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </p>
        <p
          className="p-2 cursor-pointer bg-primary m-2 rounded-md text-background"
          onClick={handleSave}
        >
          Save
        </p>
      </div>
    </div>
  );
}

export default Modal;
