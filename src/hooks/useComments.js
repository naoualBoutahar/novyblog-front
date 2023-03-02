import { useMutation, useQuery } from "react-query";
import axios from "axios";

const getAllComments = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/comments`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

const getCommentById= async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/comments/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};



export default function useComments() {
  return useQuery("comments", getAllComments
  );
}

export function useComment(id) {
  return useQuery(["comment",id],()=> getCommentById(id));
}

export function useAddComment(){
  const addCommentMutation=useMutation(
    async (comment)=>{
      const {data}=await axios.post("http://localhost:8080/api/v1/comments",comment)
    return data;
    }
  )
  const addComment=async (comment)=>{addCommentMutation.mutateAsync(comment)}
return {addComment, isLoading:addCommentMutation.isLoading}
}



