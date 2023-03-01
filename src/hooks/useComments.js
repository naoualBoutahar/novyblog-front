import { useQuery } from "react-query";
import axios from "axios";

const fetchComments = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/comments`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

const fetchComment= async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/comments/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export default function useComments() {
  return useQuery("comments", fetchComments
  );
}

export function useComment(id) {
  return useQuery(["comment",id],()=> fetchComment(id));
}

