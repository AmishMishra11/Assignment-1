import axios from "axios";

export const getComments = async (dispatchComment) => {
  try {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
    });

    if (res.status === 200) {
      dispatchComment({ type: "GET_ALL_COMMENTS", payload: res.data });
    }
  } catch (e) {
    console.log("error occurred :", e);
  }
};
