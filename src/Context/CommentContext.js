import { createContext, useContext, useEffect, useState } from "react";
import { getComments } from "../Services/Comments/GetCommentsApi";

const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {
  useEffect(() => {
    getComments(setAllComments);
  }, []);

  const [allComments, setAllComments] = useState([]);

  return (
    <CommentContext.Provider value={{ allComments, setAllComments }}>
      {children}
    </CommentContext.Provider>
  );
};

const useComment = () => useContext(CommentContext);

export { CommentContextProvider, useComment };
