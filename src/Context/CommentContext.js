import { createContext, useContext, useEffect, useReducer } from "react";
import { CommentReducer } from "../Reducer/CommentReducer";
import { getComments } from "../Services/Comments/GetCommentsApi";

const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {
  useEffect(() => {
    getComments(dispatchComment);
  }, []);

  const [stateComment, dispatchComment] = useReducer(CommentReducer, {
    allComments: [],
    selectedPost: [],
  });

  return (
    <CommentContext.Provider value={{ stateComment, dispatchComment }}>
      {children}
    </CommentContext.Provider>
  );
};

const useComment = () => useContext(CommentContext);

export { CommentContextProvider, useComment };
