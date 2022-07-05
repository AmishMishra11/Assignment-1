import axios from "axios";

export const getComments = async (setAllComments) => {
  try {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
    });

    if (res.status === 200) {
      setAllComments(res.data);
    }
  } catch (e) {
    console.log("error occurred :", e);
  }
};
