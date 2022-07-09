export const CommentReducer = (stateComment, actionComment) => {
  switch (actionComment.type) {
    case "GET_ALL_COMMENTS":
      return { ...stateComment, allComments: actionComment.payload };

    case "UPDATE_COMMENTS":
      return {
        ...stateComment,
        allComments: stateComment.allComments.map((prevComments) =>
          prevComments.id === actionComment.payload.editCommentId
            ? { ...prevComments, body: actionComment.payload.editCommentBody }
            : prevComments
        ),
      };

    case "SELECTED_POST":
      return {
        ...stateComment,
        selectedPost: [...stateComment.selectedPost, actionComment.payload],
      };

    default:
      return stateComment;
  }
};
